# Generated by Django 3.1.2 on 2020-12-06 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipient',
            old_name='address',
            new_name='name',
        ),
        migrations.AddField(
            model_name='recipient',
            name='comment',
            field=models.TextField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='recipient',
            name='category',
            field=models.CharField(choices=[('shaxs', 'Shaxs'), ('tashkilot', 'Tashkilot')], max_length=255, verbose_name='Category'),
        ),
    ]