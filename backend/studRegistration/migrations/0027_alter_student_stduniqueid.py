# Generated by Django 4.2.4 on 2024-01-05 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0026_alter_student_stduniqueid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='stdUniqueID',
            field=models.PositiveIntegerField(blank=True, max_length=9, null=True, unique=True),
        ),
    ]
