import os
from setuptools import find_packages, setup


install_requires = [
    "wagtail>=2.3,<2.4",
    "Django>=1.11,<2.1",
    "django-haystack",
    "django-mptt==0.9.0",
    "django-js-asset==1.1.0",
]


setup_requires = [
    "cfgov-setup==1.2",
    "setuptools-git-version==1.0.3",
]

testing_extras = [
    "coverage>=4.5.1,<5",
    "freezegun>=0.3.1,<1",
    "mock>=2.0.0",
]


def read_file(filename):
    """Read a file into a string"""
    path = os.path.abspath(os.path.dirname(__file__))
    filepath = os.path.join(path, filename)
    try:
        return open(filepath).read()
    except IOError:
        return ""


setup(
    name="teachers_digital_platform",
    author="CFPB",
    author_email="tech@cfpb.gov",
    version_format="{tag}.dev{commitcount}+{gitsha}",
    maintainer="cfpb",
    maintainer_email="tech@cfpb.gov",
    description="Teachers digital platform",
    url="https://github.com/cfpb/teachers-digital-platform",
    license="CC0",
    packages=find_packages(),
    include_package_data=True,
    package_data={
        "teachers_digital_platform": [
            "jinja2/teachers_digital_platform/*",
            "jinja2/teachers_digital_platform/prototypes/*",
            "templates/search/indexes/teachers_digital_platform/*",
            "static/tdp/css/*",
            "static/tdp/js/*",
            "static/tdp/img/*",
            "static/tdp/fonts/*",
        ],
    },
    classifiers=[
        "License :: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
        "License :: Public Domain",
        "Topic :: Internet :: WWW/HTTP",
        "Intended Audience :: Developers",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Framework :: Django",
        "Framework :: Wagtail",
        "Operating System :: OS Independent",
    ],
    long_description=read_file("README.md"),
    zip_safe=False,
    install_requires=install_requires,
    setup_requires=setup_requires,
    extras_require={"testing": testing_extras},
    frontend_build_script="setup.sh"
)
