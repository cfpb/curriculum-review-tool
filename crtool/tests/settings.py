import os

import dj_database_url


INSTALLED_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "crtool",
]
SECRET_KEY = "not-secret-key-for-testing"

ROOT_URLCONF = "crtool.urls"

MIDDLEWARE = (
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
)

SECRET_KEY = "django_tests_secret_key"
DEBUG = True
TEMPLATE_DEBUG = False
ROOT_URLCONF = "crtool.urls"
DATABASES = {}

# If DATABASE_URL is defined in the environment, use it to set the Django DB
if os.getenv("DATABASE_URL"):
    DATABASES["default"] = dj_database_url.config()

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_L10N = True
USE_TZ = True
STATIC_URL = "/static/"
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "APP_DIRS": True,
    }
]
