from django import forms
from django.conf import settings
from django.db import models
from django.http import Http404
from django.template.response import TemplateResponse
from django.utils import timezone

from flags.decorators import flag_check

from haystack.inputs import Clean
from haystack.query import SearchQuerySet

from modelcluster.fields import ParentalKey, ParentalManyToManyField

from mptt.models import MPTTModel, TreeForeignKey, TreeManyToManyField
from mptt.querysets import TreeQuerySet

from teachers_digital_platform.fields import ParentalTreeManyToManyField

import sys, math

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel, MultiFieldPanel, ObjectList, StreamFieldPanel,
    TabbedInterface
)


from wagtail.contrib.wagtailroutablepage.models import RoutablePageMixin, route
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


class ActivityIndexPage(RoutablePageMixin, CFGOVPage):
    """
    A model for the Activity Search page.
    """

    subpage_types = ['teachers_digital_platform.ActivityPage']
    objects = CFGOVPageManager() 
    intro = RichTextField(blank=True)
    #  alert = RichTextField(blank=True)  # Move this to a StreamField

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

    def get_base_search_query_set(self):
        # build initial SearchQuerySet and specify facets
        sqs = SearchQuerySet().models(ActivityPage) \
            .facet('building_block') \
            .facet('school_subject') \
            .facet('topic') \
            .facet('grade_level') \
            .facet('age_range') \
            .facet('special_population') \
            .facet('activity_type') \
            .facet('teaching_strategy') \
            .facet('blooms_taxonomy_level') \
            .facet('activity_duration') \
            .facet('jump_start_coalition') \
            .facet('council_for_economic_education')
        return sqs

    def get_selected_facets(self, request):
        # get active facets values
        facet_names = (
            'building_block',
            'school_subject',
            'topic',
            'grade_level',
            'age_range',
            'special_population',
            'activity_type',
            'teaching_strategy',
            'blooms_taxonomy_level',
            'activity_duration',
            'jump_start_coalition',
            'council_for_economic_education',
        )
        selected_facets = {'facet_values': {}, 'queries': {}}
        for facet in facet_names:
            selected_facets['facet_values'][facet] = [int(value) for value in request.GET.getlist(facet+'[]') if value.isdigit()]

        # build out facet_queries based on active_face_values
        for facet_name, facet_value in selected_facets['facet_values'].items():
            if facet_value:
                facet_value = map(str, facet_value)
                narrow_query = (" OR " + facet_name + "_exact:").join(facet_value)
                selected_facets['queries'][facet_name] = facet_name + '_exact:' + narrow_query
        return selected_facets

    def build_search_querystring(self, q, facet_values):
        query_list = []
        if q:
            query_list.append("q=" + str(q))
        for facet_name, values in facet_values.items():
            query_list.extend([facet_name + "[]=" + str(value) for value in values])
        if query_list:
            return "&".join(query_list)


    def get_context(self, request):
        context = super(ActivityIndexPage, self).get_context(request)
        clean_query = str(Clean(request.GET.get('q', '')))
        context['search_query'] = clean_query
        selected_facets = self.get_selected_facets(request)
        context['selected_facets'] = selected_facets
        query_string = self.build_search_querystring(clean_query, selected_facets['facet_values'])
        context['query_string'] = query_string
        return context

    @route(r'^$')
    @flag_check('TDP_SEARCH_INTERFACE', True)
    def search(self, request, *args, **kwargs):
        context = self.get_context(request)
        sqs = self.get_base_search_query_set()
        selected_facets = context['selected_facets']
        clean_query = context['search_query']

        # Apply search query if it exists, but don't apply facets
        if clean_query:
            sqs = sqs.filter(content=clean_query).order_by('-_score', '-date')
        else:
            sqs = sqs.order_by('-date')

        facet_counts = self.get_facet_counts(sqs)
        facets = self.get_search_facets(facet_counts, selected_facets, sqs)

        # apply all the active facet values to our search results
        for field, facet_narrow_query in selected_facets['queries'].items():
            sqs = sqs.narrow(facet_narrow_query)

        # Set-up pagination
        page_number = request.GET.get('page','1')
        if page_number.isdigit():
            page_number = int(page_number)
        else:
            page_number = 1

        total_results = sqs.count()
        results_per_page = 5
        total_pages = int(math.ceil(float(total_results) / results_per_page))
        if not (1 <= page_number <= total_pages):
            page_number = 1

        pager_previous = None
        pager_next = None
        if page_number > 1:
            pager_previous = context['query_string'] + "&page=" + str(page_number-1) + "#content_main"
        if page_number < total_pages:
            pager_next = context['query_string'] + "&page=" + str(page_number + 1) + "#content_main"

        # limit the results to the activites on the current page
        sqs = sqs[((page_number - 1) * results_per_page):((page_number - 1) * results_per_page) + results_per_page]

        activities = [activity.object for activity in sqs]

        context.update({
            'facet_counts': facet_counts,
            'facets': facets,
            'activities': activities,
            'total_results': total_results,
            'results_per_page': results_per_page,
            'total_pages': total_pages,
            'page_number': page_number,
            'pager_previous': pager_previous,
            'pager_next': pager_next,
        })
        return TemplateResponse(
            request,
            self.get_template(request),
            context)

    def get_facet_counts(self, sqs):
        return sqs.facet_counts()

    def get_search_facets(self, facet_counts, selected_facets, sqs):
        facets = {}
        # load the facets that will be displayed on the sidebar
        if 'fields' in facet_counts:
            facets = self.get_facet_values(selected_facets, sqs)
        return facets

    def get_facet_values(self, selected_facets, search_query_set):
        """Get a list of titles from ids"""
        facet_queries = selected_facets['queries']
        selected_facet_values = selected_facets['facet_values']
        facet_values = {}
        facet_class_map = {
            'building_block': {'class': 'ActivityBuildingBlock', 'nested': False},
            'school_subject': {'class': 'ActivitySchoolSubject', 'nested': False},
            'topic': {'class': 'ActivityTopic', 'nested': True},
            'grade_level': {'class': 'ActivityGradeLevel', 'nested': False},
            'age_range': {'class': 'ActivityAgeRange', 'nested': False},
            'special_population': {'class': 'ActivitySpecialPopulation', 'nested': False},
            'activity_type': {'class': 'ActivityType', 'nested': False},
            'teaching_strategy': {'class': 'ActivityTeachingStrategy', 'nested': False},
            'blooms_taxonomy_level': {'class': 'ActivityBloomsTaxonomyLevel', 'nested': False},
            'activity_duration': {'class': 'ActivityDuration', 'nested': False},
            'jump_start_coalition': {'class': 'ActivityJumpStartCoalition', 'nested': False},
            'council_for_economic_education': {'class': 'ActivityCouncilForEconEd', 'nested': False},
        }

        for facet_name, facet_info in facet_class_map.items():
            other_facet_queries = (facet_query for facet_query_name, facet_query in facet_queries.items() if facet_name != facet_query_name)
            results = search_query_set
            nested = facet_info['nested']
            facet_class = facet_info['class']

            for other_facet_query in other_facet_queries:
                results = results.narrow(other_facet_query)

            facet_counts = results.facet_counts()
            if 'fields' in facet_counts and facet_name in facet_counts['fields']:
                fvalues = [value[0] for value in facet_counts['fields'][facet_name]]
                if not nested:
                    final_facets = []
                    facet_values[facet_name] = eval(facet_class).objects.filter(pk__in=fvalues).values('id', 'title')
                    for facet_value in facet_values[facet_name]:
                        if facet_value['id'] in selected_facet_values[facet_name]:
                            facet_value['selected'] = True
                        else:
                            facet_value['selected'] = False
                        final_facets.append(facet_value)
                    facet_values[facet_name] = final_facets
                else:
                    facet_values[facet_name] = self.get_nested_facet_values(facet_class, fvalues, selected_facet_values[facet_name])

        return facet_values

    def get_nested_facet_values(self, facet_class, fvalues, selected_facet_values):

        nested_facet_values = eval(facet_class).objects.filter(pk__in=fvalues).values('id', 'title', 'parent')
        values = {}
        for nested_facet in nested_facet_values:
            is_selected = False
            if nested_facet['id'] in selected_facet_values:
                is_selected = True
            if nested_facet['parent']:
                parent_facet = self.get_parent_facet(facet_class, nested_facet['parent'], {nested_facet['id']: {
                    'id': nested_facet['id'],
                    'title': nested_facet['title'],
                    'parent': nested_facet['parent'],
                    'selected': is_selected,
                }}, selected_facet_values)
                values = self.merge_dict(values, parent_facet)
            else:
                values[nested_facet['id']] = {'id': nested_facet['id'], 'title': nested_facet['title'], 'parent': nested_facet['parent'], 'selected': is_selected}
        # Sort values by root level weight
        values_list = []
        roots = eval(facet_class).objects.filter(parent=None).values('id')
        for root in roots:
            if root['id'] in values:
                values_list.append(values[root['id']])
        return values_list

    def get_parent_facet(self, facet_class, parent, children, selected_facet_values):
        values = {}
        parent_object = eval(facet_class).objects.get(pk=parent)
        is_selected = False
        if parent_object.id in selected_facet_values:
            is_selected = True
        if parent_object.parent:
            new_children = {'id': parent_object.id, 'title': parent_object.title, 'parent': parent_object.parent.id, 'children': children, 'selected': is_selected}
            values = self.get_parent_facet(facet_class, parent_object.parent.id, {parent_object.id: new_children})
        else:
            values[parent_object.id] = {
                'id': parent_object.id,
                'title': parent_object.title,
                'parent': None,
                'children': children,
                'selected': is_selected
            }
        return values

    def merge_dict(self, a, b, path=None):
        "merges b into a"
        if path is None: path = []
        for key in b:
            if key in a:
                if isinstance(a[key], dict) and isinstance(b[key], dict):
                    self.merge_dict(a[key], b[key], path + [str(key)])
                elif a[key] == b[key]:
                    pass  # same leaf value
                else:

                    raise Exception('Conflict at %s' % '.'.join(path + [str(key)]))
            else:
                a[key] = b[key]
        return a


    class Meta:
        verbose_name = "TDP Activity search page"

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
    options = (
        ('settings', 'Executive function'),
        ('split', 'Financial habits and norms'),
        ('piggy-bank-check', 'Financial knowledge and decision making'),
    )
    svg_icon = models.CharField(
        null=True,
        blank=True,
        max_length=60,
        choices=options,
    )

    panels = BaseActivityTaxonomy.panels + [
        FieldPanel('svg_icon'),
    ]


class ActivitySchoolSubject(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityTopic(MPTTModel):
    title = models.CharField(max_length=255, unique=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
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
    handout_file_2 = models.ForeignKey(
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
                DocumentChooserPanel('handout_file_2'),
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
        """Get a hierarchical list of this activity's topics."""
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
