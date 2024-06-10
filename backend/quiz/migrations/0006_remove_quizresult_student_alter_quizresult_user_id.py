# Generated by Django 5.0.4 on 2024-06-03 14:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0005_alter_quizresult_student'),
        ('studRegistration', '0036_team_teamuniqueid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quizresult',
            name='student',
        ),
        migrations.AlterField(
            model_name='quizresult',
            name='user_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='studRegistration.student'),
        ),
    ]
