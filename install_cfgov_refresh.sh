#!/bin/sh

git clone --depth 1 https://github.com/cfpb/cfgov-refresh
cd cfgov-refresh
pip install -r requirements/wagtail.txt
pip install -r requirements/libraries.txt
pip install -r requirements/test.txt
