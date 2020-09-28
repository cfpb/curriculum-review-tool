const configFile = require( '../config.js' );
const gulp = require( 'gulp' );
const webpack = require( 'webpack' );
const webpackConfig = require( '../webpack-config.js' );
const webpackStream = require( 'webpack-stream' );


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
  return _processScript( webpackConfig.conf,
    configFile.scripts.entrypoint, configFile.scripts.dest );
}

gulp.task( 'scripts:modern', scriptsModern );

gulp.task( 'scripts',
  gulp.parallel(
    'scripts:modern'
  )
);
