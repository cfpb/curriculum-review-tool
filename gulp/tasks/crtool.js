const gulp = require( 'gulp' );
const spawn = require( 'child_process' ).spawn;

gulp.task( 'crtool', done => {
  spawn(
    'npm',
    [ 'run', 'build' ],
    {
      cwd: 'crtool/crtool/',
      stdio: 'inherit'
    }
  )
    .on( 'close', done );
} );
