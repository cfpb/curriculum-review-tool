const gulp = require( 'gulp' );
const spawn = require( 'child_process' ).spawn;

gulp.task( 'test:unit', done => {
  spawn(
    'npm',
    [ 'run', 'test' ],
    {
      cwd: 'crtool/crtool/',
      stdio: 'inherit'
    }
  )
    .once( 'close', code => {
      if ( code ) {
      // eslint-disable-next-line no-console
        console.log( 'Unit tests exited with code ' + code );
        process.exit( 1 );
      }
      // eslint-disable-next-line no-console
      console.log( 'Unit tests done!' );
      done();
    } );
} );
