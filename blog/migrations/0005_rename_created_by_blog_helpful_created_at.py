# Generated by Django 4.0.6 on 2022-08-19 12:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_blog_helpful'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog_helpful',
            old_name='created_by',
            new_name='created_at',
        ),
    ]