from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(
        r'^crt-start/$',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-start.html')
    ),
    url(
        r'^crt-survey/$',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-survey.html')
    ),
    url(
        r'^crt-summary/$',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-summary.html')
    ),
    url(
        r'^crt-print/$',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-print.html')
    ),
]
