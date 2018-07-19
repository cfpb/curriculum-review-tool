# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0007_auto_20180704_0907'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activitytopic',
            name='parent',
            field=mptt.fields.TreeForeignKey(related_name='parents', blank=True, to='teachers_digital_platform.ActivityTopic', null=True),
        ),
    ]
