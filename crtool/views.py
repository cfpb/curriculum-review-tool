# from django.shortcuts import render
from django.http import JsonResponse
from django.utils import timezone

from models import CurriculumReviewSession

import uuid


def create_review(request):
    data = {}
    if request.method == 'GET':
        title = request.GET.get('tdp-crt_title')
        pub_date = request.GET.get('tdp-crt_pubdate')
        grade_range = request.GET.get('tdp-crt_grade')
        pass_code = request.GET.get('tdp-crt_passcode')
        id = uuid.uuid4()
        last_updated = timezone.now()

        data['id'] = id
        data['pass_code'] = pass_code
        data['last_updated'] = last_updated
        data['curriculumTitle'] = title
        data['publicationDate'] = pub_date
        data['gradeRange'] = grade_range

        review = CurriculumReviewSession.objects.create(id=id, pass_code=pass_code, last_updated=last_updated, data=data)

        if review:
            return JsonResponse(review.data)

    return JsonResponse(data)


def get_review(request):
    data = {}
    if request.method == 'GET':
        id = request.GET.get('id')
        review = CurriculumReviewSession.objects.get(id=id)
        if review:
            data = review.data
    return JsonResponse(data)


def update_review(request):
    data = {}
    return JsonResponse(data)