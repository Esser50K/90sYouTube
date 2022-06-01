FROM python:3.9-alpine

# dependencies for gevent
RUN apk add --no-cache build-base libffi-dev

COPY requirements.txt /
RUN pip3 install -r /requirements.txt
RUN opentelemetry-bootstrap --action=install

COPY app /app
WORKDIR /app

ENV OTEL_RESOURCE_ATTRIBUTES=service.name=90sYoutubeSearch
ENV OTEL_METRICS_EXPORTER=none
ENV OTEL_EXPORTER_OTLP_ENDPOINT="http://144.126.140.147:4317"

ENTRYPOINT ["opentelemetry-instrument", "python3", "main.py"]