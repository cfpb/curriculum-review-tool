'use strict';

/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.
  To add a new task, simply add a new task file the gulp/tasks directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

// var requireDir = require( 'require-dir' );

// Require all tasks in gulp/tasks, including subfolders
// requireDir( './gulp/tasks', { recurse: true } );

const gulp = require( 'gulp' );
const styles = require( './gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const copy = require('./gulp/tasks/copy');
const crtool = require('./gulp/tasks/crtool');
const test = require('./gulp/tasks/test');
const lint = require('./gulp/tasks/lint');

gulp.task( 'styles', styles.stylesModern );

gulp.task( 'scripts', scripts.scriptsModern );

gulp.task( 'copy', copy.copyIcons );

gulp.task( 'lint', 
    gulp.series(        
        lint.build,
        lint.tests,
        lint.scripts,
        lint.styles
    )
);

gulp.task( 'test',
    gulp.series(
        crtool.chdirDown,
        test.test,
        crtool.chdirUp
    )
);

gulp.task( 'crtool',
  gulp.series( 
      crtool.chdirDown,
      crtool.build,
      crtool.chdirUp,
      'test'
    )
);

gulp.task( 'build',
  gulp.series(
      'styles',
      'scripts',
      'copy',
      'crtool'
    )
);

gulp.task( 'default',
    gulp.series(    
        'lint',
        'build'
    )
);
