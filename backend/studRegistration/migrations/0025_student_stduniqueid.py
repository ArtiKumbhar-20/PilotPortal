# Generated by Django 4.2.4 on 2024-01-05 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0024_alter_student_teamid'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='stdUniqueID',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
