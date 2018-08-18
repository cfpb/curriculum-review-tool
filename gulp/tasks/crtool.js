'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );
const spawn = require( 'child_process' ).spawn;

gulp.task('crtool', function(done) {
  spawn('npm', ['run', 'build'], { cwd: 'teachers_digital_platform/crtool/', stdio: 'inherit' })
    .on('close', done);
});
