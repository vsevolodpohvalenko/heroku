from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import SuggestEvent, Topics, TimeTable, NewsFeed, LinkedText, Post, Slider, Page, Books, Article, \
    SideBarSubMenu, SideBarItem
from .serializers import SuggestEventSerializer, TopicsS, TimeTableS, NewsFeedS, LinkedTextS, PostS, SliderS, PageS, \
    BooksS, ArticleS, SideBarSubMenuS, SideBarItemS


class SuggestEventViewSet(viewsets.ModelViewSet):
    queryset = SuggestEvent.objects.all()
    serializer_class = SuggestEventSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class TopicsSViewSet(viewsets.ModelViewSet):
    queryset = Topics.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TopicsS


class NewsFeedSViewSet(viewsets.ModelViewSet):
    queryset = NewsFeed.objects.all()
    serializer_classes = NewsFeedS
    permission_classes = [
        permissions.AllowAny
    ]


class TimeTableSViewSet(viewsets.ModelViewSet):
    queryset = TimeTable.objects.all()
    serializer_class = TimeTableS
    permission_classes = [
        permissions.AllowAny
    ]


class NewsFeedSViewSet(viewsets.ModelViewSet):
    queryset = NewsFeed.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = NewsFeedS


class LinkedTextSViewSet(viewsets.ModelViewSet):
    queryset = LinkedText.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LinkedTextS


class PostSViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostS
    permission_classes = [
        permissions.AllowAny
    ]


class SliderSViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SliderS


class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PageS


class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BooksS


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArticleS


class SideBarSectionViewSet(viewsets.ModelViewSet):
    queryset = SideBarSubMenu.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SideBarSubMenuS


class SideBarItemViewSet(viewsets.ModelViewSet):
    queryset = SideBarItem.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SideBarItemS
