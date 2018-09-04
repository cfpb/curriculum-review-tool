# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0017_change_special_pop_to_student_chars'),
    ]

    operations = [
        migrations.RunSQL([
            "UPDATE teachers_digital_platform_activitystudentcharacteristics SET title='English language learners', weight=0 WHERE id=1;",
            "UPDATE teachers_digital_platform_activitystudentcharacteristics SET title='Low income', weight=2 WHERE id=2;",
            "UPDATE teachers_digital_platform_activitystudentcharacteristics SET title='Rural', weight=3 WHERE id=3;",
            "UPDATE teachers_digital_platform_activitystudentcharacteristics SET title='Special education', weight=1 WHERE id=4;",
            "UPDATE teachers_digital_platform_activitystudentcharacteristics SET title='Urban', weight=4 WHERE id=5;",
        ])
    ]
