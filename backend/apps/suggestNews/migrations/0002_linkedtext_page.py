# Generated by Django 3.1.2 on 2020-12-29 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suggestNews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='linkedtext',
            name='page',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='suggestNews.page'),
        ),
    ]
