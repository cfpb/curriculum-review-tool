const autoprefixer = require( 'autoprefixer' );
const BROWSER_LIST = require( '../browser-list-config' );
const config = require( '../config' );
const configCRTool = require( '../config_crtool' );
const configPkg = config.pkg;
const configBanner = config.banner;
const configStyles = config.styles;
const configCRToolStyles = configCRTool.styles;
const gulp = require( 'gulp' );
const gulpDebug = require( 'gulp-debug' );
const gulpHeader = require( 'gulp-header' );
const gulpLess = require( 'gulp-less' );
const gulpNewer = require( 'gulp-newer' );
const gulpPostcss = require( 'gulp-postcss' );
const gulpSourcemaps = require( 'gulp-sourcemaps' );
const handleErrors = require( '../utils/handle-errors' );

/**
 * Process modern CSS.
 * @returns {PassThrough} A source stream.
 */
function stylesModern() {
  return gulp.src( configStyles.cwd + configStyles.src )
    .pipe( gulpNewer( {
      dest:  configStyles.dest + '/tdp.css',
      extra: configStyles.otherBuildTriggerFiles
    } ) )
    .pipe( gulpDebug( { title: 'src:' } ) )
    .pipe( gulpSourcemaps.init() )
    .pipe( gulpLess( configStyles.settings ) )
    .on( 'error', handleErrors.bind( this, { exitProcess: true } ) )
    .pipe( gulpPostcss( [
      autoprefixer( { browsers: BROWSER_LIST.LAST_2 } )
    ] ) )
    .pipe( gulpDebug( { title: 'prefixed:' } ) )
    .pipe( gulpHeader( configBanner, { pkg: configPkg } ) )
    .pipe( gulpSourcemaps.write( '.' ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe( gulpDebug( { title: 'dest:' } ) );
}

/**
 * Process modern CSS.
 * @returns {PassThrough} A source stream.
 */
function stylesCRTool() {
  return gulp.src( configCRToolStyles.cwd + configCRToolStyles.src )
    .pipe( gulpNewer( {
      dest:  configCRToolStyles.dest + '/crtool.css',
      extra: configCRToolStyles.otherBuildTriggerFiles
    } ) )
    .pipe( gulpDebug( { title: 'src:' } ) )
    .pipe( gulpSourcemaps.init() )
    .pipe( gulpLess( configCRToolStyles.settings ) )
    .on( 'error', handleErrors.bind( this, { exitProcess: true } ) )
    .pipe( gulpPostcss( [
      autoprefixer( { browsers: BROWSER_LIST.LAST_2 } )
    ] ) )
    .pipe( gulpDebug( { title: 'prefixed:' } ) )
    .pipe( gulpHeader( configBanner, { pkg: configPkg } ) )
    .pipe( gulpSourcemaps.write( '.' ) )
    .pipe( gulp.dest( configCRToolStyles.dest ) )
    .pipe( gulpDebug( { title: 'dest:' } ) );
}


gulp.task( 'styles:modern', stylesModern );
gulp.task( 'styles:crtool', stylesCRTool );

gulp.task( 'styles',
  gulp.parallel(
    'styles:modern',
    'styles:crtool'
  )
);
