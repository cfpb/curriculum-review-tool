'use strict';

// const gulp = require( 'gulp' );
// const styles = require( './styles');
// const scripts = require('./scripts');
// const copy = require('./copy');
// const crtool = require('./crtool');
// const test = require('./test');
// const lint = require('./lint');

// gulp.task( 'styles', styles.stylesModern );

// gulp.task( 'scripts', scripts.scriptsModern );

// gulp.task( 'copy', copy.copyIcons );

// gulp.task( 'lint', 
//     gulp.series(        
//         lint.build,
//         lint.tests,
//         lint.scripts,
//         lint.styles
//     )
// );

// gulp.task( 'test',
//     gulp.series(
//         crtool.chdirDown,
//         test.test,
//         crtool.chdirUp
//     )
// );

// gulp.task( 'crtool',
//   gulp.series( 
//       crtool.chdirDown,
//       crtool.build,
//       crtool.chdirUp,
//       'test'
//     )
// );

// gulp.task( 'build',
//   gulp.series(
//       'styles',
//       'scripts',
//       'copy',
//       'crtool'
//     )
// );
