# Generated by Django 4.0.3 on 2023-08-20 09:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IdeaSub',
            fields=[
                ('ideaID', models.AutoField(primary_key=True, serialize=False)),
                ('ideaTeamName', models.CharField(max_length=100)),
                ('ideaTeamInstiID', models.CharField(default='1', max_length=100)),
                ('ideaTeamCFO', models.CharField(max_length=100)),
                ('ideaTeamCEO', models.CharField(max_length=100)),
                ('ideaTeamCTO', models.CharField(max_length=100)),
                ('ideaTeamCOO', models.CharField(max_length=100)),
                ('ideaTeamCMO', models.CharField(max_length=100)),
                ('ideaTeamPSdetail', models.CharField(max_length=100)),
                ('ideaTeamPersona1', models.CharField(max_length=100)),
                ('ideaTeamPersona2', models.CharField(max_length=100)),
                ('ideaTeamInterviews', models.CharField(max_length=100)),
                ('ideaTeamQuestions', models.CharField(max_length=100)),
                ('ideaTeamInsights', models.CharField(max_length=100)),
                ('ideaTeamFinalPS', models.CharField(max_length=100)),
                ('ideaTeamDomain', models.CharField(max_length=100)),
                ('ideaTeamSDG', models.CharField(max_length=100)),
                ('ideaTeamSolnCount', models.CharField(max_length=100)),
                ('ideaTeamTopSoln1', models.CharField(max_length=100)),
                ('ideaTeamTopSoln2', models.CharField(max_length=100)),
                ('ideaTeamTopSoln3', models.CharField(max_length=100)),
                ('ideaTeamQuickVal', models.CharField(max_length=100)),
                ('ideaTeamFinalSoln', models.CharField(max_length=100)),
                ('ideaTeamOfferingType', models.CharField(max_length=100)),
                ('ideaTeamTechReq', models.CharField(max_length=100)),
                ('ideaTeamHardwareReq', models.CharField(max_length=100)),
                ('ideaTeamNonTechReq', models.CharField(max_length=100)),
                ('ideaTeamProtoTime', models.CharField(max_length=100)),
                ('ideaTeamProtoCost', models.CharField(max_length=100)),
                ('ideaTeamIncuSupport', models.CharField(max_length=100)),
                ('recordCreatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordCreatedBy', models.CharField(default='admin', max_length=100)),
                ('recordUpdatedOn', models.DateField(default=django.utils.timezone.now)),
                ('recordUpdatedBy', models.CharField(default='admin', max_length=100)),
            ],
        ),
    ]
