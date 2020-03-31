from django.conf.urls import url
from django.views.generic import TemplateView

from wagtailsharing.views import ServeView


urlpatterns = [
    url(
        r"^curriculum-review/tool/$",
        TemplateView.as_view(
            template_name="teachers_digital_platform/crt-survey.html"
        ),
    ),
    url(
        r"^curriculum-review/before-you-begin/$",
        TemplateView.as_view(
            template_name="teachers_digital_platform/crt-start.html"
        ),
    ),
    url(
        r"^journey",
        TemplateView.as_view(
            template_name="teachers_digital_platform/bb-tool.html"
        ),
    ),
    url(r"^$", lambda request: ServeView.as_view()(request, request.path),),
]
