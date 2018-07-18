from django import forms
from django.db import models
from django.utils import timezone
from django.conf import settings

from modelcluster.fields import ParentalKey, ParentalManyToManyField

from mptt.models import MPTTModel, TreeForeignKey, TreeManyToManyField

from teachers_digital_platform.fields import ParentalTreeManyToManyField

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, ObjectList, StreamFieldPanel,
    TabbedInterface
)

from wagtail.wagtailcore.models import Page, PageManager
from wagtail.wagtailsearch import index
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, MultiFieldPanel, FieldRowPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtaildocs.models import Document
from wagtail.wagtailimages.models import Image
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel

from v1.models import CFGOVPage, CFGOVPageManager, CFGOVImage


class ActivityIndexPage(CFGOVPage):
    """
    A model for the Activity Search page.
    """

    subpage_types = ['teachers_digital_platform.ActivityPage']
    objects = CFGOVPageManager() 
    intro = RichTextField(blank=True)
    #  alert = RichTextField(blank=True)  # Move this to a StreamField

    content_panels = CFGOVPage.content_panels + [
        FieldPanel('intro'),
        #  FieldPanel('alert'),
    ]

    edit_handler = TabbedInterface([
        ObjectList(content_panels, heading='General Content'),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    @classmethod
    def can_create_at(cls, parent):
        # You can only create one of these!
        return super(ActivityIndexPage, cls).can_create_at(parent) \
            and not cls.objects.exists()

    def get_activities(self):
        return ActivityPage.objects.live().child_of(self)

    def get_context(self, request):
        context = super(ActivityIndexPage, self).get_context(request)
        context['activities'] = self.get_activities().all()
        return context

class BaseActivityTaxonomy(models.Model):
    """ A base class for all activity snippets"""
    title = models.CharField(max_length=255, unique=True)
    weight = models.IntegerField(default=0)

    panels = [
        FieldPanel('title'),
        FieldPanel('weight'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        abstract = True
        ordering = ['weight', 'title']


class ActivityBuildingBlock(BaseActivityTaxonomy):
    icon = models.ForeignKey(
        'v1.CFGOVImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = BaseActivityTaxonomy.panels + [
        ImageChooserPanel('icon'),
    ]


class ActivitySchoolSubject(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityTopic(MPTTModel):
    title = models.CharField(max_length=255, unique=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='parents')
    weight = models.IntegerField(default=0)

    class MPTTMeta:
        order_insertion_by = ['weight', 'title']

    panels = [
        FieldPanel('title'),
        FieldPanel('parent'),
        FieldPanel('weight')
    ]

    def __str__(self):
        return self.title


class ActivityGradeLevel(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityAgeRange(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivitySpecialPopulation(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityType(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityTeachingStrategy(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityBloomsTaxonomyLevel(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityDuration(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityJumpStartCoalition(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityCouncilForEconEd(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityPage(CFGOVPage):
    """
    A model for the Activity Detail page.
    """
    parent_page_types = [ActivityIndexPage]
    subpage_types = []
    objects = CFGOVPageManager()

    date = models.DateField('Updated', default=timezone.now)
    summary = models.TextField('Summary', blank=False)
    big_idea = RichTextField('Big idea', blank=False)
    essential_questions = RichTextField('Essential questions', blank=False)
    objectives = RichTextField('Objectives', blank=False)
    what_students_will_do = RichTextField('What students will do', blank=False)
    activity_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=False,
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
    building_block = ParentalManyToManyField('teachers_digital_platform.ActivityBuildingBlock', blank=False)
    school_subject = ParentalManyToManyField('teachers_digital_platform.ActivitySchoolSubject', blank=False)
    topic = ParentalTreeManyToManyField('teachers_digital_platform.ActivityTopic', blank=False)
    # Audience
    grade_level = ParentalManyToManyField('teachers_digital_platform.ActivityGradeLevel', blank=False)
    age_range = ParentalManyToManyField('teachers_digital_platform.ActivityAgeRange', blank=False)
    special_population = ParentalManyToManyField('teachers_digital_platform.ActivitySpecialPopulation', blank=True)
    # Activity Characteristics
    activity_type = ParentalManyToManyField('teachers_digital_platform.ActivityType', blank=False)
    teaching_strategy = ParentalManyToManyField('teachers_digital_platform.ActivityTeachingStrategy', blank=False)
    blooms_taxonomy_level = ParentalManyToManyField('teachers_digital_platform.ActivityBloomsTaxonomyLevel', blank=False)
    activity_duration = models.ForeignKey(ActivityDuration, blank=False, on_delete=models.PROTECT)
    # Standards taught
    jump_start_coalition = ParentalManyToManyField(
        'teachers_digital_platform.ActivityJumpStartCoalition',
        blank=True,
        verbose_name='Jump$tart Coalition',
    )
    council_for_economic_education = ParentalManyToManyField(
        'teachers_digital_platform.ActivityCouncilForEconEd',
        blank=True,
        verbose_name='Council for Economic Education',
    )
    content_panels = CFGOVPage.content_panels + [
        FieldPanel('date'),
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
            heading="Download activity",
        ),
        FieldPanel('building_block', widget=forms.CheckboxSelectMultiple),
        FieldPanel('school_subject', widget=forms.CheckboxSelectMultiple),
        FieldPanel('topic', widget=forms.CheckboxSelectMultiple),

        MultiFieldPanel(
            [
                FieldPanel('grade_level', widget=forms.CheckboxSelectMultiple),
                FieldPanel('age_range', widget=forms.CheckboxSelectMultiple),
                FieldPanel('special_population', widget=forms.CheckboxSelectMultiple),
            ],
            heading="Audience",
        ),
        MultiFieldPanel(
            [
                FieldPanel('activity_type', widget=forms.CheckboxSelectMultiple),
                FieldPanel('teaching_strategy', widget=forms.CheckboxSelectMultiple),
                FieldPanel('blooms_taxonomy_level', widget=forms.CheckboxSelectMultiple),
                FieldPanel('activity_duration'),
            ],
            heading="Activity characteristics",
        ),
        MultiFieldPanel(
            [
                FieldPanel('jump_start_coalition', widget=forms.CheckboxSelectMultiple),
                FieldPanel('council_for_economic_education', widget=forms.CheckboxSelectMultiple),
            ],
            heading="National standards",
        ),
    ]

    edit_handler = TabbedInterface([
        ObjectList(content_panels, heading='General Content'),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])

    # admin use only
    search_fields = Page.search_fields + [
        index.SearchField('summary'),
        index.SearchField('big_idea'),
        index.SearchField('essential_questions'),
        index.SearchField('objectives'),
        index.SearchField('what_students_will_do'),
        index.FilterField('date'),
        index.FilterField('building_block'),
        index.FilterField('school_subject'),
        index.FilterField('topic'),
        index.FilterField('grade_level'),
        index.FilterField('age_range'),
        index.FilterField('special_population'),
        index.FilterField('activity_type'),
        index.FilterField('teaching_strategy'),
        index.FilterField('blooms_taxonomy_level'),
        index.FilterField('activity_duration'),
        index.FilterField('jump_start_coalition'),
        index.FilterField('council_for_economic_education'),
    ]

