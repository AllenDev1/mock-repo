# Generated by Django 4.0.6 on 2022-08-18 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ads', '0006_remove_ads_category_ads_main_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ads',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
