from django.db import models


class SuggestNews(models.Model):
    title = models.CharField(max_length=20)
    mainText = models.TextField()
    attachments = models.FileField()
    active = models.BooleanField(default=False)


class Topics(models.Model):
    topic: models.CharField(max_length=128)


class NewsFeed(models.Model):
    topic = models.ForeignKey(Topics, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    text = models.TextField()
    photo = models.FileField()


class Slider(models.Model):
    slide = models.FileField()


class TimeTable(models.Model):
    time_tableA = models.FileField()
    time_tableB = models.FileField()


class Post(models.Model):
    title = models.CharField(max_length=128)


class PostPart(models.Model):
    attachment = models.FileField()
    link = models.CharField(max_length=256)
    title = models.CharField(max_length=128)
    text = models.TextField()