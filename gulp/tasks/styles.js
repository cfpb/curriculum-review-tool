'use strict';

const autoprefixer = require( 'autoprefixer' );
const BROWSER_LIST = require( '../browser-list-config' );
const browserSync = require( 'browser-sync' );
const config = require( '../config' );
const configPkg = config.pkg;
const configBanner = config.banner;
const configStyles = config.styles;
const gulp = require( 'gulp' );
const gulpBless = require( 'gulp-bless' );
const gulpChanged = require( 'gulp-changed' );
const gulpCleanCss = require( 'gulp-clean-css' );
const gulpHeader = require( 'gulp-header' );
const gulpLess = require( 'gulp-less' );
const debug = require( 'gulp-debug' );
const gulpPostcss = require( 'gulp-postcss' );
const gulpRename = require( 'gulp-rename' );
const gulpSourcemaps = require( 'gulp-sourcemaps' );
const handleErrors = require( '../utils/handle-errors' );
const postcssUnmq = require( 'postcss-unmq' );

/**
 * Process modern CSS.
 * @returns {PassThrough} A source stream.
 */
function stylesModern() {
  return gulp.src( configStyles.cwd + configStyles.src )
    .pipe(debug({title: 'src:'}))
    .pipe( gulpChanged( configStyles.dest, { extension: '.css' } ) )
    .pipe( gulpSourcemaps.init() )
    .pipe( gulpLess( configStyles.settings ) )
    .on( 'error', handleErrors.bind( this, { exitProcess: true } ) )
    .pipe( gulpPostcss( [
      autoprefixer( { browsers: BROWSER_LIST.LAST_2 } )
    ] ) )
    .pipe(debug({title: 'prefixed:'}))
    .pipe( gulpHeader( configBanner, { pkg: configPkg } ) )
    .pipe( gulpSourcemaps.write( '.' ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe(debug({title: 'dest:'}))
    .pipe( browserSync.reload( {
      stream: true
    } ) );
}


gulp.task( 'styles:modern', stylesModern );

gulp.task( 'styles', [
  'styles:modern'
] );
