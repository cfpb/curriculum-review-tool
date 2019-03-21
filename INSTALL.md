# Installation instructions

The following installation steps installs all three tools (Building blocks tool, Curriculum Review tool, Search interface)

- You must first clone and install the [cfgov-refresh repository](https://github.com/cfpb/cfgov-refresh#quickstart)

- Clone this repository into the `develop-apps` folder of the cfgov-refresh repository located here: `cfgov-refresh/develop-apps`

- Install third-party dependencies and build frontend assets:

```sh
$ cd develop-apps/teachers-digital-platform/
$ ./setup.sh
```

- Load sample metadata data for the financial education activity search interface:

```sh
$ cd ../..
$ cfgov/manage.py loaddata develop-apps/teachers-digital-platform/teachers_digital_platform/fixtures/tdp_initial_data.json
Installed 74 object(s) from 1 fixture(s)
```
