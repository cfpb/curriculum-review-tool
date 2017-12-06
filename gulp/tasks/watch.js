'use strict';

/* Notes:
   - this task watches the source files for changes,
     then fires off the relevant task
   - gulp/tasks/browserSync.js reloads the browser with the compiled files
*/

var gulp = require( 'gulp' );
var config = require( '../config' );
var browserSync = require( 'browser-sync' );

var reload = browserSync.reload;

gulp.task( 'watch', [ 'browserSync', 'scripts', 'styles' ], function() {
  gulp.watch( config.scripts.src, [ 'scripts', reload ] );
  gulp.watch( config.styles.cwd + '/**/*.less', [ 'styles', reload ] );
} );
