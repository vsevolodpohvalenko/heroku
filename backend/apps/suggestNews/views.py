from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import SuggestNews, Topics, TimeTable, NewsFeed, PostPart, Post, Slider
from .serializers import SuggestNewsSerializer, TopicsS, TimeTableS, NewsFeedS, PostPartS, PostS, SliderS


class SuggestNewsViewSet(viewsets.ModelViewSet):
    queryset = SuggestNews.objects.all()
    serializer_class = SuggestNewsSerializer
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


class PostPartSViewSet(viewsets.ModelViewSet):
    queryset = PostPart.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostPartS


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
