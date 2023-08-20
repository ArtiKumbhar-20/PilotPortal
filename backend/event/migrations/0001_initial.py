# Generated by Django 4.0.3 on 2023-08-20 09:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('eventID', models.AutoField(primary_key=True, serialize=False)),
                ('eventTitle', models.CharField(max_length=100)),
                ('eventInstiID', models.CharField(default='1', max_length=100)),
                ('eventType', models.CharField(max_length=100)),
                ('eventLocation', models.CharField(max_length=100)),
                ('eventDescr', models.TextField()),
                ('eventSPOCFname', models.CharField(max_length=100)),
                ('eventSPOCLname', models.CharField(max_length=100)),
                ('eventSPOCMobile', models.CharField(max_length=10)),
                ('eventSPOCWhatsapp', models.CharField(max_length=10)),
                ('eventSPOCEmail', models.EmailField(max_length=254)),
                ('eventSPOCWeb', models.CharField(max_length=100)),
                ('eventStartTime', models.TimeField()),
                ('eventStartDate', models.DateField()),
                ('eventEndDate', models.DateField()),
                ('eventGuidelines', models.TextField()),
                ('recordCreatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordCreatedBy', models.CharField(default='admin', max_length=100)),
                ('recordUpdatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordUpdatedBy', models.CharField(default='admin', max_length=100)),
            ],
        ),
    ]
