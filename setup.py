from setuptools import find_packages, setup


install_requires = ["Django>=2.2,<3.3", "psycopg2-binary==2.8.6"]


setup_requires = [
    "cfgov-setup==1.2",
    "setuptools-git-version==1.0.3",
]

testing_extras = ["mock>=2.0.0", "coverage>=3.7.0", "dj-database-url==0.5.0"]


setup(
    name="crtool",
    url="https://github.com/cfpb/curriculum-review-tool",
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
        "Framework :: Django :: 3",
        "Framework :: Wagtail",
        "Framework :: Wagtail :: 2",
        "License :: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
        "License :: Public Domain",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
    ],
    python_requires=">=3.6",
    install_requires=install_requires,
    setup_requires=setup_requires,
    extras_require={"testing": testing_extras},
    frontend_build_script="setup.sh",
)
