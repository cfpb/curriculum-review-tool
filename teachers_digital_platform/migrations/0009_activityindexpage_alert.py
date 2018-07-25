# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import wagtail.wagtailcore.fields
import wagtail.wagtailcore.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0008_auto_20180717_1346'),
    ]

    operations = [
        migrations.AddField(
            model_name='activityindexpage',
            name='alert',
            field=wagtail.wagtailcore.fields.StreamField([(b'heading', wagtail.wagtailcore.blocks.RichTextBlock()), (b'paragraph', wagtail.wagtailcore.blocks.CharBlock())], default=''),
            preserve_default=False,
        ),
    ]
