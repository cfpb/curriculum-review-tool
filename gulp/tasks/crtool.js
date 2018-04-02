'use strict';

const gulp = require( 'gulp' );
const run = require('gulp-run');

gulp.task( 'crtool:chdir-down', () => {
  process.chdir('teachers_digital_platform/crtool');
} );

gulp.task( 'crtool:build', () => {
  return run('npm run build').exec();
} );

gulp.task( 'crtool:chdir-up', () => {
  process.chdir('../..');
} );

gulp.task( 'crtool',
  [
    'crtool:chdir-down',
    'crtool:build',
    'crtool:chdir-up'
  ]
);