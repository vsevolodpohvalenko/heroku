from django.urls import path, include
from rest_framework import routers
from .views import SuggestEventViewSet, TimeTableSViewSet, TopicsSViewSet, PostSViewSet, PostPartSViewSet, \
    NewsFeedSViewSet, SliderSViewSet, SubjectViewSet, BooksViewSet, ArticleViewSet, SideBarSectionViewSet, \
    SideBarItemViewSet

router = routers.DefaultRouter()
router.register('suggestEvent', SuggestEventViewSet)
router.register('TimeTable', TimeTableSViewSet)
router.register('Topics', TopicsSViewSet)
router.register('Post', PostSViewSet)
router.register('PostPart', PostPartSViewSet)
router.register('NewsFeed', NewsFeedSViewSet)
router.register('Slider', SliderSViewSet)
router.register('Subject', SubjectViewSet)
router.register('Books', BooksViewSet)
router.register('Article', ArticleViewSet)
router.register('SideBarSection', SideBarSectionViewSet)
router.register('SideBarItem', SideBarItemViewSet)
