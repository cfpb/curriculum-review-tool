'use strict';

/* Notes:
   - this task watches the source files for changes,
     then fires off the relevant task
   - gulp/tasks/browserSync.js reloads the browser with the compiled files
*/

var gulp = require( 'gulp' );
var config = require( '../config' );

gulp.task( 'watch', [ 'scripts', 'styles' ], function() {
  gulp.watch( config.scripts.src, [ 'scripts', 'test' ] );
  gulp.watch( config.styles.cwd + '/**/*.less', [ 'styles' ] );
} );
