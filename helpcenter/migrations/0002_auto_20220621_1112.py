# Generated by Django 3.0.3 on 2022-06-21 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('helpcenter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='helpcenter',
            name='message',
            field=models.TextField(db_index=True, max_length=500),
        ),
    ]
