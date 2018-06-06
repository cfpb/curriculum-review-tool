'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );

module.exports = {
    chdirDown: (done) => {
        process.chdir( 'teachers_digital_platform/crtool' );
        done();
    },
    chdirUp: (done) => {
        process.chdir( '../..' );
        done();
    },
    build: () => {
        return run( 'npm run build' ).exec();
    }
}

// gulp.task( 'crtool:chdir-down', () => {
//   process.chdir( 'teachers_digital_platform/crtool' );
// } );

// gulp.task( 'crtool:build', () => {
//   return run( 'npm run build' ).exec();
// } );

// gulp.task( 'crtool:chdir-up', () => {
//   process.chdir( '../..' );
// } );

// gulp.task( 'crtool',
//   gulp.series( 
//       'crtool:chdir-down',
//       'crtool:build',
//       'crtool:chdir-up',
//       'test'
//     )
// );
