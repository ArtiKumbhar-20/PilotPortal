# Generated by Django 4.2.4 on 2024-02-20 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idea', '0007_alter_ideasub_ideateaminstiid'),
    ]

    operations = [
        migrations.AddField(
            model_name='ideasub',
            name='ideaStatus',
            field=models.CharField(default='Idea Submitted', max_length=100),
        ),
    ]
