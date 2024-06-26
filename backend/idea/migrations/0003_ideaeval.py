# Generated by Django 4.2.4 on 2023-10-22 06:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('idea', '0002_ideastat'),
    ]

    operations = [
        migrations.CreateModel(
            name='IdeaEval',
            fields=[
                ('evalID', models.AutoField(primary_key=True, serialize=False)),
                ('evalPanelistID', models.CharField(max_length=100)),
                ('evalTeamID', models.CharField(max_length=100)),
                ('evalAffordable', models.CharField(max_length=100)),
                ('evalSustainable', models.CharField(max_length=100)),
                ('evalScalable', models.CharField(max_length=100)),
                ('evalUniversal', models.CharField(max_length=100)),
                ('evalRapid', models.CharField(max_length=100)),
                ('evalExcellent', models.CharField(max_length=100)),
                ('evalDistinctive', models.CharField(max_length=100)),
                ('evalWow', models.CharField(max_length=100)),
                ('evalScopeIPs', models.CharField(max_length=100)),
                ('evalMarketNeed', models.CharField(max_length=100)),
                ('evalSupplyChain', models.CharField(max_length=100)),
                ('evalScopeRevenue', models.CharField(max_length=100)),
                ('evalCompetition', models.CharField(max_length=100)),
                ('evalEaseOfOperation', models.CharField(max_length=100)),
                ('evalBonus', models.CharField(max_length=100)),
                ('evalRecommendedToIncu', models.CharField(max_length=100)),
                ('evalAreaOfImprov', models.CharField(max_length=100)),
                ('evalOverallFeedback', models.CharField(max_length=100)),
                ('recordCreatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordCreatedBy', models.CharField(default='admin', max_length=100)),
                ('recordUpdatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordUpdatedBy', models.CharField(default='admin', max_length=100)),
            ],
        ),
    ]
