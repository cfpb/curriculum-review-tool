from django import forms
from django.db import models

from modelcluster.fields import ParentalKey, ParentalManyToManyField

from wagtail.wagtailcore.models import Page
from wagtail.wagtailsearch import index
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, MultiFieldPanel, FieldRowPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtaildocs.models import Document
from wagtail.wagtailimages.models import Image
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel

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
    icon = models.ForeignKey(
        'wagtailimages.Image', null=True, blank=True,
        on_delete=models.SET_NULL, related_name='+'
    )

    panels = [
        FieldPanel('title'),
        ImageChooserPanel('icon'),
    ]

    def __str__(self):
        return self.title


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
    building_blocks = ParentalManyToManyField('teachers_digital_platform.ActivityBuildingBlock', blank=True)
    # Primary Focus
    school_subject = ParentalManyToManyField('teachers_digital_platform.ActivitySchoolSubject', blank=True)
    topic = ParentalManyToManyField('teachers_digital_platform.ActivityTopic', blank=True)
    # Audience
    grade_range = models.ForeignKey(ActivityGradeRange, blank=True)
    age = models.ForeignKey(ActivityAge, blank=True)
    special_populations = ParentalManyToManyField('teachers_digital_platform.ActivitySpecialPopulations', blank=True)
    # Activity Characteristics
    activity_type = models.ForeignKey(ActivityType, blank=True)
    teaching_strategies = ParentalManyToManyField('teachers_digital_platform.ActivityTeachingStrategies', blank=True)
    blooms_taxonomy_level = models.ForeignKey(ActivityBloomsTaxonomyLevel, blank=True)
    activity_length = models.ForeignKey(ActivityLength, blank=True, null=True)
    # Standards taught
    jumpstart_national_standards = models.ForeignKey(ActivityJumpstartNatStandards, blank=True)
    council_for_economic_education = models.ForeignKey(ActivityCouncilForEconEd, blank=True)

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
        FieldPanel('building_blocks', widget=forms.CheckboxSelectMultiple),
        MultiFieldPanel(
            [
                FieldPanel('school_subject', widget=forms.CheckboxSelectMultiple),
                FieldPanel('topic', widget=forms.CheckboxSelectMultiple),
            ],
            heading="Primary focus",
        ),
        MultiFieldPanel(
            [
                FieldPanel('grade_range'),
                FieldPanel('age'),
                FieldPanel('special_populations', widget=forms.CheckboxSelectMultiple),
            ],
            heading="Audience",
        ),
        MultiFieldPanel(
            [
                FieldPanel('activity_type'),
                FieldPanel('teaching_strategies', widget=forms.CheckboxSelectMultiple),
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
