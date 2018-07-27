from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    # For now we will redirect to the crt-start.html until we have something formal to point to
    url(
        r'^$',
        TemplateView.as_view(template_name='teachers_digital_platform/crt-start.html')
    ),
]
