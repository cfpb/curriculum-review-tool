# -*- coding: utf-8 -*-
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils import timezone

import uuid


class CurriculumReviewSession(models.Model):
    """Session state of a Curriculum Review"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pass_code = models.CharField(max_length=50, null=True, blank=True)
    data = JSONField()
    last_updated = models.DateTimeField('Updated', default=timezone.now)
