'use strict';

const configTest = require( '../config' ).test;
const fsHelper = require( '../utils/fs-helper' );
const gulp = require( 'gulp' );
const gulpIstanbul = require( 'gulp-istanbul' );
const gulpMocha = require( 'gulp-mocha' );
const gulpUtil = require( 'gulp-util' );
const minimist = require( 'minimist' );

/**
 * Run Mocha JavaScript unit tests.
 * @param {Function} cb - Callback function to call on completion.
 */
function testUnitScripts( cb ) {
  const params = minimist( process.argv.slice( 3 ) ) || {};

  // If --specs=path/to/js/spec flag is added on the command-line,
  // pass the value to mocha to test individual unit test files.
  const specs = params.specs;
  let src = configTest.tests + 'js/';

  if ( specs ) {
    src += specs;
  } else {
    src += '**/*.js';
  }

  gulp.src( src )
    .pipe( gulpIstanbul( {
      includeUntested: false
    } ) )
    .pipe( gulpIstanbul.hookRequire() )
    .on( 'finish', () => {
      gulp.src( src )
        .pipe( gulpMocha( {
          reporter: configTest.reporter ? 'spec' : 'nyan'
        } ) )
        .pipe( gulpIstanbul.writeReports( {
          dir: configTest.tests + 'unit_test_coverage'
        } ) )
        .pipe( gulpIstanbul.enforceThresholds( {
          thresholds: { global: 90 }
        } ) )
        .on( 'end', cb );
    } );
}

gulp.task( 'test', [ 'test:unit' ] );
gulp.task( 'test:unit', testUnitScripts );
