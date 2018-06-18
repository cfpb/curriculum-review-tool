#!/bin/sh

git clone https://github.com/cfpb/cfgov-refresh
cd cfgov-refresh
pip install -r requirements/wagtail.txt
pip install -r requirements/libraries.txt
pip install -r requirements/test.txt
