# Generated by Django 4.0.6 on 2022-08-03 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ads', '0002_report'),
    ]

    operations = [
        migrations.AddField(
            model_name='ads',
            name='adid',
            field=models.CharField(max_length=13, null=True),
        ),
    ]
