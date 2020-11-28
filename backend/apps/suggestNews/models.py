from django.db import models


class SuggestEvent(models.Model):
    title = models.CharField(max_length=20)
    textFont = models.CharField(default="default",max_length=256)
    titleFont = models.CharField(default="default", max_length=256)
    date = models.CharField(default="default", max_length=256)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Article(models.Model):
    subTitle = models.CharField(max_length=256)
    mainText = models.TextField()
    attachment = models.FileField()
    videoLink = models.CharField(max_length=256)
    videoBackground = models.FileField()
    News = models.ForeignKey(SuggestEvent, on_delete=models.CASCADE)


class Topics(models.Model):
    topic = models.CharField(max_length=128, default="fruit")

    class Meta:
        verbose_name = "Topic"
        verbose_name_plural = "Topics"
        ordering = ('topic',)

    def __str__(self):
        return self.topic


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


class Subject(models.Model):
    title = models.TextField()

    class Meta:
        verbose_name = 'Subject'
        verbose_name_plural = 'Subjects'
        ordering = ('title',)


class Books(models.Model):
    linkOnDownload = models.FileField()
    cover = models.FileField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)