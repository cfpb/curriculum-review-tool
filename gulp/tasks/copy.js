'use strict';

const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const gulpReplace = require( 'gulp-replace' );
const configCopy = require( '../config' ).copy;
const handleErrors = require( '../utils/handle-errors' );
const browserSync = require( 'browser-sync' );
const del = require( 'del' );

/**
 * Generic copy files flow from source to destination.
 * @param {string} src The path to the source files.
 * @param {string} dest The path to destination.
 * @returns {Object} An output stream from gulp.
 */
function _genericCopy( src, dest ) {
  return gulp.src( src )
    .pipe( gulpChanged( dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
}

module.exports = {
    copyIcons: () => {
        const icons = configCopy.icons;
        return _genericCopy( icons.src, icons.dest );
    }
};

// gulp.task( 'copy:icons', () => {
//   const icons = configCopy.icons;
//   return _genericCopy( icons.src, icons.dest );
// } );

// gulp.task( 'copy',
//     gulp.series(
//         'copy:icons'
//     )
// );
