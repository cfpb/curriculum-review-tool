# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0015_auto_20180816_0954'),
    ]

    operations = [
        migrations.RunSQL([
            "SELECT setval('teachers_digital_platform_activitybuildingblock_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitybuildingblock));",
            "SELECT setval('teachers_digital_platform_activityschoolsubject_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityschoolsubject));",
            "SELECT setval('teachers_digital_platform_activitytopic_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitytopic));",
            "SELECT setval('teachers_digital_platform_activitygradelevel_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitygradelevel));",
            "SELECT setval('teachers_digital_platform_activityagerange_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityagerange));",
            "SELECT setval('teachers_digital_platform_activityspecialpopulation_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityspecialpopulation));",
            "SELECT setval('teachers_digital_platform_activitytype_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitytype));",
            "SELECT setval('teachers_digital_platform_activityteachingstrategy_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityteachingstrategy));",
            "SELECT setval('teachers_digital_platform_activitybloomstaxonomylevel_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitybloomstaxonomylevel));",
            "SELECT setval('teachers_digital_platform_activityduration_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityduration));",
            "SELECT setval('teachers_digital_platform_activityjumpstartcoalition_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activityjumpstartcoalition));",
            "SELECT setval('teachers_digital_platform_activitycouncilforeconed_id_seq', (SELECT MAX(id) FROM teachers_digital_platform_activitycouncilforeconed));",
        ])
    ]
