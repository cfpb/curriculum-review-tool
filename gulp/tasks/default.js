'use strict';

const gulp = require( 'gulp' );

gulp.task( 'default',
  [
    'lint',
    'test:unit',
    'build'
  ]
);
