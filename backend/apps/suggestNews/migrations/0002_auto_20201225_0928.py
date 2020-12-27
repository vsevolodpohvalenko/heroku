# Generated by Django 3.1.2 on 2020-12-25 09:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suggestNews', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subTitle', models.CharField(blank=True, max_length=256)),
                ('mainText', models.TextField(blank=True)),
                ('fontForText', models.CharField(blank=True, max_length=256)),
                ('fontForTitle', models.CharField(blank=True, max_length=256)),
                ('attachment', models.FileField(upload_to='')),
                ('videoLink', models.CharField(blank=True, max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linkOnDownload', models.FileField(upload_to='')),
                ('cover', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='NewsFeed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('text', models.TextField()),
                ('photo', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='PostPart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attachment', models.FileField(upload_to='')),
                ('link', models.CharField(max_length=256)),
                ('title', models.CharField(max_length=128)),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='SideBarItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('link', models.CharField(default='/', max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='SideBarSubMenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('icon', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slide', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
            ],
            options={
                'verbose_name': 'Subject',
                'verbose_name_plural': 'Subjects',
                'ordering': ('title',),
            },
        ),
        migrations.CreateModel(
            name='SuggestEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='title', max_length=128)),
                ('titleFont', models.CharField(default='default', max_length=256)),
                ('titleSize', models.CharField(default='2', max_length=256)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='TimeTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_tableA', models.FileField(upload_to='')),
                ('time_tableB', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Topics',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(default='fruit', max_length=128)),
            ],
            options={
                'verbose_name': 'Topic',
                'verbose_name_plural': 'Topics',
                'ordering': ('topic',),
            },
        ),
        migrations.DeleteModel(
            name='SuggestNews',
        ),
        migrations.AddField(
            model_name='sidebaritem',
            name='SubMenu',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='suggestNews.sidebarsubmenu'),
        ),
        migrations.AddField(
            model_name='newsfeed',
            name='topic',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='suggestNews.topics'),
        ),
        migrations.AddField(
            model_name='books',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='suggestNews.subject'),
        ),
        migrations.AddField(
            model_name='article',
            name='News',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='suggestNews.suggestevent'),
        ),
    ]