from setuptools import find_packages, setup


install_requires = [
    "wagtail>=2.5,<2.6",
    "Django>=2.2,<2.3",
    "django-haystack",
    "django-mptt==0.9.0",
    "django-js-asset==1.1.0",
]


setup_requires = [
    "cfgov-setup==1.2",
    "setuptools-git-version==1.0.3",
]

testing_extras = [
    "mock>=2.0.0",
    "coverage>=3.7.0",
]


setup(
    name="crtool",
    url="https://github.com/cfpb/teachers-digital-platform",
    author="CFPB",
    author_email="tech@cfpb.gov",
    description="Teachers Curriculum Review tool",
    long_description=open("README.md", "r", encoding="utf-8").read(),
    license="CC0",
    version_format="{tag}.dev{commitcount}+{gitsha}",
    include_package_data=True,
    packages=find_packages(),
    package_data={
        "crtool": [
            "jinja2/crtool/*",
            "jinja2/crtool/prototypes/*",
            "static/tdp/css/*",
            "static/tdp/fonts/*",
            "static/tdp/img/*",
            "static/tdp/js/*",
        ],
    },
    classifiers=[
        "Framework :: Django",
        "Framework :: Django :: 2",
        "Framework :: Wagtail",
        "Framework :: Wagtail :: 2",
        "License :: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
        "License :: Public Domain",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
    ],
    install_requires=install_requires,
    setup_requires=setup_requires,
    extras_require={"testing": testing_extras},
    frontend_build_script="setup.sh",
)
