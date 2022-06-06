import json

from django.test import RequestFactory, TestCase
from django.urls import reverse

from crtool.views import (
    continue_review,
    create_review,
    get_review,
    update_review,
)


class CreateReviewTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        kwargs["content_type"] = "application/json"
        request = self.factory.post(reverse("create_review"), post, **kwargs)
        return create_review(request)

    def assertBadRequest(self, response, content=None):
        self.assertEqual(response.status_code, 400)
        if content:
            self.assertEqual(response.content, content)

    def assertCreateSuccess(self, response, compare=None, content=None):
        if compare is None:
            compare = {}
        data = json.loads(response.content.decode("utf-8"))
        for k in compare.keys():
            if not self.assertEqual(data[k], compare[k]):
                return False
        return True

    def check_post(
        self, post, response_check, ajax=False, compare=None, content=None
    ):
        if compare is None:
            compare = {}
        if compare:
            response_check(
                self.post(post, ajax=ajax), compare=compare, content=content
            )  # noqa 501
        else:
            response_check(self.post(post, ajax=ajax), content=content)

    def test_invalid_json(self):
        kwargs = {
            "HTTP_X_REQUESTED_WITH": "XMLHttpRequest",
            "content_type": "application/json",
        }
        request = self.factory.post(
            reverse("create_review"), "invalid:json}", **kwargs
        )
        self.assertBadRequest(create_review(request), b"Invalid JSON")

    def test_missing_title(self):
        post = {
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, content=b"Invalid Input")

    def test_empty_title(self):
        post = {
            "tdp-crt_title": "",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest)

    def test_title_not_string(self):
        post = {
            "tdp-crt_title": ["Hello", "World"],
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, content=b"Invalid Input")

    def test_missing_grade_level(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
        }
        self.check_post(post, self.assertBadRequest)

    def test_empty_grade_level(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "",
        }
        self.check_post(post, self.assertBadRequest)

    def test_create(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        compare = {
            "curriculumTitle": "Test title",
            "publicationDate": "Jan 1, 2001",
            "gradeRange": "Elementary school",
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare)

    def test_appropriate_title(self):
        post = {
            "tdp-crt_title": "T" * 150,
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertCreateSuccess)

    def test_title_too_long(self):
        post = {
            "tdp-crt_title": "T" * 151,
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, content=b"Too Large")

    def test_missing_pubdate(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, content=b"Invalid Input")

    def test_empty_pubdate_and_passcode(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pubdate": "",
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": "",
        }
        self.check_post(post, self.assertCreateSuccess, compare=compare)

    def test_missing_title_ajax(self):
        post = {
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_empty_title_ajax(self):
        post = {
            "tdp-crt_title": "",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_missing_grade_level_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_empty_grade_level_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "",
        }
        self.check_post(post, self.assertBadRequest, ajax=True)

    def test_create_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_pubdate": "Jan 1, 2001",
            "tdp-crt_grade": "Elementary school",
        }

        compare = {
            "curriculumTitle": "Test title",
            "publicationDate": "Jan 1, 2001",
            "gradeRange": "Elementary school",
            "pass_code": "",
        }
        self.check_post(
            post, self.assertCreateSuccess, ajax=True, compare=compare
        )  # noqa 501

    def test_missing_pubdate_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
        }
        self.check_post(
            post, self.assertBadRequest, ajax=True, content=b"Invalid Input"
        )  # noqa 501

    def test_empty_pubdate_and_passcode_ajax(self):
        post = {
            "tdp-crt_title": "Test title",
            "tdp-crt_grade": "Elementary school",
            "tdp-crt_pubdate": "",
        }
        compare = {
            "curriculumTitle": "Test title",
            "gradeRange": "Elementary school",
            "publicationDate": "",
            "pass_code": "",
        }
        self.check_post(
            post, self.assertCreateSuccess, compare=compare, ajax=True
        )  # noqa 501


class GetReviewTest(TestCase):
    fixtures = ["crtool_initial_data"]

    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        request = self.factory.post(reverse("get_review"), post, **kwargs)
        return get_review(request)

    def check_post(self, post, response_check, compare=None):
        if compare is None:
            compare = {}
        if compare:
            response_check(self.post(post), compare=compare)
        else:
            response_check(self.post(post))

    def assertPageNotFound(self, response):
        self.assertEqual(response.status_code, 404)

    def assertGetSuccess(self, response, compare=None):
        if compare is None:
            compare = {}
        data = json.loads(response.content.decode("utf-8"))
        for k in compare.keys():
            if not self.assertEqual(data[k], compare[k]):
                return False
        return True

    # Test with token id that exists
    def test_existing_id(self):
        post = {
            "token": "02d19cc1314747ef8aacb3",
        }
        compare = {
            "id": "02d19cc1314747ef8aacb3",
            "START": "Quality",
            "pass_code": "",
            "gradeRange": "High school",
            "last_updated": "2020-08-06T00:59:22.576547+00:00",
            "quality_status": "in progress",
            "curriculumTitle": "Test",
            "publicationDate": "",
            "ls_modified_time": "2020-08-06T00:58:28.817Z",
            "criterionClickedTitles": '{"quality-crt-question-2":"clicked"}',  # noqa 501
            "dimensionOverallScores": '{"Quality":"limited"}',
        }
        self.check_post(post, self.assertGetSuccess, compare=compare)

    # Test with token id that doesn't exist
    def test_non_existent_id(self):
        post = {"token": "02d19cc1314747ef8aacbz"}
        self.check_post(post, self.assertPageNotFound)

    # Test with null
    def test_null(self):
        post = {}
        self.check_post(post, self.assertPageNotFound)

    # Test with empty string
    def test_empty_id(self):
        post = {"token": ""}
        self.check_post(post, self.assertPageNotFound)

    # Test with short fake token id
    def test_invalid_id(self):
        post = {"token": "apple"}
        self.check_post(post, self.assertPageNotFound)


class UpdateReviewTest(TestCase):
    fixtures = ["crtool_initial_data"]

    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post, ajax=False):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"} if ajax else {}
        kwargs["content_type"] = "application/json"
        request = self.factory.post(reverse("update_review"), post, **kwargs)
        return update_review(request)

    def assertBadRequest(self, response, content=None):
        self.assertEqual(response.status_code, 400)
        if content:
            self.assertEqual(response.content, content)

    def assertPageNotFound(self, response, content=None):
        self.assertEqual(response.status_code, 404)

    def assertUpdateSuccess(self, response, compare=None, content=None):
        if compare is None:
            compare = {}
        data = json.loads(response.content.decode("utf-8"))
        # Return False if updated review doesn't match comparison.
        for k in compare.keys():
            if not self.assertEqual(data[k], compare[k]):
                return False
        # Return False if the last_updated date isn't updated.
        if not self.assertGreater(
            data["last_updated"], compare["last_updated"]
        ):  # noqa 501
            return False
        return True

    def check_post(
        self, post, response_check, ajax=False, compare=None, content=None
    ):
        if compare is None:
            compare = {}
        if compare:
            response_check(
                self.post(post, ajax=ajax), compare=compare, content=content
            )
        else:
            response_check(self.post(post, ajax=ajax), content=content)

    def test_invalid_json(self):
        kwargs = {
            "HTTP_X_REQUESTED_WITH": "XMLHttpRequest",
            "content_type": "application/json",
        }
        request = self.factory.post(
            reverse("update_review"), "invalid:json}", **kwargs
        )
        self.assertBadRequest(update_review(request), b"Invalid JSON")

    # Test with token id that exists
    def test_update_title(self):
        post = {
            "id": "242449c9251243c1b512d2",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertUpdateSuccess, compare=post)

    # Test with token id that doesn't exist
    def test_non_existent_id(self):
        post = {
            "id": "6893d3af8eb54e74a27883",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with null token id
    def test_null_id(self):
        post = {
            "id": "",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with missing token id
    def test_missing_id(self):
        post = {
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with empty string token id
    def test_empty_id(self):
        post = {
            "id": "",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertPageNotFound)

    # Test with fake token id
    def test_invalid_id(self):
        post = {
            "id": "apple",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
        }
        self.check_post(post, self.assertPageNotFound)

    def test_overly_large_body(self):
        post = {
            "id": "242449c9251243c1b512d2",
            "pass_code": "",
            "gradeRange": "Middle school",
            "last_updated": "2020-07-12 04:52:56.858970+00:00",
            "curriculumTitle": "Updated title",
            "publicationDate": "",
            "junk": "0123456789" * 49000,
        }
        self.check_post(post, self.assertUpdateSuccess, compare=post)

        post["junk"] = "0123456789" * 50000
        self.check_post(post, self.assertBadRequest, content=b"Too Large")

    # Test empty post
    def test_empty_post(self):
        post = {}
        self.check_post(post, self.assertPageNotFound)

    # Test empty post
    def test_null_post(self):
        post = None
        self.check_post(post, self.assertPageNotFound)


class ContinueReviewTest(TestCase):
    fixtures = ["crtool_initial_data"]

    def setUp(self):
        self.factory = RequestFactory()

    def post(self, post):
        kwargs = {"HTTP_X_REQUESTED_WITH": "XMLHttpRequest"}
        request = self.factory.post(
            reverse("continue_review"), post, **kwargs
        )  # noqa 501
        return continue_review(request)

    def test_non_existent_pass_code(self):
        post = {
            "access_code": "fakefake",
        }
        response = self.post(post)
        self.assertEqual(response.status_code, 404)

    def test_found_pass_code(self):
        post = {
            "access_code": "1da8305db6774e46970ec3",
        }
        response = self.post(post)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url, "../tool/#id=1da8305db6774e46970ec3")
