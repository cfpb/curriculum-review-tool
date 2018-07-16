from django.test import TestCase
from teachers_digital_platform.models import *

class FixtureTests(TestCase):
    fixtures = ['tdp_initial_data']

    def testFirstActivityFixtureLoads(self):
        s = ActivityBuildingBlock.objects.get(pk=1)
        self.assertEquals(s.title, 'Executive function')

    def testLastActivityFixtureLoads(self):
        s = ActivityCouncilForEconEd.objects.get(pk=6)
        self.assertEquals(s.title, 'Standard VI. Protecting and insuring')

    def testActivityTopicRelationshipFirstPK(self):
        s = ActivityTopic.objects.get(pk=1)
        self.assertIsNone(s.parent)
    
    def testActivityTopicRelationshipSecondPK(self):
        s = ActivityTopic.objects.get(pk=2)
        self.assertEquals(s.parent, ActivityTopic.objects.get(pk=1))
