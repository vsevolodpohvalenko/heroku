from rest_framework import serializers
from .models import NewsFeed, TimeTable, LinkedText, Post, Topics, Slider, Books, Page, Article, \
    SuggestEvent, SideBarItem, SideBarSubMenu


class SuggestEventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SuggestEvent
        fields = "__all__"


class NewsFeedS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NewsFeed
        fields = "__all__"


class TimeTableS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TimeTable
        fields = "__all__"


class LinkedTextS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LinkedText
        fields = "__all__"


class PostS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class TopicsS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topics
        fields = "__all__"


class SliderS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Slider
        fields = "__all__"


class PageS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Page
        fields = "__all__"


class BooksS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Books
        fields = "__all__"


class ArticleS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"


class SideBarSubMenuS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SideBarSubMenu
        fields = '__all__'


class SideBarItemS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SideBarItem
        fields = '__all__'
