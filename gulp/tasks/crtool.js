const gulp = require( 'gulp' );
const spawn = require( 'child_process' ).spawn;

gulp.task( 'crtool', done => {
  spawn(
    'npm',
    [ 'run', 'build' ],
    {
      cwd: 'teachers_digital_platform/crtool/',
      stdio: 'inherit'
    }
  )
    .on( 'close', done );
} );
