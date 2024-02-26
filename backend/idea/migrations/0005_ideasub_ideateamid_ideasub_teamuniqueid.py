# Generated by Django 4.2.4 on 2024-02-20 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idea', '0004_delete_ideaeval'),
    ]

    operations = [
        migrations.AddField(
            model_name='ideasub',
            name='ideaTeamID',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='ideasub',
            name='teamUniqueID',
            field=models.PositiveIntegerField(blank=True, null=True, unique=True),
        ),
    ]