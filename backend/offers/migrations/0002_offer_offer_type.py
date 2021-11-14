# Generated by Django 3.2.9 on 2021-11-13 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='offer_type',
            field=models.CharField(choices=[('ITEM', 'Item'), ('SERVICE', 'Service'), ('OTHER', 'Other')], default=('ITEM', 'Item'), max_length=30),
        ),
    ]