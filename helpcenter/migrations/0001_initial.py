# Generated by Django 3.0.3 on 2022-06-21 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HelpCenter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(db_index=True, max_length=20)),
                ('email_phone', models.CharField(db_index=True, max_length=100)),
                ('category', models.CharField(db_index=True, max_length=100)),
                ('message', models.CharField(db_index=True, max_length=500)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('-created_date',),
            },
        ),
    ]
