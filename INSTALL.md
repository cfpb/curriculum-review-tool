# Installation instructions

The following installation steps install all three tools
(Building blocks tool, Curriculum Review tool, Search interface).

TDP can only be run as part of
[cfgov-refresh](https://github.com/cfpb/cfgov-refresh#quickstart)
and so that repository must be installed before installing this one.

cfgov-refresh can be run in two ways: as part of a standard Python
virtual environment or as a Docker Compose application. Regardless of
which method you use, the `crtool` application must be installed in
your Python environment.

- If using a standard virtual environment, install the app with:

   ```sh
   $ pip install -e /path/to/teachers-digital-platform
   ```
- If using the Docker setup, clone the repository into the
`develop-apps` subdirectory of `cfgov-refresh`.

In both cases, you can now run the setup script in this project to
install third-party dependencies and build frontend assets:

```sg
$ ./setup.sh
```

If working with an empty database, you'll need to load sample data
to work with the TDP apps:

```sh
$ cd path/to/cfgov-refresh
$ cfgov/manage.py loaddata /path/to/teachers-digital-platform/teachers_digital_platform/fixtures/tdp_initial_data.json
Installed 74 object(s) from 1 fixture(s)
```

If working with a database prepopulated with a dump from consumerfinance.gov,
you'll already have the necessary TDP data.
