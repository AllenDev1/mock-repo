# Generated by Django 3.0.3 on 2022-06-28 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0002_auto_20220621_1109'),
    ]

    operations = [
        migrations.AddField(
            model_name='terms',
            name='type',
            field=models.CharField(choices=[('PRIVACY', 'privacy'), ('TERMS', 'terms of use'), ('COMMUNITY_TERMS', 'community terms')], default='terms', max_length=15),
        ),
    ]