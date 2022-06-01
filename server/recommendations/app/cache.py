import datetime
from json import dumps
from random import randrange
from dataclasses import dataclass, asdict
from threading import Lock, Condition


@dataclass
class RecommendationItem:
    """
    A recommendation is a representation
    of a youtube video search result
    """
    title: str
    channel_title: str
    channel_id: str
    thumbnail_url: str
    channel_thumbnail: str
    publish_time: int
    video_id: str
    ttl: int
    insertion_time: int

    @property
    def __dict__(self):
        return asdict(self)

    @property
    def json(self):
        return dumps(self.__dict__)


class RecommendationsCache:
    """
    keeps a record of the last submitted recommendations
    it is thread safe to read and update
    """
    def __init__(self, max_cache_size=1000):
        self.max_cache_size = max_cache_size
        self.cache: dict[str: RecommendationItem] = {}
        self.lock = Lock()
        self.wait_for_write = Condition()

    def get_recommendations(self, n=10) -> [RecommendationItem]:
        """
        gets n random recommendations from the cache
        """
        if len(self.cache) == 0:
            return []

        while self.lock.locked():
            with self.wait_for_write:
                self.wait_for_write.wait()

        recommendations = []
        keys = list(self.cache.keys())
        while len(recommendations) < n and len(keys) > 0:
            i = randrange(0, len(keys))
            keys[i], keys[-1] = keys[-1], keys[i]
            recommendation = keys.pop()
            recommendations.append(self.cache[recommendation])

        return recommendations

    def clean(self):
        """
        deletes expired recommendations from cache
        """
        self.lock.acquire()
        now = datetime.datetime.now().timestamp()
        to_delete = []
        for k, recommendation in self.cache.items():
            if recommendation.insertion_time + recommendation.ttl < now:
                to_delete.append(k)

        for k in to_delete:
            del self.cache[k]
        self.lock.release()
        with self.wait_for_write:
            self.wait_for_write.notify_all()

    def update(self, recommendations: [RecommendationItem]) -> bool:
        """
        updates cache with new recommendations
        returns True if the cache is full after this update
        """
        self.lock.acquire()
        # if we can fit all recommendations in the cache just do it
        if len(recommendations) < self.max_cache_size - len(self.cache):
            for recommendation in recommendations:
                self.cache[recommendation.title + recommendation.channel_id] = recommendation
            self.lock.release()
            with self.wait_for_write:
                self.wait_for_write.notify_all()
            return False

        # fill up the cache with randomly found elements
        while len(self.cache) < self.max_cache_size:
            i = randrange(len(recommendations))
            recommendations[i], recommendations[-1] = recommendations[-1], recommendations[i]
            recommendation = recommendations.pop()
            self.cache[recommendation.title + recommendation.channel_id] = recommendation

        self.lock.release()
        with self.wait_for_write:
            self.wait_for_write.notify_all()
        return True


