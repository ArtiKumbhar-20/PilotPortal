# Generated by Django 4.2.4 on 2023-09-21 09:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='paneID',
        ),
    ]
