# Generated by Django 4.0.6 on 2022-08-15 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Carrer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('job_type', models.CharField(choices=[('INTERN', 'intern'), ('JUNIOR', 'junior'), ('MID-SENIOR', 'mid-senior'), ('SENIOR', 'senior'), ('EXECUTIVE', 'executive'), ('DIRECTOR', 'director')], max_length=30)),
                ('no_of_roles', models.IntegerField()),
                ('location', models.CharField(max_length=40)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='JobApplicants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50, verbose_name='email address')),
                ('phone_number', models.IntegerField()),
                ('address', models.CharField(max_length=50)),
                ('resume', models.ImageField(upload_to='images/resumes')),
                ('linkedin', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
