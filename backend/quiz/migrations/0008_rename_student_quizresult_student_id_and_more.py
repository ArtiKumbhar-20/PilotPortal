# Generated by Django 5.0.4 on 2024-06-03 15:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0007_quizresult_student_alter_quizresult_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quizresult',
            old_name='student',
            new_name='student_id',
        ),
        migrations.RemoveField(
            model_name='quizresult',
            name='user_id',
        ),
    ]