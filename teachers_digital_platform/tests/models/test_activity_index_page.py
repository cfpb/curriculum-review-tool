from wagtail.wagtailcore.models import Page
from wagtail.wagtaildocs.models import Document
from wagtail.tests.utils import WagtailPageTests
from teachers_digital_platform.models import ActivityIndexPage
from teachers_digital_platform.models import ActivityPage
from teachers_digital_platform.models import (
    ActivityBuildingBlock, ActivitySchoolSubject, ActivityTopic, ActivityGradeLevel, ActivityAgeRange,
    ActivityStudentCharacteristics, ActivityType, ActivityTeachingStrategy, ActivityBloomsTaxonomyLevel,
    ActivityDuration, ActivityJumpStartCoalition, ActivityCouncilForEconEd
)
from v1.models import HomePage
from django.test import TestCase, override_settings
import haystack
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
        search_page = ActivityIndexPage(live=True, title='Search for activities', slug='search', intro='<p>Test Intro</p>')
        my_request = search_page.dummy_request()
        # Act
        response = search_page.serve(my_request)
        response.render()
        # Assert
        self.assertEqual(response.status_code, 200)

    def test_activity_index_page_renders_with_query_parameters(self):
        # Arrange
        search_page = ActivityIndexPage(live=True, title='Search for activities', slug='search', intro='<p>Test Intro</p>')
        my_request = search_page.dummy_request()
        my_request.environ["QUERY_STRING"]="?q=&building_block=1"
        # Act
        response = search_page.serve(my_request)
        response.render()
        # Assert
        self.assertEqual(response.status_code, 200)


    # def test_routable_search_index_page_handles_good_query(self):
    
    #     request = Request_factory.get(self.search_page.url_path)
    
    #     activity_page = ActivityPage(
    #         title='Planning for future savings',
    #         slug='planning-future-savings',
    #         date="2018-07-31",
    #         summary="Students will discuss short-term and long-term goals and what\r\nmakes a goal SMART. They\u2019ll then create a short-term savings goal\r\nand make a plan to meet that goal.",
    #         big_idea="<p>Saving money is essential to a positive\u00a0financial future.</p>",
    #         objectives="<ul><li>Understand the importance of setting SMARTsavings goals<br/></li><li>Create a short-term SMART savings goal</li><li>Make an action plan to save money</li></ul>",
    #         essential_questions="<p></p><ul><li>How can I reach my savings goals?<br/></li></ul><p></p>",
    #         what_students_will_do="<ul><li>Use the \u201cCreating a savings plan\u201d worksheet to\u00a0brainstorm a financial goal<br/></li><li>Create a SMART goal and a savings plan to\u00a0achieve this goal</li></ul>",
    #         activity_file=self.test_document,
    #         building_block=ActivityBuildingBlock.objects.filter(pk__in=[2]).all(),
    #         school_subject=ActivitySchoolSubject.objects.filter(pk__in=[1, 4]).all(),
    #         topic=ActivityTopic.objects.filter(pk__in=[6, 11]).all(),
    #         grade_level=ActivityGradeLevel.objects.filter(pk__in=[2]).all(),
    #         age_range=ActivityAgeRange.objects.filter(pk__in=[2]).all(),
    #         student_characteristics=[],
    #         activity_type=ActivityType.objects.filter(pk__in=[1, 2, 3]).all(),
    #         teaching_strategy=ActivityTeachingStrategy.objects.filter(pk__in=[6, 7]).all(),
    #         blooms_taxonomy_level=ActivityBloomsTaxonomyLevel.objects.filter(pk__in=[6]).all(),
    #         activity_duration=ActivityDuration.objects.get(pk=2),
    #         council_for_economic_education=ActivityCouncilForEconEd.objects.filter(pk__in=[4]).all(),
    #         jump_start_coalition=ActivityJumpStartCoalition.objects.filter(pk__in=[1]).all()
    #     )
    #     self.search_page.add_child(instance=activity_page)
    #     activity_page.save_revision().publish()
    #     # call_command('update_index', interactive=False, verbosity=0)
    #     mock_site = mock.Mock()
    #     mock_site.hostname = 'localhost'
    #     mock_request = HttpRequest()
    #     mock_request.site = mock_site
    #     mock_request.GET = {'q': 'planning'}
    #     test_context = self.search_page.get_context(mock_request)
    
        # TODO: check context for indication that activity was found. Requires elastic search to work for testcase
    
    # def test_routable_search_index_page_handles_bad_query(self):
    
    #     request = Request_factory.get(self.search_page.url_path)
    
    #     activity_page = ActivityPage(
    #         title='Planning for future savings',
    #         slug='planning-future-savings',
    #         date="2018-07-31",
    #         summary="Students will discuss short-term and long-term goals and what\r\nmakes a goal SMART. They\u2019ll then create a short-term savings goal\r\nand make a plan to meet that goal.",
    #         big_idea="<p>Saving money is essential to a positive\u00a0financial future.</p>",
    #         objectives="<ul><li>Understand the importance of setting SMARTsavings goals<br/></li><li>Create a short-term SMART savings goal</li><li>Make an action plan to save money</li></ul>",
    #         essential_questions="<p></p><ul><li>How can I reach my savings goals?<br/></li></ul><p></p>",
    #         what_students_will_do="<ul><li>Use the \u201cCreating a savings plan\u201d worksheet to\u00a0brainstorm a financial goal<br/></li><li>Create a SMART goal and a savings plan to\u00a0achieve this goal</li></ul>",
    #         activity_file=self.test_document,
    #         building_block=ActivityBuildingBlock.objects.filter(pk__in=[2]).all(),
    #         school_subject=ActivitySchoolSubject.objects.filter(pk__in=[1, 4]).all(),
    #         topic=ActivityTopic.objects.filter(pk__in=[6, 11]).all(),
    #         grade_level=ActivityGradeLevel.objects.filter(pk__in=[2]).all(),
    #         age_range=ActivityAgeRange.objects.filter(pk__in=[2]).all(),
    #         student_characteristics=[],
    #         activity_type=ActivityType.objects.filter(pk__in=[1, 2, 3]).all(),
    #         teaching_strategy=ActivityTeachingStrategy.objects.filter(pk__in=[6, 7]).all(),
    #         blooms_taxonomy_level=ActivityBloomsTaxonomyLevel.objects.filter(pk__in=[6]).all(),
    #         activity_duration=ActivityDuration.objects.get(pk=2),
    #         council_for_economic_education=ActivityCouncilForEconEd.objects.filter(pk__in=[4]).all(),
    #         jump_start_coalition=ActivityJumpStartCoalition.objects.filter(pk__in=[1]).all()
    #     )
    #     self.search_page.add_child(instance=activity_page)
    #     activity_page.save_revision().publish()
    
    
    #     response = self.client.get(request.get_full_path() + "?q=voldemort")
    #     self.assertContains(response, "<li>No results found.</li>", html=True)