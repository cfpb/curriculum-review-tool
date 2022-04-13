from django.urls import re_path
from django.views.generic import TemplateView

from . import views


urlpatterns = [
    re_path(
        r"^before-you-begin/$",
        TemplateView.as_view(template_name="crtool/crt-start.html"),
    ),
    re_path(
        r"^tool/$",
        TemplateView.as_view(template_name="crtool/crt-survey.html"),
    ),
    re_path(r"^create-review/$", views.create_review, name="create_review"),
    re_path(r"^get-review/$", views.get_review, name="get_review"),
    re_path(
        r"^continue-review/$", views.continue_review, name="continue_review"
    ),
    re_path(r"^update-review/$", views.update_review, name="update_review"),
]
