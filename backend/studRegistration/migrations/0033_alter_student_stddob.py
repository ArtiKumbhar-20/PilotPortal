# Generated by Django 4.1.1 on 2024-01-12 18:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0032_alter_student_stddob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='stdDOB',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]