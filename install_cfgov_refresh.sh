#!/bin/sh

git clone --depth 1 https://github.com/cfpb/cfgov-refresh
cd cfgov-refresh
pip install -r requirements/wagtail.txt

# If cfgov-refresh includes this project in its list of requirements, we should
# skip it when installing dependencies.
pip install $(
    cat requirements/libraries.txt | \
    awk '!/teachers_digital_platform/ && !/^#/'
)

pip install -r requirements/test.txt
