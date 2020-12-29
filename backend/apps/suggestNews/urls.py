from django.urls import path, include
from rest_framework import routers
from .views import SuggestEventViewSet, TimeTableSViewSet, TopicsSViewSet, PostSViewSet, LinkedTextSViewSet, \
    NewsFeedSViewSet, SliderSViewSet, PageViewSet, BooksViewSet, ArticleViewSet, SideBarSectionViewSet, \
    SideBarItemViewSet

router = routers.DefaultRouter()
router.register('suggestEvent', SuggestEventViewSet)
router.register('TimeTable', TimeTableSViewSet)
router.register('Topics', TopicsSViewSet)
router.register('Post', PostSViewSet)
router.register('LinkedText', LinkedTextSViewSet)
router.register('NewsFeed', NewsFeedSViewSet)
router.register('Slider', SliderSViewSet)
router.register('Page', PageViewSet)
router.register('Books', BooksViewSet)
router.register('Article', ArticleViewSet)
router.register('SideBarSection', SideBarSectionViewSet)
router.register('SideBarItem', SideBarItemViewSet)
