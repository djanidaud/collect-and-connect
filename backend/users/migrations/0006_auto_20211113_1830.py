# Generated by Django 3.2.9 on 2021-11-13 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_profile_phone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='post_code',
        ),
        migrations.AddField(
            model_name='profile',
            name='bio',
            field=models.TextField(blank=True, max_length=500),
        ),
    ]
