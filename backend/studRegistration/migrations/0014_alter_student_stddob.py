# Generated by Django 4.2.4 on 2023-09-21 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0013_delete_ideastat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='stdDOB',
            field=models.CharField(max_length=100),
        ),
    ]
