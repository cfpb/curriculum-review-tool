from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(
        r'^$',
        TemplateView.as_view(template_name='teachers_digital_platform/base.html'),
        name='teachers_digital_platform_base'
    ),
    url(
        r'prototypes/crt-start/',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-start.html')
    ),
    url(
        r'prototypes/crt-survey/',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-survey.html')
    ),
    url(
        r'prototypes/crt-summary/',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-summary.html')
    ),
    url(
        r'prototypes/crt-print/',
        TemplateView.as_view(template_name='teachers_digital_platform/prototypes/crt-print.html')
    ),
    url(
        r'tool/',
        TemplateView.as_view(template_name='teachers_digital_platform/crt-survey.html')
    ),
    url(
        r'before-you-begin/',
        TemplateView.as_view(template_name='teachers_digital_platform/crt-start.html')       
    ),
]
