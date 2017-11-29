from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(
        r'^$',
        TemplateView.as_view(template_name='satellite/base.html'),
        name='satellite_base'
    ),
]
