# Teacher Digital Platform

**Description**:  The Teacher Digital Platform (TDP) will be a new section within the existing cf.gov website to promote the CFPBs financial education building blocks research. It will offer teachers resources to assist them with instructing students in K-12 grades on financial education topics.

This platform contains work for three separate projects: Building blocks tool, Curriculum review tool, and Search interface.


#### Table of Contents
[Building blocks tool](#building-blocks-tool)

  - [Implementation details](#bb-implementation-details)

  - [Local testing/development](#bb-local-testing-development)

[Curriculum review tool](#curriculum-review-tool)

[Search interface](#search-interface)

  - [Models](#si-models)

[Dependencies](#dependencies)

[Installation](#installation)

[CSS and JavaScript](#css-and-javascript)

[How to test Software](#how-to-test-the-software)

  - [Testing JavaScript code](#testing-javascript-code)

  - [Testing Python code](#testing-python-code)

[Known Issues](#known-issues)

[Getting help](#getting-help)

[Open source licensing info](#open-source-licensing-info)

[Credits and references](#credits-and-references)

<a name="building-blocks-tool"/>

## Building blocks tool

**Description**: [The journey to adult financial well-being](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/journey) - A single page that will take users on a journey from adult financial well-being, to financial capability in youth, to the building blocks, and ending on a call to action. The call to action will focus on telling educators how they can easily incorporate the building blocks in their classroom.

  - **Technology stack**: Jinja2 template, inline SVG images, CSS, and JS.

  - **Live site**: [The journey to adult financial well-being](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/journey)

  - **Dependencies**: [smoothscroll polyfill](https://github.com/iamdustan/smoothscroll), [animate on scroll](https://github.com/michalsnik/aos)

<a name="bb-implementation-details"/>

### Implementation details

  - **Jinja2**: A single template file is used ([bb-tool.html](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/jinja2/teachers_digital_platform/bb-tool.html)).

  - **CSS**: This page pulls in the platform’s global style sheet ([tdp.less](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/css/tdp.less)). The [tour molecule](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/css/organisms/tour.less) contains most of the styles specific to this page. This page also uses the styles from the [animate on scroll](https://github.com/michalsnik/aos) library.

  - **JS**: This page pulls in the platform’s global JavaScript file ([tdp.js](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/js/index.js)). The [scroll.js](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/js/scroll.js) module handles the smooth scrolling to the different tour stops and depends on the [smoothscroll polyfill](https://github.com/iamdustan/smoothscroll) to work in older browsers. This page also uses the script from the [animate on scroll](https://github.com/michalsnik/aos) library.

<a name="bb-local-testing-development"/>

### Local testing/development

 - The Building blocks tool is accessible at the following path "**practitioner-resources/youth-financial-education/journey**"
 - The template for this page can be found in: ```teachers_digital_platform/jinja2/teachers_digital_platform/bb-tool.html```

<a name="curriculum-review-tool"/>

## Curriculum review tool

**Description**: The [Curriculum review tool](https://www.consumerfinance.gov//practitioner-resources/youth-financial-education/curriculum-review/tool/) is an interactive, online tool for educators to use in place of the [paper-based PDF](https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf) that already exists on the cf.gov website.

Further documentation about the CR tool can be found in the [crtool directory](https://github.com/cfpb/teachers-digital-platform/tree/master/teachers_digital_platform/crtool).

<a name="search-interface"/>

## Search interface

**Description**: The goal of the [searchable interface](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/teach/activities/) is to create a repository for financial education activities that teachers can use to easily find and download activities and activity ideas to use in their classroom.
The searchable interface serves as a end-point for a teacher who has learned more about teaching Financial Education through reviewing the content within the Building Blocks tool section.
Once they've learned about how to incorporated financial education into their classroom through the [Building Blocks](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/learn/) tool, they can now put those ideas into action through utilizing activities and handouts from this searchable interface.

  - **Technology stack**: Python, Django, Wagtail, Elasticsearch, Jinja2 template, inline SVG images, CSS, and JS.

  - **Status**: Beta

  - **Live site**: [searchable interface](https://www.consumerfinance.gov/practitioner-resources/youth-financial-education/teach/activities/)

**Screenshot**:

![](https://raw.githubusercontent.com/cfpb/teachers-digital-platform/master/screenshot.png)

<a name="si-models"/>

### Models

The search tool is built using two types of Wagtail pages; TDP Activity page (TDPActivityPage) and TDP Activity search page (TDPActivityIndexPage).
The TDP Activity search page is a singleton page that serves as the listing page. The path of the TDP Activity search page is determined
by its position in the Wagtail menu. To add Activities to the TDP Activity search page, you'll need to publish child TDP Activity pages
under the TDP Activity search page.

**Note**: As a precursor, you'll need to add values for the various Activity metadata fields. This should be done automatically if you run migrations:
```python manage.py migrate```

**TDPActivityPage**:

- **Extends**: CFGOVPage

- **Description**: A TDP Activity Page is used to populate search results in the TDPActivityIndexPage
and provide detail pages for various classroom activities. This model has many metadata fields
that are used as filters on the Search page.

**BaseActivityTaxonomy**:

- **Extends**: models.Model

- **Description**: This is a base (abstract) Model on which most metadata fields are based (ActivityTopic being the exception).
You can edit these field options in the Wagtail admin menu by going to "TDP Activity > [Label]"

- **Fields**:

  - title: A unique string field that serves as the filter value label

  - weight: An integer that determines the labels ordering when listed

- **Models that extend BaseActvitityTaxonomy**:

  - **ActivityAgeRange**: e.g: "13-15", "16-19", etc.

  - **ActivityBloomsTaxonomyLevel**: e.g: "Remember", "Understand", etc.

  - **ActivityBuildingBlock**: e.g: "Executive function", "Financial habits and norms", etc.

  - **ActivityCouncilForEconEd**: e.g: "Standard I. Earning income", etc.

  - **ActivityDuration**: e.g: "15-20 minutes", etc.

  - **ActivityGradeLevel**: e.g: "High school (9-10)", etc.

  - **ActivityJumpStartCoalition**: e.g: "Spending and saving", etc.

  - **ActivitySchoolSubject**: e.g: "CTE (Career and technical education)", etc.

  - **ActivityStudentCharacteristics**: e.g: "Rural", "English language learners", etc.

  - **ActivityTeachingStrategy**: e.g: "Cooperative learning", "Gamification", etc.

  - **ActivityType**: e.g: "Individual", "Whole class", etc.

**ActivityTopic**:

- **Extends**: [MPTTModel](https://django-mptt.github.io/django-mptt/models.html)

- **Description**: This model allows us to have nested Topics

- **Fields**:

  - title: A unique string field that serves as the filter value label

  - weight: An integer that determines the labels ordering when listed

  - parent: A TreeForeignKey to the parent topic.

- **Note**: This model's nested admin ui breaks in the Wagtail admin, so it is managed in the [django admin](https://www.consumerfinance.gov/django-admin/teachers_digital_platform/activitytopic/)

**TDPActivityIndexPage**:

- **Extends**: CFGOVPage

- **Description**: The TDP Activity Search Page is a filterable listing page that displays published TDP Activity Pages.
There is logic in the code that limits the site to only have one instance of a TDPActivityIndexPage. This is a Wagtail editable
page that is powered by Haystack and Elasticsearch. For that reason, results will not display until you run:
```bash
python manage.py update_index -r teachers_digital_platform
```
- **Fields**:

  - header: A Streamfield that allows for TextIntroduction molecules

<a name="dependencies"/>

## Dependencies

- **django-haystack**: The search page requires haystack and elasticsearch

- **django-mptt (0.9.0)**: MPTT is used to provide hierarchical topic metadata via the ActivityTopic model

- **django-js-asset (1.1.0)**': JS Asset is a dependency of django-mptt

<a name="installation"/>

## Installation

The following installation steps installs all three tools (Building blocks tool, Curriculum Review tool, Search interface)

- You must first clone and install the [cfgov-refresh repository](https://github.com/cfpb/cfgov-refresh#quickstart)

- Clone this repository into the `develop-apps` folder of the cfgov-refresh repository located here: `cfgov-refresh/develop-apps`

- Install third-party dependencies and build frontend assets:
```sh
cd develop-apps/teachers-digital-platform/
./setup.sh
```

<a name="css-and-javascript"/>

## CSS and JavaScript

This app uses Gulp to generate a single global CSS and JS files based on individual
.less and .js files in "teachers_digital_platform/css" and "teachers_digital_platform/js."
The generated css and js files can be found "teachers_digital_platform/static/"

You can generate all static files running the setup.sh script or running gulp
```sh
cd develop-apps/teachers-digital-platform/
./setup.sh
```
or use gulp:
```sh
gulp
gulp scripts
gulp styles
```

<a name="how-to-test-the-software"/>

## How to test the software

<a name="testing-javascript-code"/>

### Testing Javascript code:

Javascript tests can be found in "teachers_digital_platform/\_\_tests\_\_"

to only test Search Tool JS, run:
```sh
npm run test-js
```
to test both the Search Tool and CRTool, run:

```sh
npm run test
```

<a name="testing-python-code"/>

### Testing Python code:

Unit tests can be found in "teachers_digital_platform/tests/"

**The two main files are**:

- teachers_digital_platform/tests/models/test_activity_index_page.py

- teachers_digital_platform/tests/models/test_pages_utility_definitions.py

**Shell command**:
```sh
tox
```

<a name="known-issues"/>

## Known issues

Currently, [there are no error notifications when the Elasticsearch server is down](https://github.com/cfpb/teachers-digital-platform/blob/master/teachers_digital_platform/js/search.js#L144).
Errors are sent to console log, but is not prominently displayed for end-users.

<a name="getting-help"/>

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

----

<a name="open-source-lincensing-info"/>

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

----

<a name="credits-and-references"/>

## Credits and references

1. This project was heavily influenced by work done on the [regulations3k project](https://github.com/cfpb/cfgov-refresh/tree/master/cfgov/regulations3k).
