import os
import sys
from opentelemetry import trace
from flask import Flask, request
from flask_cors import CORS
from werkzeug.exceptions import BadRequest
from cache import RecommendationsCache
from fetcher import RecommendationFetcher
from gevent import pywsgi

app = Flask(__name__)
CORS(app)
tracer = trace.get_tracer(__name__)

# Request Types
GET = "GET"
POST = "POST"
DELETE = "DELETE"

cache = None
fetcher = None


@app.route("/recommendations", methods=[GET])
def search():
    result_size = 64
    if "result_count" in request.args:
        try:
            result_size = int(request.args["result_count"])
        except:
            print("submitted non integer result size: %s" % (request.args["result_count"]))
            return BadRequest("bad result_count")

    with tracer.start_as_current_span("get-recommendations-from-cache"):
        recommendations = cache.get_recommendations(n=result_size)

    recommendations = list(map(lambda x: x.__dict__, recommendations))
    return {"recommendations": recommendations}


if __name__ == '__main__':
    try:
        search_terms = os.getenv("SEARCH_TERMS").split(",")
        api_keys = os.getenv("API_KEYS").split(",")
        if len(api_keys) == 0:
            print("missing required API_KEY env")
            sys.exit(1)

        cache = RecommendationsCache(max_cache_size=1000)
        fetcher = RecommendationFetcher(api_keys, cache, search_terms=search_terms)
        fetcher.start()

        print("Starting WebServer...")
        server = pywsgi.WSGIServer(('', 8081), app)
        server.serve_forever()

    except KeyboardInterrupt:
        if fetcher is not None:
            fetcher.stop()

        sys.exit(0)

