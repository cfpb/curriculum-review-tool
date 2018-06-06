'use strict';

const gulp = require( 'gulp' );
const run = require( 'gulp-run' );

module.exports = {
    test: () => {
        return run('npm run test').exec();
    }
}

// gulp.task( 'test:chdir-down', () => {
//   process.chdir( 'teachers_digital_platform/crtool');
// } );

// gulp.task( 'crtool:test', () => {
//   return run( 'npm run test').exec();
// } );

// gulp.task( 'test:chdir-up', () => {
//   process.chdir( '../..' );
// } );

// gulp.task( 'test',
//   gulp.series(
//       'test:chdir-down',
//       'crtool:test',
//       'test:chdir-up'
//     )
// );
