# Generated by Django 4.0.6 on 2022-07-04 12:13

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0004_alter_terms_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='terms',
            name='description',
            field=tinymce.models.HTMLField(blank=True, null=True),
        ),
    ]
