from __future__ import unicode_literals

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.utils.html import format_html, format_html_join

from wagtail.contrib.modeladmin.options import (
    ModelAdmin, ModelAdminGroup, modeladmin_register
)
from wagtail.contrib.modeladmin.views import EditView
from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.whitelist import attribute_rule

from teachers_digital_platform.models import (
    ActivityBuildingBlock, ActivitySchoolSubject, ActivityTopic, ActivitySubTopic, ActivityGradeLevel, ActivityAgeRange,
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


class ActivityTopicModelAdmin(ModelAdmin):
    model = ActivityTopic
    menu_icon = 'list-ul'
    menu_label = 'Topic'


class ActivitySubTopicModelAdmin(ModelAdmin):
    model = ActivitySubTopic
    menu_icon = 'list-ul'
    menu_label = 'Sub-topic'


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
    menu_label = 'JumpStart Coalition'


class ActivityCouncilForEconEdModelAdmin(ModelAdmin):
    model = ActivityCouncilForEconEd
    menu_icon = 'list-ul'
    menu_label = 'Council for Economic Education'


@modeladmin_register
class MyModelAdminGroup(ModelAdminGroup):
    menu_label = 'Activity search'
    menu_icon = 'list-ul'
    items = (
        ActivityBuildingBlockModelAdmin,
        ActivitySchoolSubjectModelAdmin,
        ActivityTopicModelAdmin,
        ActivitySubTopicModelAdmin,
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


def editor_js():
    js_files = [
        'js/html_editor.js',
    ]
    js_includes = format_html_join(
        '\n', '<script src="{0}{1}"></script>',
        ((settings.STATIC_URL, filename) for filename in js_files)
    )

    return js_includes + format_html(
        """
        <script>
            registerHalloPlugin('editHtmlButton');
            registerHalloPlugin('answermodule');
        </script>
        """
    )



def whitelister_element_rules():
    allow_html_class = attribute_rule({'class': True})

    allowed_tags = ['aside', 'table', 'tr', 'th', 'td', 'tbody', 'thead',
                    'tfoot', 'col', 'colgroup']

    return {tag: allow_html_class for tag in allowed_tags}


hooks.register('insert_editor_js', editor_js)
hooks.register(
    'construct_whitelister_element_rules', whitelister_element_rules)
