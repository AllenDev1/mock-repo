# Generated by Django 4.0.6 on 2022-08-25 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_rename_blog_helpful_bloghelpful'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='image_caption',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]