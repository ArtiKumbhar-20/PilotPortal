# Generated by Django 4.2.4 on 2023-10-30 05:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('studRegistration', '0020_alter_team_teaminstiid'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalyst',
            name='catalystInstiID',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='studRegistration.institute'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='panelist',
            name='panelistInstiID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studRegistration.institute'),
        ),
    ]
