# Generated by Django 4.2.4 on 2023-10-30 05:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0019_alter_student_stdinstiid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='teamInstiID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studRegistration.institute'),
        ),
    ]
