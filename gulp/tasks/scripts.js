'use strict';

/* scripts task
   ---------------
   Bundle javascripty things!
   This task is set up to generate multiple separate bundles,
   from different sources, and to use watch when run from the default task.
*/

const browserSync = require( 'browser-sync' );
const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const handleErrors = require( '../utils/handle-errors' );
const named = require( 'vinyl-named' );
const debug = require( 'gulp-debug' );
const webpack = require( 'webpack' );
const webpackConfig = require( '../webpack-config.js' );
const webpackStream = require( 'webpack-stream' );
const configFile = require( '../config.js' );

/**
 * Standardize webpack workflow for handling script
 * configuration, source, and destination settings.
 * @param {Object} config - Settings for webpack.
 * @param {string} src - Source URL in the unprocessed assets directory.
 * @param {string} dest - Destination URL in the processed assets directory.
 * @returns {PassThrough} A source stream.
 */
function _processScript( config, src, dest ) {
  return gulp.src( src )
    .pipe( webpackStream( config, webpack ) )
    .pipe( gulp.dest( configFile.scripts.dest ) );
}

/**
 * Bundle scripts in unprocessed/js/routes/
 * and factor out common modules into common.js.
 * @returns {PassThrough} A source stream.
 */
function scriptsModern() {
  return _processScript( webpackConfig.modernConf,
                         configFile.scripts.entrypoint, configFile.scripts.dest );
}

gulp.task( 'scripts:modern', scriptsModern );

gulp.task( 'scripts', [
  'scripts:modern'
] );
