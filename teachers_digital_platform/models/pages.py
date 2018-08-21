# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from functools import partial

from django import forms
from django.conf import settings
from django.core.paginator import InvalidPage, Paginator
from django.db import models
from django.template.response import TemplateResponse
from django.utils import timezone

from flags.decorators import flag_check

from haystack.query import SearchQuerySet

from modelcluster.fields import ParentalKey, ParentalManyToManyField

from teachers_digital_platform.fields import ParentalTreeManyToManyField

import sys, math

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, FieldRowPanel, ObjectList, StreamFieldPanel,
    TabbedInterface
)

from wagtail.contrib.wagtailroutablepage.models import RoutablePageMixin, route
from wagtail.wagtailcore.models import Page, PageManager
from wagtail.wagtailsearch import index
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtaildocs.models import Document
from wagtail.wagtailimages.models import Image
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel

from v1.models import CFGOVPage, CFGOVPageManager, CFGOVImage

from teachers_digital_platform.models import (
    ActivityBuildingBlock, ActivitySchoolSubject, ActivityTopic, ActivityGradeLevel, ActivityAgeRange,
    ActivitySpecialPopulation, ActivityType, ActivityTeachingStrategy, ActivityBloomsTaxonomyLevel,
    ActivityDuration, ActivityJumpStartCoalition, ActivityCouncilForEconEd
)

class ActivityIndexPage(RoutablePageMixin, CFGOVPage):
    """
    A model for the Activity Search page.
    """

    subpage_types = ['teachers_digital_platform.ActivityPage']

    objects = CFGOVPageManager()

    intro = RichTextField(blank=True)
    results = {}
    content_panels = CFGOVPage.content_panels + [
        FieldPanel('intro'),
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

    def get_template(self, request):
        template = 'teachers_digital_platform/activity_index_page.html'
        if 'partial' in request.GET:
            template = 'teachers_digital_platform/activity_search_facets_and_results.html'
        return template


    @route(r'^$')
    @flag_check('TDP_SEARCH_INTERFACE', True)
    def search(self, request, *args, **kwargs):

        facet_map = (
            ('building_block', ('ActivityBuildingBlock', False, 10)),
            ('school_subject', ('ActivitySchoolSubject', False, 25)),
            ('topic', ('ActivityTopic', True, 25)),
            ('grade_level', ('ActivityGradeLevel', False, 10)),
            ('age_range', ('ActivityAgeRange', False, 10)),
            ('special_population', ('ActivitySpecialPopulation', False, 10)),
            ('activity_type', ('ActivityType', False, 10)),
            ('teaching_strategy', ('ActivityTeachingStrategy', False, 25)),
            ('blooms_taxonomy_level', ('ActivityBloomsTaxonomyLevel', False, 25)),
            ('activity_duration', ('ActivityDuration', False, 10)),
            ('jump_start_coalition', ('ActivityJumpStartCoalition', False, 25)),
            ('council_for_economic_education', ('ActivityCouncilForEconEd', False, 25)),
        )
        search_query = request.GET.get('q', '')  # haystack cleans this string
        sqs = SearchQuerySet().models(ActivityPage)
        # Load selected facets
        selected_facets = {}
        facet_queries = {}

        for facet, facet_config in facet_map:
            sqs = sqs.facet(str(facet), size=facet_config[2])
            if facet in request.GET and request.GET.get(facet):
                selected_facets[facet] = [int(value) for value in request.GET.getlist(facet) if value.isdigit()]
                facet_queries[facet] = facet + '_exact:' + (" OR " + facet + "_exact:").join([str(value) for value in selected_facets[facet]])
        # Build query string
        query_string = "&".join(
            [str(facet_name) + "=" + ("&" + str(facet_name)+"=").join(map(str, facet_values))
             for facet_name, facet_values in selected_facets.items()]
        )
        if search_query:
            query_string = "q=" + str(search_query) + "&" + query_string

        payload = {
            'search_query': search_query,
            'results': [],
            'total_results': 0,
            'selected_facets': selected_facets,
            'facet_queries': facet_queries,
            'all_facets': {},
            'query_string': query_string
        }

        # Apply search query if it exists, but don't apply facets
        if search_query:
            sqs = sqs.filter(content=search_query).order_by('-_score', '-date')
        else:
            sqs = sqs.order_by('-date')

        # Get all facets and their counts
        facet_counts = sqs.facet_counts()
        all_facets = {}
        if 'fields' in facet_counts:
            for facet, facet_config in facet_map:
                class_name, is_nested, max_facet_count = facet_config
                all_facets_sqs = sqs
                other_facet_queries = [facet_query for facet_query_name, facet_query in facet_queries.items() if facet != facet_query_name]
                for other_facet_query in other_facet_queries:
                    all_facets_sqs = all_facets_sqs.narrow(str(other_facet_query))
                narrowed_facet_counts = all_facets_sqs.facet_counts()
                if 'fields' in narrowed_facet_counts and facet in narrowed_facet_counts['fields']:
                    narrowed_facets = [value[0] for value in narrowed_facet_counts['fields'][facet]]
                    narrowed_selected_facets = selected_facets[facet] if facet in selected_facets else []
                    if is_nested:
                        all_facets[facet] = self.get_nested_facets(class_name, narrowed_facets, narrowed_selected_facets)
                    else:
                        all_facets[facet] = self.get_flat_facets(class_name, narrowed_facets, narrowed_selected_facets)

        payload.update({
           'facet_counts': facet_counts,
           'all_facets': all_facets,
        })

        # Apply all the active facet values to our search results
        for facet_narrow_query in facet_queries.values():
            sqs = sqs.narrow(facet_narrow_query)

        results = [activity.object for activity in sqs]
        total_results = sqs.count()

        payload.update({
            'results': results,
            'total_results': total_results,
        })
        self.results = payload
        context = self.get_context(request)
        results_per_page = validate_results_per_page(request)
        paginator = Paginator(payload['results'], results_per_page)
        current_page = validate_page_number(request, paginator)
        paginated_page = paginator.page(current_page)

        context.update({
            'facet_counts': facet_counts,
            'facets': all_facets,
            'activities': paginated_page,
            'total_results': total_results,
            'results_per_page': results_per_page,
            'current_page': current_page,
            'paginator': paginator,
            'show_filters': bool(facet_queries),
        })
        return TemplateResponse(
            request,
            self.get_template(request),
            context)

    def get_flat_facets(self, class_name, narrowed_facets, selected_facets):
        final_facets = [
            {
                'selected': result['id'] in selected_facets,
                'id': result['id'],
                'title': result['title'],
             } for result in eval(class_name).objects.filter(pk__in=narrowed_facets).values('id', 'title')]
        return final_facets

    def get_nested_facets(self, class_name, narrowed_facets, selected_facets, parent=None):
        if not parent:
            flat_final_facets = [
               {
                   'selected': result['id'] in selected_facets,
                   'id': result['id'],
                   'title': result['title'],
                   'parent': result['parent'],
               } for result in eval(class_name).objects.filter(pk__in=narrowed_facets).get_ancestors(True).values('id', 'title', 'parent')]
            final_facets = []
            root_facets = [root_facet for root_facet in flat_final_facets if root_facet['parent'] == None]
            for root_facet in root_facets:
                final_facets.append(
                    {
                        'selected': root_facet['selected'],
                        'id': root_facet['id'],
                        'title': root_facet['title'],
                        'parent': root_facet['parent'],
                        'children': self.get_nested_facets(class_name, narrowed_facets, selected_facets, root_facet['id'])
                    })
            return final_facets
        else:
            children = [
                {
                    'selected': result['id'] in selected_facets,
                    'id': result['id'],
                    'title': result['title'],
                    'parent': result['parent'],
                    'children': self.get_nested_facets(class_name, narrowed_facets, selected_facets, result['id'])
                } for result in eval(class_name).objects.filter(pk__in=narrowed_facets).filter(parent_id=parent).values('id', 'title', 'parent')]
            return children

    class Meta:
        verbose_name = "TDP Activity search page"

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
        related_name='+',
        verbose_name='Teacher guide'
    )
    # TODO: to figure out how to use Document choosers on ManyToMany fields
    handout_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name='Student file 1'
    )
    handout_file_2 = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name='Student file 2'
    )
    handout_file_3 = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name='Student file 3'
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
                DocumentChooserPanel('handout_file_2'),
                DocumentChooserPanel('handout_file_3'),
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
                FieldPanel('council_for_economic_education', widget=forms.CheckboxSelectMultiple),
                FieldPanel('jump_start_coalition', widget=forms.CheckboxSelectMultiple),
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

    def get_topics_list(self, parent=None):
        """
        Get a hierarchical list of this activity's topics.

        parent: ActivityTopic
        """
        if parent:
            descendants = set(parent.get_descendants()) & set(self.topic.all())
            children = parent.get_children()
            children_list = []
            # If this parent has descendants that are in self.topic, add its children.
            if descendants:
                for child in children:
                    if set(child.get_descendants()) & set(self.topic.all()):
                        children_list.append(child.title + " (" + self.get_topics_list(child) + ")")
                    elif child in self.topic.all():
                        children_list.append(child.title)

                if children_list:
                    return parent.title + " (" + ', '.join(children_list) + ")"
            # Otherwise, just add the parent.
            else:
                return parent.title
        else:
            # If this is the first call, build a list of root topics and recurse through their children.
            topic_list = []
            topic_ids = [topic.id for topic in self.topic.all()]
            ancestors = ActivityTopic.objects.filter(id__in=topic_ids).get_ancestors(True)
            roots = ActivityTopic.objects.filter(parent=None) & ancestors
            for root_topic in roots:
                topic_list.append(self.get_topics_list(root_topic))

            if topic_list:
                return ', '.join(topic_list)
            else:
                return ''

    class Meta:
        verbose_name = "TDP Activity page"

def validate_results_per_page(request):
    """
    A utility for parsing the requested number of results per page.

    This should catch an invalid number of results and always return
    a valid number of results, defaulting to 10.
    """
    raw_results = request.GET.get('results')
    if raw_results in ['10', '25', '50']:
        return int(raw_results)
    else:
        return 5


def validate_page_number(request, paginator):
    """
    A utility for parsing a pagination request.

    This should catch invalid page numbers and always return
    a valid page number, defaulting to 1.
    """
    raw_page = request.GET.get('page', 1)
    try:
        page_number = int(raw_page)
    except ValueError:
        page_number = 1
    try:
        paginator.page(page_number)
    except InvalidPage:
        page_number = 1
    return page_number