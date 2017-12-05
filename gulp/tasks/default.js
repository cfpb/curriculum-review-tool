'use strict';

const gulp = require( 'gulp' );

gulp.task( 'default',
  [
    'lint:scripts',
    'test:unit',
    'build'
  ]
);
