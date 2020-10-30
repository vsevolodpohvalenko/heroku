from rest_framework import serializers
from .models import SuggestNews, NewsFeed, TimeTable, PostPart, Post, Topics, Slider


class SuggestNewsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SuggestNews
        fields = "__all__"


class NewsFeedS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NewsFeed
        fields = "__all__"


class TimeTableS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TimeTable
        fields = "__all__"


class PostPartS(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PostPart
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
