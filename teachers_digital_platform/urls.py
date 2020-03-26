from django.views.generic import TemplateView

from wagtailsharing.views import ServeView


try:
    from django.urls import re_path
except ImportError:
    from django.conf.urls import url as re_path


urlpatterns = [
    re_path(
        r"^curriculum-review/tool/$",
        TemplateView.as_view(
            template_name="teachers_digital_platform/crt-survey.html"
        ),
    ),
    re_path(
        r"^curriculum-review/before-you-begin/$",
        TemplateView.as_view(
            template_name="teachers_digital_platform/crt-start.html"
        ),
    ),
    re_path(
        r"^journey",
        TemplateView.as_view(
            template_name="teachers_digital_platform/bb-tool.html"
        ),
    ),
    re_path(
        r"^$",
        lambda request: ServeView.as_view()(
            request, request.path
        ),
    ),
]
