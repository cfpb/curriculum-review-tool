const config = require( '../config' );
const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const gulpStylelint = require( 'gulp-stylelint' );
const handleErrors = require( '../utils/handle-errors' );
const minimist = require( 'minimist' );
const through2 = require( 'through2' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLintJS( src ) {
  // Pass all command line flags to EsLint.
  const options = minimist( process.argv.slice( 2 ) );
  let errorHandler = through2.obj();

  if ( options.travis ) {
    options.quiet = true;
    errorHandler = gulpEslint.failAfterError();
  }

  return gulp.src( src, { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( errorHandler )
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
gulp.task( 'lint:tests', () => _genericLintJS( config.lint.tests ) );

/**
 * Lints the source js files for errors.
 *
 * Add `.pipe(gulpEslint({fix:true}))` to automatically fix errors.
 */
gulp.task( 'lint:scripts', () => _genericLintJS( config.lint.js ) );

/**
 * Lints the source Less files for errors.
 */

gulp.task( 'lint:styles', () => {
  const stream = gulp.src( config.lint.css )
    .pipe( gulpStylelint( {
      reporters: [
        { formatter: 'string', console: true }
      ]
    } ) );
  return stream;
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint',
  gulp.parallel(
    'lint:build',
    'lint:tests',
    'lint:scripts',
    'lint:styles'
  )
);
