# Generated by Django 4.0.6 on 2022-07-04 11:40

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0003_terms_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='terms',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
