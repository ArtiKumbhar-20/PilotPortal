# Generated by Django 4.1.1 on 2024-01-13 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0010_alter_profile_forget_password_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='verification_otp',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
