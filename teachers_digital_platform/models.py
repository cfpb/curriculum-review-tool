from django.db import models

from wagtail.core.models import Page
from wagtail.search import index
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel

class TdpActivityIndexPage(Page):
    intro = RichTextField(blank=True)
    alert = RichTextField(blank=True)

    content_panels = Page.content_panels = [
        FieldPanel('intro'),
        FieldPanel('alert')
    ]

class TdpActivityPage(Page):
    published_date = models.DateField("Published date")
    updated_date = models.DateField("Updated date")
    big_idea = RichTextField(blank=True, label="Big idea")
    essential_questions = RichTextField(blank=True, label="Essential question(s)")
    objectives= RichTextField(blank=True, label="Objective(s)")
    what_students_will_do = RichTextField(blank=True, label="What students will do")
    building_blocks
    # Primary Focus
    school_subject
    topic
    # Audience
    grade_range
    age
    special_populations
    # Activity Characteristics
    activity_type
    teaching_strategies
    blooms_taxonomy_level
    activity_length
    # Standards taught
    jump_start_national_standards
    council_for_economic_education
    
