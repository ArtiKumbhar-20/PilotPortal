# Generated by Django 4.2.4 on 2024-01-05 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0025_student_stduniqueid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='stdUniqueID',
            field=models.CharField(blank=True, max_length=9, null=True, unique=True),
        ),
    ]
