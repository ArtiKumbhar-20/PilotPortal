# Generated by Django 4.2.4 on 2023-08-21 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='eventEndTime',
            field=models.TextField(default='00:00:00'),
        ),
    ]