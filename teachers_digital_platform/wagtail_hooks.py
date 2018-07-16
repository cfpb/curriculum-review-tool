from __future__ import unicode_literals

from django.conf import settings
from flags.decorators import flag_check
from flags.state import flag_enabled
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.utils.html import format_html, format_html_join

from mptt.admin import DraggableMPTTAdmin

from wagtail.contrib.modeladmin.options import (
    ModelAdmin, ModelAdminGroup, modeladmin_register
)
from wagtail.contrib.modeladmin.views import EditView
from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.whitelist import attribute_rule

from teachers_digital_platform.models import (
    ActivityBuildingBlock, ActivitySchoolSubject, ActivityTopic, ActivityGradeLevel, ActivityAgeRange,
    ActivitySpecialPopulation, ActivityType, ActivityTeachingStrategy, ActivityBloomsTaxonomyLevel,
    ActivityDuration, ActivityJumpStartCoalition, ActivityCouncilForEconEd
)


class ActivityBuildingBlockModelAdmin(ModelAdmin):
    model = ActivityBuildingBlock
    menu_label = 'Building Block'
    menu_icon = 'list-ul'


class ActivitySchoolSubjectModelAdmin(ModelAdmin):
    model = ActivitySchoolSubject
    menu_icon = 'list-ul'
    menu_label = 'School Subject'


class ActivityTopicModelAdmin(DraggableMPTTAdmin):
    model = ActivityTopic
    menu_icon = 'list-ul'
    menu_label = 'Topic'


admin.site.register(ActivityTopic, ActivityTopicModelAdmin)


class ActivityGradeLevelModelAdmin(ModelAdmin):
    model = ActivityGradeLevel
    menu_icon = 'list-ul'
    menu_label = 'Grade level'


class ActivityAgeRangeModelAdmin(ModelAdmin):
    model = ActivityAgeRange
    menu_icon = 'list-ul'
    menu_label = 'Age range'


class ActivitySpecialPopulationModelAdmin(ModelAdmin):
    model = ActivitySpecialPopulation
    menu_icon = 'list-ul'
    menu_label = 'Special population'


class ActivityTypeModelAdmin(ModelAdmin):
    model = ActivityType
    menu_icon = 'list-ul'
    menu_label = 'Activity type'


class ActivityTeachingStrategyModelAdmin(ModelAdmin):
    model = ActivityTeachingStrategy
    menu_icon = 'list-ul'
    menu_label = 'Teaching strategy'


class ActivityBloomsTaxonomyLevelModelAdmin(ModelAdmin):
    model = ActivityBloomsTaxonomyLevel
    menu_icon = 'list-ul'
    menu_label = 'Bloom\'s taxonomy level'


class ActivityDurationtModelAdmin(ModelAdmin):
    model = ActivityDuration
    menu_icon = 'list-ul'
    menu_label = 'Activity duration'


class ActivityJumpStartCoalitionModelAdmin(ModelAdmin):
    model = ActivityJumpStartCoalition
    menu_icon = 'list-ul'
    menu_label = 'Jump$tart Coalition'


class ActivityCouncilForEconEdModelAdmin(ModelAdmin):
    model = ActivityCouncilForEconEd
    menu_icon = 'list-ul'
    menu_label = 'Council for Economic Education'

if flag_enabled('TDP_SEARCH_INTERFACE'):
    @modeladmin_register
    class MyModelAdminGroup(ModelAdminGroup):
        menu_label = 'Activity search'
        menu_icon = 'list-ul'
        items = (
            ActivityBuildingBlockModelAdmin,
            ActivitySchoolSubjectModelAdmin,
            ActivityGradeLevelModelAdmin,
            ActivityAgeRangeModelAdmin,
            ActivitySpecialPopulationModelAdmin,
            ActivityTypeModelAdmin,
            ActivityTeachingStrategyModelAdmin,
            ActivityBloomsTaxonomyLevelModelAdmin,
            ActivityDurationtModelAdmin,
            ActivityJumpStartCoalitionModelAdmin,
            ActivityCouncilForEconEdModelAdmin,
        )
