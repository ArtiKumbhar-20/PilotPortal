# Generated by Django 4.0.3 on 2024-06-01 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idea', '0014_alter_ideaeval_evalareaofimprov_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ideaeval',
            name='evalRecommendedToIncu',
            field=models.CharField(max_length=100),
        ),
    ]
