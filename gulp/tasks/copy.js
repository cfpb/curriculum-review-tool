const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const configCopy = require( '../config' ).copy;
const handleErrors = require( '../utils/handle-errors' );

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
    .pipe( gulp.dest( dest ) );
}

gulp.task( 'copy:icons', () => {
  const icons = configCopy.icons;
  return _genericCopy( icons.src, icons.dest );
} );

gulp.task( 'copy',
  gulp.parallel(
    'copy:icons'
  )
);
