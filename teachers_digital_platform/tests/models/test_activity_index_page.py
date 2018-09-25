from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.models import Site
from wagtail.wagtaildocs.models import Document
from wagtail.tests.utils import WagtailPageTests
from teachers_digital_platform.models import ActivityIndexPage
from teachers_digital_platform.models import ActivityPage
from teachers_digital_platform.models import (
    ActivityBuildingBlock, ActivitySchoolSubject, ActivityTopic, ActivityGradeLevel, ActivityAgeRange,
    ActivityStudentCharacteristics, ActivityType, ActivityTeachingStrategy, ActivityBloomsTaxonomyLevel,
    ActivityDuration, ActivityJumpStartCoalition, ActivityCouncilForEconEd
)
import mock
from v1.models import HomePage
from django.test import RequestFactory, TestCase, override_settings
from haystack.models import SearchResult
from haystack.query import SearchQuerySet
from django.http import Http404, HttpRequest, HttpResponse

@override_settings(
    FLAGS={'TDP_SEARCH_INTERFACE': {'boolean': True}}
)

class ActivityIndexPageTests(WagtailPageTests):
    @classmethod
    def setUpClass(self):
        super(ActivityIndexPageTests, self).setUpClass()

    def test_can_create_an_activity_page_under_activity_index_page(self):
        self.assertCanCreateAt(ActivityIndexPage, ActivityPage)

    def test_can_not_create_an_activity_index_page_under_activity_page(self):
        self.assertCanNotCreateAt(ActivityPage, ActivityIndexPage)

    def test_can_not_create_an_activity_page_under_home_page(self):
        self.assertCanNotCreateAt(ActivityPage, HomePage)

    def test_activity_page_parent_pages(self):
        self.assertAllowedParentPageTypes(
        ActivityPage, {ActivityIndexPage})

    def test_can_create_activity_index_page(self):
        ROOT_PAGE = HomePage.objects.first()
        self.assertCanCreate(ROOT_PAGE, ActivityIndexPage, {
            'title': 'Search for activities',
            'intro': "<p>Test Intro</p>",
            'sidefoot-count': '0',
            'categories-TOTAL_FORMS': '0',
            'categories-INITIAL_FORMS': '0',
            'categories-MIN_NUM_FORMS': '0',
            'categories-MAX_NUM_FORMS': '2',
            'language': 'en'})


class TestActivityIndexPageSearch(TestCase):
    fixtures = ['tdp_initial_data']

    def setUp(self):
        super(TestActivityIndexPageSearch, self).setUp()
        self.ROOT_PAGE = HomePage.objects.get(slug='cfgov')
        self.ROOT_PAGE.save_revision().publish()
        self.site = Site.objects.get(is_default_site=True)
        self.factory = RequestFactory()
        self.search_page = ActivityIndexPage(live=True, path='search', depth='1', title='Search for activities', slug='search', intro='<p>Test Intro</p>')

    def get_request(self, path='', data={}):
        request = self.factory.get(path, data=data)
        request.site = self.site
        return request

    def test_client_can_create_default_home_page(self):
        # Arrange
        home_page = HomePage(title='Home page', slug='home-test-unique-slug')
        self.ROOT_PAGE.add_child(instance=home_page)
        home_page.save_revision().publish()
        # Act
        response = self.client.get('/home-test-unique-slug/')
        # Assert
        self.assertEqual(response.status_code, 200)


    def test_activity_index_page_renders(self):
        # Arrange
        my_request = self.search_page.dummy_request()
        # Act
        response = self.search_page.serve(my_request)
        response.render()
        # Assert
        self.assertEqual(response.status_code, 200)

    def test_activity_index_page_renders_with_query_parameters(self):
        # Arrange
        my_request = self.search_page.dummy_request()
        my_request.environ["QUERY_STRING"]="?q=&building_block=1"
        # Act
        response = self.search_page.serve(my_request)
        response.render()
        # Assert
        self.assertEqual(response.status_code, 200)

    def test_search_page_get_template(self):
        # Act
        search_reqeust = self.get_request()
        # Assert
        self.assertEqual(
            self.search_page.get_template(search_reqeust),
            'teachers_digital_platform/activity_index_page.html')

    def test_search_results_page_get_template(self):
        # Arrange
        request = self.get_request(data={'partial': 'true'})
        self.assertEqual(
            self.search_page.get_template(request),
            'teachers_digital_platform/activity_search_facets_and_results.html')
        # Act - Should return partial results even if no value is provided
        request = self.get_request(data={'partial': ''})
        # Assert
        self.assertEqual(
            self.search_page.get_template(request),
            'teachers_digital_platform/activity_search_facets_and_results.html')

    def test_search_index_page_handles_bad_query(self):  
        # Arrange
        my_request = self.search_page.dummy_request()
        my_request.environ["QUERY_STRING"]="?q=voldemort"
        activity_page = self.create_activity_detail_page(title='Planning for future savings', slug='planning-future-savings')
        # Act
        response = self.search_page.serve(my_request)
        response.render()
        # Assert
        self.assertTrue('<h3>No results match your search.</h3>' in response.content)

    @mock.patch('teachers_digital_platform.models.pages.SearchQuerySet.models')
    def test_search_get_all_facets_with_building_block_filter(self, mock_sqs):
        # Arrange
        facet_counts = {
            'dates': {},
            'fields': {
                    'topic':'1',
                    'topic':'4',
                    'building_block': '1',
                    'building_block': '2',
                    'school_subject': '1',
                },
                'queries': {}
            }
        selected_facets = {u'building_block': [1]}
        facet_queries = {'building_block':'building_block_exact'}
        facet_map = self.create_facet_map()
        mock_sqs.facet_counts.return_value = facet_counts
        # Act
        actual_all_facets = self.search_page.get_all_facets(facet_map, mock_sqs, facet_counts, facet_queries, selected_facets)
        # Assert
        self.assertTrue('building_block' in actual_all_facets)

    def create_facet_map(self):
        return (
            ('building_block', (ActivityBuildingBlock, False, 10)),
            ('school_subject', (ActivitySchoolSubject, False, 25)),
            ('topic', (ActivityTopic, True, 25)),
            ('grade_level', (ActivityGradeLevel, False, 10)),
            ('age_range', (ActivityAgeRange, False, 10)),
            ('student_characteristics', (ActivityStudentCharacteristics, False, 10)),
            ('activity_type', (ActivityType, False, 10)),
            ('teaching_strategy', (ActivityTeachingStrategy, False, 25)),
            ('blooms_taxonomy_level', (ActivityBloomsTaxonomyLevel, False, 25)),
            ('activity_duration', (ActivityDuration, False, 10)),
            ('jump_start_coalition', (ActivityJumpStartCoalition, False, 25)),
            ('council_for_economic_education', (ActivityCouncilForEconEd, False, 25)),
        )

    def create_activity_detail_page(self, title='title', slug='slug'):
        return ActivityPage(
            live=True, 
            title='Planning for future savings',
            slug='planning-future-savings',
            date="2018-07-31",
            summary="Students will discuss short-term and long-term goals and what\r\nmakes a goal SMART. They\u2019ll then create a short-term savings goal\r\nand make a plan to meet that goal.",
            big_idea="<p>Saving money is essential to a positive\u00a0financial future.</p>",
            objectives="<ul><li>Understand the importance of setting SMARTsavings goals<br/></li><li>Create a short-term SMART savings goal</li><li>Make an action plan to save money</li></ul>",
            essential_questions="<p></p><ul><li>How can I reach my savings goals?<br/></li></ul><p></p>",
            what_students_will_do="<ul><li>Use the \u201cCreating a savings plan\u201d worksheet to\u00a0brainstorm a financial goal<br/></li><li>Create a SMART goal and a savings plan to\u00a0achieve this goal</li></ul>",
            building_block=ActivityBuildingBlock.objects.filter(pk__in=[2]).all(),
            school_subject=ActivitySchoolSubject.objects.filter(pk__in=[1, 4]).all(),
            topic=ActivityTopic.objects.filter(pk__in=[6, 11]).all(),
            grade_level=ActivityGradeLevel.objects.filter(pk__in=[2]).all(),
            age_range=ActivityAgeRange.objects.filter(pk__in=[2]).all(),
            student_characteristics=[],
            activity_type=ActivityType.objects.filter(pk__in=[1, 2, 3]).all(),
            teaching_strategy=ActivityTeachingStrategy.objects.filter(pk__in=[6, 7]).all(),
            blooms_taxonomy_level=ActivityBloomsTaxonomyLevel.objects.filter(pk__in=[6]).all(),
            activity_duration=ActivityDuration.objects.get(pk=2),
            council_for_economic_education=ActivityCouncilForEconEd.objects.filter(pk__in=[4]).all(),
            jump_start_coalition=ActivityJumpStartCoalition.objects.filter(pk__in=[1]).all()
        )

# print_to_file(response.content, 'response.html')
def print_to_file(text, filename):
        handle1=open(filename,'w+')
        handle1.write(text)
        handle1.close()