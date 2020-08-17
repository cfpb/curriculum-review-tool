# from django.test import TestCase
import json

from django.test import RequestFactory, TestCase
from django.urls import reverse

from crtool.views import create_review, get_review, update_review


class CreateReviewTest(TestCase):

    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        kwargs['content_type'] = "application/json"
        request = self.factory.post(reverse("create_review"), post, **kwargs)
        return create_review(request)

    def assertBadRequest(self, response):
        self.assertEqual(response.status_code, 400)

    def assertCreateSuccess(self, response, compare={}):
        data = json.loads(response.content.decode("utf-8"))
        for k, v in compare.items():
            if not self.assertEqual(data[k], compare[k]):
                return False
        return True

    def check_post(self, post, response_check, ajax=False, compare={}):
        if compare:
            response_check(self.post(post, ajax=ajax), compare=compare)
        else:
            response_check(self.post(post, ajax=ajax))

    def test_missing_title(self):
        post = {
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest)

    def test_empty_title(self):
        post = {
            "tdp-crt_title": "",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest)

    def test_missing_grade_level(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest)

    def test_empty_grade_level(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest)

    def test_create(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }
        compare = {
            "curriculumTitle": "Test title",
            "publicationDate": "Jan 1, 2001",
            "gradeRange": "Elementary school",
            "pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare)

    def test_missing_pubdate_and_passcode(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": ""
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare)

    def test_empty_pubdate_and_passcode(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pubdate": "",
            "tdp-crt_pass_code": ""
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": ""
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare)

    def test_missing_title_ajax(self):
        post = {
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_empty_title_ajax(self):
        post = {
            "tdp-crt_title": "",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_missing_grade_level_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_empty_grade_level_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "",
            "tdp-crt_pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_create_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pass_code": "P455W0RD"
        }

        compare = {
            "curriculumTitle": "Test title",
            "publicationDate": "Jan 1, 2001",
            "gradeRange": "Elementary school",
            "pass_code": "P455W0RD"
        }
        self.check_post(post, self.assertCreateSuccess, ajax=True, compare=compare)  # noqa 501

    def test_missing_pubdate_and_passcode_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": ""
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare, ajax=True)  # noqa 501

    def test_empty_pubdate_and_passcode_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pubdate": "",
            "tdp-crt_pass_code": ""
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": ""
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare, ajax=True)  # noqa 501


class GetReviewTest(TestCase):
    fixtures = ['crtool_initial_data']

    def setUp(self):
        self.factory = RequestFactory()

    def get(self, get, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        request = self.factory.get(reverse("get_review") + get, **kwargs)
        return get_review(request)

    def check_get(self, get, response_check, ajax=False, compare={}):
        if compare:
            response_check(self.get(get, ajax=ajax), compare=compare)
        else:
            response_check(self.get(get, ajax=ajax))

    def assertPageNotFound(self, response):
        self.assertEqual(response.status_code, 404)

    def assertGetSuccess(self, response, compare={}):
        data = json.loads(response.content.decode("utf-8"))
        for k, v in compare.items():
            if not self.assertEqual(data[k], compare[k]):
                return False
        return True

    # Test with hex token id that exists
    def test_existing_id(self):
        get = '?tdp-crt_id=02d19cc1-3147-47ef-8aac-b37101c66a10'
        compare = {
            "id": "02d19cc1-3147-47ef-8aac-b37101c66a10",
            "START": "Quality",
            "pass_code": "",
            "gradeRange": "High school",
            "last_updated": "2020-08-06T00:59:22.576547+00:00",
            "quality_status": "in progress",
            "curriculumTitle": "Test",
            "publicationDate": "",
            "ls_modified_time": "2020-08-06T00:58:28.817Z",
            "criterionClickedTitles": "{\"quality-crt-question-2\":\"clicked\"}",  # noqa 501
            "dimensionOverallScores": "{\"Quality\":\"limited\"}",
        }
        self.check_get(get, self.assertGetSuccess, compare=compare)

    # Test with hex token id that doesn't exist
    def test_non_existent_id(self):
        get = '?tdp-crt_id=02d19cc1-3147-47ef-8aac-b37101c66a11'
        self.check_get(get, self.assertPageNotFound)

    # Test with null
    def test_null(self):
        get = ''
        self.check_get(get, self.assertPageNotFound)

    # Test with empty string
    def test_empty_id(self):
        get = '?tdp-crt_id='
        self.check_get(get, self.assertPageNotFound)

    # Test with non-hex fake token id
    def test_invalid_id(self):
        get = '?tdp-crt_id=apple'
        self.check_get(get, self.assertPageNotFound)


class UpdateReviewTest(TestCase):
    fixtures = ['crtool_initial_data']

    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        kwargs['content_type'] = "application/json"
        request = self.factory.post(reverse("update_review"), post, **kwargs)
        return update_review(request)

    def assertBadRequest(self, response):
        self.assertEqual(response.status_code, 400)

    def assertPageNotFound(self, response):
        self.assertEqual(response.status_code, 404)

    def assertUpdateSuccess(self, response, compare={}):
        data = json.loads(response.content.decode("utf-8"))
        # Return False if updated review doesn't match comparison.
        for k, v in compare.items():
            if not self.assertEqual(data[k], compare[k]):
                return False
        # Return False if the last_updated date isn't updated.
        if not self.assertGreater(data['last_updated'], compare['last_updated']):  # noqa 501
            return False
        return True

    def check_post(self, post, response_check, ajax=False, compare={}):
        if compare:
            response_check(self.post(post, ajax=ajax), compare=compare)
        else:
            response_check(self.post(post, ajax=ajax))

    # Test with hex token id that exists
    def test_update_title(self):
        post = {
            "id": "242449c9-2512-43c1-b512-d21744407d2a",
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        compare = {
            "id": "242449c9-2512-43c1-b512-d21744407d2a",
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertUpdateSuccess, compare=compare)

    # Test with hex token id that doesn't exist
    def test_non_existent_id(self):
        post = {
            "id": "fd28d4e6-cf83-4742-bad8-5f2c9a4b549e",
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with null token id
    def test_null_id(self):
        post = {
            "id": None,
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with missing token id
    def test_missing_id(self):
        post = {
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with empty string token id
    def test_empty_id(self):
        post = {
            "id": "",
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with non-hex fake token id
    def test_invalid_id(self):
        post = {
            "id": "apple",
            "pass_code": None,
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": ""
        }
        self.check_post(post, self.assertPageNotFound)

    # Test empty post
    def test_empty_post(self):
        post = {}
        self.check_post(post, self.assertPageNotFound)

    # Test empty post
    def test_null_post(self):
        post = None
        self.check_post(post, self.assertPageNotFound)
