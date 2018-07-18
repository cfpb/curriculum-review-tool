from __future__ import unicode_literals

from django.db import models
from django.conf import settings

from modelcluster.fields import ParentalKey, ParentalManyToManyField
from mptt.models import MPTTModel, TreeForeignKey, TreeManyToManyField
from mptt.forms import TreeNodeMultipleChoiceField


class ParentalTreeManyToManyField(ParentalManyToManyField, TreeManyToManyField):
    def formfield(self, **kwargs):
        kwargs.setdefault('form_class', TreeNodeMultipleChoiceField)
        return super(TreeManyToManyField, self).formfield(**kwargs)
