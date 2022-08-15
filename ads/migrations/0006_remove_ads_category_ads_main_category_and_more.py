# Generated by Django 4.0.6 on 2022-08-15 09:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ads', '0005_filter_category_main_category_sub_filter_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ads',
            name='category',
        ),
        migrations.AddField(
            model_name='ads',
            name='main_category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ads_categories', to='ads.main_category'),
        ),
        migrations.AddField(
            model_name='ads',
            name='sub_category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ads_categories', to='ads.sub_category'),
        ),
    ]
