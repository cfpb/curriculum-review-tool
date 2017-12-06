from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(
        r'^$',
        TemplateView.as_view(template_name='teachers_digital_platform/base.html'),
        name='teachers_digital_platform_base'
    ),
]
