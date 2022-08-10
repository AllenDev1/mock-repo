# Generated by Django 4.0.6 on 2022-08-08 11:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ads', '0002_report'),
    ]

    operations = [
        migrations.AddField(
            model_name='ads',
            name='ad_id',
            field=models.CharField(default=1000000000, max_length=13),
        ),
        migrations.AddField(
            model_name='ads',
            name='ad_views',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='ads',
            name='created_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='ads',
            name='name',
            field=models.CharField(default='car', max_length=100),
        ),
    ]
