from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import SuggestEvent, Topics, TimeTable, NewsFeed, PostPart, Post, Slider, Subject, Books, Article
from .serializers import SuggestEventSerializer, TopicsS, TimeTableS, NewsFeedS, PostPartS, PostS, SliderS, SubjectS, \
    BooksS, ArticleS


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


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SubjectS


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
