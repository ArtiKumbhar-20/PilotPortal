# Generated by Django 4.2.4 on 2023-08-26 14:26

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0011_merge_0010_catalyst_catalysttype_0010_team'),
    ]

    operations = [
        migrations.CreateModel(
            name='IdeaStat',
            fields=[
                ('ideaStatID', models.AutoField(primary_key=True, serialize=False)),
                ('ideaStatStatus', models.CharField(max_length=100)),
                ('ideaStatMarketResearch', models.CharField(max_length=100)),
                ('ideaStatAdvBoot', models.CharField(max_length=100)),
                ('ideaStatIncuSupport', models.CharField(max_length=100)),
                ('ideaStatIPRTrademark', models.CharField(max_length=100)),
                ('ideaStatIPRPatent', models.CharField(max_length=100)),
                ('ideaStatIPRCopyright', models.CharField(max_length=100)),
                ('ideaStatBusinessPlan', models.CharField(max_length=100)),
                ('ideaStatIPRTradeSecrets', models.CharField(max_length=100)),
                ('ideaStatProto', models.CharField(max_length=100)),
                ('ideaStatTeamPlacement', models.CharField(max_length=100)),
                ('ideaStatIncorpStatus', models.CharField(max_length=100)),
                ('ideaStatEmploybilitySkilling', models.CharField(max_length=100)),
                ('recordCreatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordCreatedBy', models.CharField(default='admin', max_length=100)),
                ('recordUpdatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordUpdatedBy', models.CharField(default='admin', max_length=100)),
            ],
        ),
    ]