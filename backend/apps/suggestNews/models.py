from django.db import models


class SuggestEvent(models.Model):
    title = models.CharField(max_length=128, default="title")
    titleFont = models.CharField(default="Poppins", max_length=256)
    titleSize = models.CharField(default='2', max_length=256)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Article(models.Model):
    subTitle = models.CharField(max_length=256, blank=True)
    mainText = models.TextField(blank=True)
    fontForText = models.CharField(max_length=256, blank=True)
    fontForTitle = models.CharField(max_length=256, blank=True)
    attachment = models.FileField()
    videoLink = models.CharField(max_length=256, blank=True)
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


class Page(models.Model):
    pageName = models.CharField(max_length=128)

    class Meta:
        verbose_name = 'Page'
        verbose_name_plural = 'Pages'
        ordering = ('pageName',)


class LinkedText(models.Model):
    link = models.CharField(max_length=256)
    title = models.CharField(max_length=128)
    page = models.ForeignKey(Page, on_delete=models.CASCADE, default=1)


class Books(models.Model):
    linkOnDownload = models.FileField()
    cover = models.FileField()
    page = models.ForeignKey(Page, on_delete=models.CASCADE, default="smth")


class SideBarSubMenu(models.Model):
    name = models.CharField(max_length=256)
    icon = models.CharField(max_length=256)


class SideBarItem(models.Model):
    name = models.CharField(max_length=256)
    SubMenu = models.ForeignKey(SideBarSubMenu, blank=True, on_delete=models.CASCADE)
    link = models.CharField(max_length=256, default="/")
