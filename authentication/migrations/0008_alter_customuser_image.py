# Generated by Django 4.0.3 on 2022-08-18 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0007_alter_customuser_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='image',
            field=models.ImageField(default='/Assets/default user.jpeg', upload_to='images'),
        ),
    ]
