# Generated by Django 4.2.4 on 2023-12-18 12:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0023_alter_student_teamid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='teamID',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='studRegistration.team'),
        ),
    ]