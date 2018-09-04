'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );
const spawn = require( 'child_process' ).spawn;

gulp.task('test', function(done) {
  spawn('npm', ['run', 'test'], { cwd: 'teachers_digital_platform/crtool/', stdio: 'inherit' })
    .on('close', done);
});