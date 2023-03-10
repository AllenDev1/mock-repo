# Generated by Django 4.0.6 on 2022-08-09 09:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ads', '0004_alter_ads_ad_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Filter_Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('data_type', models.CharField(choices=[('STR', 'String'), ('LOC', 'Loction'), ('CHO', 'Choice'), ('RAN-P', 'Range  for price'), ('RAN-K', 'Range for kilometer'), ('RAN-M', 'Range for manufacture'), ('RAN-P', 'Range  for plot'), ('RAN-S', 'Range for sq.foot')], default='STR', max_length=6)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'filter_category',
                'verbose_name_plural': 'filter_categories',
            },
        ),
        migrations.CreateModel(
            name='Main_Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'main_category',
                'verbose_name_plural': 'main_categories',
            },
        ),
        migrations.CreateModel(
            name='Sub_Filter_Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('data_type', models.CharField(choices=[('STR', 'String'), ('LOC', 'Loction'), ('CHO', 'Choice'), ('RAN-P', 'Range  for price'), ('RAN-K', 'Range for kilometer'), ('RAN-M', 'Range for manufacture'), ('RAN-P', 'Range  for plot'), ('RAN-S', 'Range for sq.foot')], default='STR', max_length=6)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='ads.filter_category')),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'sub_filter_category',
                'verbose_name_plural': 'sub_filter_categories',
            },
        ),
        migrations.CreateModel(
            name='Sub_Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='ads.main_category')),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'sub_category',
                'verbose_name_plural': 'sub_categories',
            },
        ),
        migrations.AddField(
            model_name='filter_category',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='ads.sub_category'),
        ),
        migrations.AddField(
            model_name='filter_category',
            name='updated_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
