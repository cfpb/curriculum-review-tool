import json
import time
from datetime import datetime
from json.decoder import JSONDecodeError

from django.core.exceptions import ValidationError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.utils import timezone

from crtool.models import CurriculumReviewSession


def create_review(request):
    if request.method != "POST":
        return HttpResponse(status=400)

    body_str = request.body.decode("utf-8")
    try:
        fd = json.loads(body_str)
    except JSONDecodeError:
        return HttpResponse(content="Invalid JSON", status=400)

    if "tdp-crt_title" not in fd \
            or "tdp-crt_pubdate" not in fd \
            or "tdp-crt_grade" not in fd:
        return HttpResponse(content="Invalid Input", status=400)

    title = fd["tdp-crt_title"]
    pub_date = fd["tdp-crt_pubdate"]
    grade_range = fd["tdp-crt_grade"]
    if not isinstance(title, str) \
            or not isinstance(pub_date, str) \
            or not isinstance(grade_range, str):
        return HttpResponse(content="Invalid Input", status=400)

    if not title or not grade_range:
        return HttpResponse(status=400)
    if len(title) > 150:
        return HttpResponse(content="Too Large", status=400)
    if len(pub_date) > 50:
        return HttpResponse(content="Too Large", status=400)

    review_id = CurriculumReviewSession.id_generator()
    last_updated = timezone.now()

    # pass_code is a legacy value no longer used.
    data = {
        "id": str(review_id),
        "pass_code": "",
        "last_updated": str(datetime.isoformat(last_updated)),
        "curriculumTitle": title,
        "publicationDate": pub_date,
        "gradeRange": grade_range,
    }

    review = CurriculumReviewSession.objects.create(
        id=review_id,
        pass_code="",
        last_updated=last_updated,
        data=data,
    )

    if review:
        return JsonResponse(review.data)
    else:
        return HttpResponse(status=400)


def get_review(request):
    if request.method != "POST":
        return HttpResponse(status=404)

    review_id = request.POST.get("token")
    try:
        review = CurriculumReviewSession.objects.get(id=review_id)
        if not review:
            return HttpResponse(status=404)

        return JsonResponse(review.data)
    except (
        CurriculumReviewSession.DoesNotExist,
        ValueError,
        ValidationError,
    ):
        return HttpResponse(status=404)


def continue_review(request):
    if request.method != "POST":
        return HttpResponse(status=404)

    review_id = request.POST.get("access_code")
    # Critical pause to prevent brute-forcing review_id's
    time.sleep(1)
    try:
        review = CurriculumReviewSession.objects.get(id=review_id)
        if not review:
            return HttpResponse(status=404)

        return HttpResponseRedirect("../tool/#id=" + review.id)
    except (
        CurriculumReviewSession.DoesNotExist,
        ValueError,
        ValidationError,
    ):
        return HttpResponse(status=404)


def update_review(request):
    if request.method != "POST":
        return HttpResponse(status=404)

    body_str = request.body.decode("utf-8")
    # Pasting in tons of lorem ipsum content (1,280 words 8,660
    # characters) everywhere brought total body bytes to 295360,
    # so this is more than generous.
    if len(body_str) > 500000:
        return HttpResponse(content="Too Large", status=400)

    try:
        data = json.loads(body_str)
    except JSONDecodeError:
        return HttpResponse(content="Invalid JSON", status=400)

    if "id" not in data:
        return HttpResponse(status=404)

    try:
        review = CurriculumReviewSession.objects.get(id=data["id"])
        if not review:
            return HttpResponse(status=404)

        # Update last_updated date
        last_updated = timezone.now()
        iso_last_updated = str(datetime.isoformat(last_updated))
        data["last_updated"] = iso_last_updated
        review.data = data
        review.last_updated = last_updated
        review.save()
        return JsonResponse(review.data)
    except (
        CurriculumReviewSession.DoesNotExist,
        ValueError,
        ValidationError,
    ):
        return HttpResponse(status=404)
