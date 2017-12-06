'use strict';

const gulp = require( 'gulp' );

gulp.task( 'default',
  [
    'test:unit',
    'build'
  ]
);
