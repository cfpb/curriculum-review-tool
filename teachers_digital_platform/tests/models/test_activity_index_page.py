from wagtail.wagtailcore.models import Page
from wagtail.tests.utils import WagtailPageTests
from teachers_digital_platform.models import ActivityIndexPage
from teachers_digital_platform.models import ActivityPage
from v1.models import HomePage
from django.conf import settings
from django.test import TestCase, override_settings


# Create your tests here.
class ActivityIndexPageTests(WagtailPageTests):
    @classmethod
    def setUpClass(cls):
        super(ActivityIndexPageTests, cls).setUpClass()
        try:
            default_home = Page.objects.filter(title="Welcome to your new Wagtail site!")[0]
            default_home.slug = "home-old"
            default_home.save_revision().publish()
            default_home.save()
        except:
            pass

        home_page = HomePage(title="Home page", slug="home") 
        # Set Home Page as child of root
        root = Page.objects.get(id=1).specific
        root.add_child(instance=home_page)

        # Save and publish Home Page
        revision = home_page.save_revision()
        revision.publish()
        home_page.save()

    def test_can_create_an_activity_page_under_activity_index_page(self):
        self.assertCanCreateAt(ActivityIndexPage, ActivityPage)

    def test_can_not_create_an_activity_index_page_under_activity_page(self):
        self.assertCanNotCreateAt(ActivityPage, ActivityIndexPage)

    def test_can_not_create_an_activity_page_under_home_page(self):
        self.assertCanNotCreateAt(ActivityPage, HomePage)
    
    # def test_only_makes_one_activity_index_page(self):
    #     activity_index_page = ActivityIndexPage(
    #         title="Activities Available",
    #         intro="<p>intro is here!</p>")
    #     home = Page.objects.get(slug="home").specific
    #     home.add_child(instance=activity_index_page)
    #     # Save and publish Home Page
    #     revision = activity_index_page.save_revision()
    #     revision.publish()
    #     activity_index_page.save()
    #     # home = Page.objects.get(slug="home").specific
    #     # home.add_child(instance=activity_index_page)
    #     # activity_index_page.save_revision().publish().save()
    #     self.assertCanNotCreateAt(HomePage, ActivityIndexPage)
    
    def test_activity_page_parent_pages(self):
        self.assertAllowedParentPageTypes(
        ActivityPage, {ActivityIndexPage})

    def test_can_create_activity_index_page(self):
        root_page = HomePage.objects.first()
        self.assertCanCreate(root_page, ActivityIndexPage, {
            'title': 'About us',
            'intro': 'Lorem ipsum dolor sit amet',
            'sidefoot-count': '0',
            'categories-TOTAL_FORMS': '0',
            'categories-INITIAL_FORMS': '0',
            'categories-MIN_NUM_FORMS': '0',
            'categories-MAX_NUM_FORMS': '2',
            'language': 'en'})

    #currently failing
    @override_settings(FLAGS={'TDP_SEARCH_INTERFACE': {'site': ''}})
    def test_cannot_create_page_without_flag_enabled(self):
        self.assertCanNotCreateAt(HomePage, ActivityIndexPage)

    @override_settings(FLAGS={'TDP_SEARCH_INTERFACE': {'site': 'beta.consumerfinance.gov:443'}})
    def test_can_create_page_with_flag_enabled(self):
        self.assertCanCreateAt(HomePage, ActivityIndexPage)