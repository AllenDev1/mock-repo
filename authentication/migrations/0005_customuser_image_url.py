# Generated by Django 4.0.3 on 2022-08-11 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_alter_customuser_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='image_url',
            field=models.URLField(default=None, null=True),
        ),
    ]
