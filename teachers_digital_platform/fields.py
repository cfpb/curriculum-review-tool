from __future__ import unicode_literals

from modelcluster.fields import ParentalManyToManyField
from mptt.forms import TreeNodeMultipleChoiceField
from mptt.models import TreeManyToManyField


class ParentalTreeManyToManyField(
    ParentalManyToManyField, TreeManyToManyField
):
    def formfield(self, **kwargs):
        kwargs.setdefault("form_class", TreeNodeMultipleChoiceField)
        return super(TreeManyToManyField, self).formfield(**kwargs)
