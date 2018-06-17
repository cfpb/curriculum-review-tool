from django.db import models

from wagtail.core.models import Page
from wagtail.search import index
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel, FieldRowPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtaildocs.models import Document
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel


class ActivityIndexPage(Page):
    """
    A model for the Activity Search page.
    """
    intro = RichTextField(blank=True)
    alert = RichTextField(blank=True)

    content_panels = Page.content_panels = [
        FieldPanel('intro'),
        FieldPanel('alert'),
    ]


@register_snippet
class ActivityBuildingBlock(models.Model):
    title = models.CharField(max_length=255)
    icon = models.ImageField()


@register_snippet
class ActivitySchoolSubject(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityTopic(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityGradeRange(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityAge(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivitySpecialPopulations(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityType(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityTeachingStrategies(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityBloomsTaxonomyLevel(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityLength(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityJumpstartNatStandards(models.Model):
    title = models.CharField(max_length=255)


@register_snippet
class ActivityCouncilForEconEd(models.Model):
    title = models.CharField(max_length=255)


class ActivityPage(Page):
    """
    A model for the Activity Detail page.
    """
    title = models.CharField(max_length=255)
    published_date = models.DateField('Published date')
    updated_date = models.DateField('Updated date')
    summary = models.TextField('Summary', max_length=500)
    big_idea = RichTextField('Big idea', blank=True)
    essential_questions = RichTextField('Essential question(s)', blank=True)
    objectives = RichTextField('Objective(s)', blank=True)
    what_students_will_do = RichTextField('What students will do', blank=True)
    activity_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    handout_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    building_blocks = models.ManyToManyField(ActivityBuildingBlock, blank=True, null=True)
    # Primary Focus
    school_subject = models.ManyToManyField(ActivitySchoolSubject, blank=True, null=True)
    topic = models.ManyToManyField(ActivityTopic, blank=True, null=True)
    # Audience
    grade_range = models.ForeignKey(ActivityGradeRange, blank=True, null=True)
    age = models.ForeignKey(ActivityAge, blank=True, null=True)
    special_populations = models.ManyToManyField(ActivitySpecialPopulations, blank=True, null=True)
    # Activity Characteristics
    activity_type = models.ForeignKey(ActivityType, blank=True, null=True)
    teaching_strategies = models.ManyToManyField(ActivityTeachingStrategies, blank=True, null=True)
    blooms_taxonomy_level = models.ForeignKey(ActivityBloomsTaxonomyLevel, blank=True, null=True)
    activity_length = models.ForeignKey(ActivityLength, blank=True, null=True)
    # Standards taught
    jumpstart_national_standards = models.ForeignKey(ActivityJumpstartNatStandards, blank=True, null=True)
    council_for_economic_education = models.ForeignKey(ActivityCouncilForEconEd, blank=True, null=True)

    content_panels = Page.content_panels = [
        FieldPanel('title'),
        FieldPanel('published_date'),
        FieldPanel('updated_date'),
        FieldPanel('summary'),
        FieldPanel('big_idea'),
        FieldPanel('essential_questions'),
        FieldPanel('objectives'),
        FieldPanel('what_students_will_do'),
        MultiFieldPanel(
            [
                DocumentChooserPanel('activity_file'),
                DocumentChooserPanel('handout_file'),
            ],
            heading="Download activities",
        ),
        FieldPanel('building_blocks'),
        MultiFieldPanel(
            [
                FieldPanel('school_subject'),
                FieldPanel('topic'),
            ],
            heading="Primary focus",
        ),
        MultiFieldPanel(
            [
                FieldPanel('grade_range'),
                FieldPanel('age'),
                FieldPanel('special_populations'),
            ],
            heading="Audience",
        ),
        MultiFieldPanel(
            [
                FieldPanel('activity_type'),
                FieldPanel('teaching_strategies'),
                FieldPanel('blooms_taxonomy_level'),
                FieldPanel('activity_length'),
            ],
            heading="Activity characteristics",
        ),
        MultiFieldPanel(
            [
                FieldPanel('jumpstart_national_standards'),
                FieldPanel('council_for_economic_education'),
            ],
            heading="Standards taught",
        ),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('title'),
        index.SearchField('summary'),
        index.SearchField('big_idea'),
        index.SearchField('essential_questions'),
        index.SearchField('objectives'),
        index.SearchField('what_students_will_do'),
        index.FilterField('published_date'),
        index.FilterField('updated_date'),
        index.FilterField('building_blocks'),
        index.FilterField('school_subject'),
        index.FilterField('topic'),
        index.FilterField('grade_range'),
        index.FilterField('age'),
        index.FilterField('special_populations'),
        index.FilterField('activity_type'),
        index.FilterField('teaching_strategies'),
        index.FilterField('blooms_taxonomy_level'),
        index.FilterField('activity_length'),
        index.FilterField('jumpstart_national_standards'),
        index.FilterField('council_for_economic_education'),
    ]
