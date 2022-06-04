import time
import json
import googleapiclient.discovery
from cache import RecommendationsCache, RecommendationItem
from datetime import datetime
from threading import Thread
from googleapiclient.errors import HttpError

DAY_IN_SECONDS = 24 * 60 * 60


class RecommendationFetcher:
    def __init__(self,
                 api_keys=None,
                 recommendations_cache=None,
                 search_terms=None,
                 update_interval=int(DAY_IN_SECONDS / 10),
                 max_results=100,
                 cache_ttl=int(DAY_IN_SECONDS / 4)):
        if api_keys is None or len(api_keys) == 0:
            raise Exception("cannot initialize recommendations fetcher without any api key")
        if search_terms is None:
            search_terms = []
        if recommendations_cache is None:
            recommendations_cache = RecommendationsCache()

        self.api_keys = api_keys.copy()
        self.remaining_api_keys = api_keys.copy()
        self.yt_client = initialize_youtube_client(self.remaining_api_keys.pop())
        self.recommendations_cache = recommendations_cache
        self.search_terms = search_terms
        self.update_interval = update_interval
        self.max_results = max_results
        self.cache_ttl = cache_ttl

        self._stop = False
        self._runner = Thread(target=self.period_recommendation_update)

    def start(self):
        self._runner.start()

    def stop(self, wait=True):
        self._stop = True
        if self.yt_client is not None:
            self.yt_client.close()
        if wait:
            self._runner.join()

    def period_recommendation_update(self):
        last_update = 0
        while not self._stop:
            now = datetime.now().timestamp()
            if now - self.update_interval > last_update:
                self.recommendations_cache.clean()
                self._update_recommendations()
                last_update = now
            time.sleep(10)

    def _update_recommendations(self):
        """
        searches for recommendations given certain search terms
        and updates the recommendations cache
        the search term order is prioritized and the next search term
        is only used if the previous one
        """
        # youtube channel thumbnails require an extra request to fetch
        # although the quota cost is only 1 it is nice to cache it by channel id
        youtube_channel_thumbnails = {}

        next_page_token = ""
        for search_term in self.search_terms:
            while True:
                try:
                    request = self.yt_client.search().list(
                        part="snippet",
                        q=search_term,
                        maxResults=self.max_results,
                        pageToken=next_page_token
                    )
                    result = request.execute()

                    # update next_page_token and exit if no more pages left
                    if "nextPageToken" not in result.keys():
                        next_page_token = ""
                        break

                    next_page_token = result["nextPageToken"]
                    recommendation_items = []
                    for item in result["items"]:
                        try:
                            recommendation = self.parse_recommendation(item, youtube_channel_thumbnails)
                            if recommendation is not None:
                                recommendation_items.append(recommendation)
                        except Exception as e:
                            continue
                            # print("failed to parse recommendation:", e)
                            # print(recommendation)

                    # update the cache until it is full again
                    is_full = self.recommendations_cache.update(recommendation_items)
                    if is_full:
                        return

                except HttpError as e:
                    # check for forbidden error code
                    # this would mean that the api key exceeded the quota
                    error_code = json.loads(e.content)["error"]["code"]
                    if error_code == 403:
                        self.refresh_yt_client()

    def parse_recommendation(self, recommendation: dict, yt_channel_thumbnails_cache: dict) -> RecommendationItem:
        item_id = recommendation["id"]
        snippet = recommendation["snippet"]

        # try to get the channel thumbnail from cache
        if snippet["channelId"] in yt_channel_thumbnails_cache.keys():
            channel_thumbnail = yt_channel_thumbnails_cache[snippet["channelId"]]
        else:
            req = self.yt_client.channels().list(
                part="snippet",
                id=snippet["channelId"]
            )
            response = req.execute()
            channel_thumbnail = response["items"][0]["snippet"]["thumbnails"]["medium"]["url"]
            yt_channel_thumbnails_cache[snippet["channelId"]] = channel_thumbnail

        return RecommendationItem(
            snippet["title"],
            snippet["channelTitle"],
            snippet["channelId"],
            channel_thumbnail,
            snippet["thumbnails"]["medium"]["url"],
            int(datetime.strptime(snippet["publishedAt"], "%Y-%m-%dT%H:%M:%SZ").timestamp()),
            item_id["videoId"],
            self.cache_ttl,
            int(datetime.now().timestamp())
        )

    def refresh_yt_client(self):
        # resets api keys in hopes of the previously
        # expired ones having reset again
        if len(self.remaining_api_keys) == 0:
            self.remaining_api_keys = self.api_keys.copy()

        self.yt_client = initialize_youtube_client(self.remaining_api_keys.pop())


def initialize_youtube_client(api_key):
    api_service_name = "youtube"
    api_version = "v3"
    return googleapiclient.discovery.build(
        api_service_name, api_version, developerKey=api_key)
