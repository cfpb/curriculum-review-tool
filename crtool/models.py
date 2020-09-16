# -*- coding: utf-8 -*-
import random
import string

from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils import timezone


class CurriculumReviewSession(models.Model):
    """Session state of a Curriculum Review"""
    id = models.CharField(primary_key=True, max_length=50, editable=False)
    pass_code = models.CharField(max_length=50, null=True, blank=True)
    data = JSONField()
    last_updated = models.DateTimeField('Updated', default=timezone.now)

    def id_generator(size=22, chars=string.ascii_letters + string.digits):
        temp_id = ''.join(random.choice(chars) for _ in range(size))
        while CurriculumReviewSession.objects.filter(id=temp_id).exists():
            temp_id = ''.join(random.choice(chars) for _ in range(size))
        return temp_id

    def save(self, **kwargs):
        if not self.id:
            # Generate ID once, then check the db. If exists, keep trying.
            self.id = self.id_generator()
        super(CurriculumReviewSession, self).save(**kwargs)
