# from django.shortcuts import render
from django.core.exceptions import ValidationError
from django.http import JsonResponse, Http404
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from pprint import pprint
from datetime import datetime


from crtool.models import CurriculumReviewSession

import json
import uuid


def create_review(request):
    data = {}
    if request.method == 'GET':
        title = request.GET.get('tdp-crt_title')
        pub_date = request.GET.get('tdp-crt_pubdate')
        grade_range = request.GET.get('tdp-crt_grade')
        pass_code = request.GET.get('tdp-crt_pass_code')
        review_id = uuid.uuid4()
        last_updated = timezone.now()

        data['id'] = str(review_id)
        data['pass_code'] = pass_code
        data['last_updated'] = str(datetime.isoformat(last_updated))
        data['curriculumTitle'] = title
        data['publicationDate'] = pub_date
        data['gradeRange'] = grade_range

        review = CurriculumReviewSession.objects.create(
            id=review_id,
            pass_code=pass_code,
            last_updated=last_updated,
            data=data
        )

        if review:
            return JsonResponse(review.data)

    return JsonResponse(data)


def get_review(request):
    data = {}
    if request.method == 'GET':
        review_id = request.GET.get('tdp-crt_id')
        try:
            review = CurriculumReviewSession.objects.get(id=review_id)
            if review:
                data = review.data
        except (CurriculumReviewSession.DoesNotExist, ValidationError):
            raise Http404("Review not found.")
    return JsonResponse(data)


@csrf_exempt
def update_review(request):
    data = {}
    if request.method == 'POST':
        # data = request.POST.get('data')
        data = json.loads(request.body.decode("utf-8"))
        pprint("NSB TEST")
        pprint(data)
        if "id" in data:
            review = CurriculumReviewSession.objects.get(id=data["id"])
            if review:
                # Update last_updated date
                last_updated = timezone.now()
                data['last_updated'] = str(datetime.isoformat(last_updated))
                review.data = data
                review.last_updated = last_updated
                review.save()
                return JsonResponse(review.data)

    return JsonResponse(data)
