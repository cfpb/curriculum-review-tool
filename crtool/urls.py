from django.urls import re_path
from django.views.generic import TemplateView


urlpatterns = [
    re_path(
        r'^before-you-begin/$',
        TemplateView.as_view(template_name='crtool/crt-start.html')
    ),
    re_path(
        r'^tool/$',
        TemplateView.as_view(template_name='crtool/crt-survey.html')
    ),
]
