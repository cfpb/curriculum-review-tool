from setuptools import find_packages, setup

try:
    import pypandoc
    long_description = pypandoc.convert('README.md', 'rst')
except (IOError, ImportError):
    long_description = open('README.md', 'r').read()


install_requires = [
    'wagtail>=2.3,<2.4',
    'Django>=1.11,<1.12',
    'django-haystack',
    'django-mptt==0.9.0',
    'django-js-asset==1.1.0',
]


testing_extras = [
    'mock>=2.0.0',
    'coverage>=3.7.0',
]


setup(
    name='teachers_digital_platform',
    url='https://github.com/cfpb/teachers-digital-platform',
    author='CFPB',
    author_email='tech@cfpb.gov',
    description='Teachers digital platform',
    long_description=long_description,
    license='CC0',
    version_format='{tag}.dev{commitcount}+{gitsha}',
    include_package_data=True,
    packages=find_packages(),
    package_data={
        'teachers_digital_platform': [
            'jinja2/teachers_digital_platform/*',
            'jinja2/teachers_digital_platform/prototypes/*',
            'templates/search/indexes/teachers_digital_platform/*',
            'static/tdp/css/*',
            'static/tdp/js/*',
            'static/tdp/img/*',
            'static/tdp/fonts/*',
        ],
    },
    install_requires=install_requires,
    extras_require={
        'testing': testing_extras,
    },
    classifiers=[
        'Framework :: Django',
        'Framework :: Django :: 1.11',
        'Framework :: Django :: 2.0',
        'Framework :: Django :: 2.2',
        'Framework :: Wagtail',
        'Framework :: Wagtail :: 1',
        'Framework :: Wagtail :: 2',
        'License :: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication',
        'License :: Public Domain',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
    ],
    setup_requires=['cfgov-setup==1.2', 'setuptools-git-version==1.0.3'],
    frontend_build_script='setup.sh'
)
