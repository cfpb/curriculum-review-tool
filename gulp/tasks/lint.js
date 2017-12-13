'use strict';

const config = require( '../config' );
const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const gulpStylelint = require( 'gulp-stylelint' );
const gulpUtil = require( 'gulp-util' );
const handleErrors = require( '../utils/handle-errors' );
const minimist = require( 'minimist' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLintJS( src ) {
  // Pass all command line flags to EsLint.
  const options = minimist( process.argv.slice( 2 ) );

  return gulp.src( src, { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( ( () => {
      if ( options.travis ) {
        return gulpEslint.failAfterError();
      }

      return gulpUtil.noop();
    } )( ) )
    .pipe( gulp.dest( './' ) )
    .on( 'error', handleErrors );
}

/**
 * Lints the build process js files for errors.
 */
gulp.task( 'lint:build', () => _genericLintJS( config.lint.build ) );

/**
 * Lints the test js files for errors.
 */
gulp.task( 'lint:tests', () => _genericLintJS( config.test.tests ) );

/**
 * Lints the source js files for errors.
 */
gulp.task( 'lint:scripts', () => _genericLintJS( config.lint.js ) );

/**
 * Lints the source Less files for errors.
 */

gulp.task( 'lint:styles', () => {
  gulp.src( config.lint.css )
    .pipe( gulpStylelint( {
      reporters: [
        { formatter: 'string', console: true }
      ]
    } ) );
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:tests',
  'lint:scripts',
  'lint:styles'
] );
