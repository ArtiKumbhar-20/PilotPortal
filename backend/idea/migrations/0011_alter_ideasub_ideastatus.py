# Generated by Django 4.2.4 on 2024-06-01 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idea', '0010_remove_ideasub_ideateamceo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ideasub',
            name='ideaStatus',
            field=models.CharField(default='Submitted', max_length=100),
        ),
    ]