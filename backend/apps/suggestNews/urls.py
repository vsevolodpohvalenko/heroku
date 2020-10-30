from django.urls import path, include
from rest_framework import routers
from .views import SuggestNewsViewSet, TimeTableSViewSet, TopicsSViewSet, PostSViewSet, PostPartSViewSet, \
    NewsFeedSViewSet, SliderSViewSet

router = routers.DefaultRouter()
router.register('suggestNews', SuggestNewsViewSet)
router.register('TimeTable', TimeTableSViewSet)
router.register('Topics', TopicsSViewSet)
router.register('Post', PostSViewSet)
router.register('PostPart', PostPartSViewSet)
router.register('NewsFeed', NewsFeedSViewSet)
router.register('Slider', SliderSViewSet)
