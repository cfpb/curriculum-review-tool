import os

import dj_database_url

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'crtool'
]
SECRET_KEY = "not-secret-key-for-testing"

ROOT_URLCONF = "crtool.urls"

# Databases
DATABASES = {}

# If DATABASE_URL is defined in the environment, use it to set the Django DB
if os.getenv("DATABASE_URL"):
    DATABASES["default"] = dj_database_url.config()
