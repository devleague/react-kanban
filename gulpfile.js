'use strict';

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const nodemon     = require('gulp-nodemon');
const browserSync = require('browser-sync');
const reload      = browserSync.reload;
const pkg         = require('./package.json');
const childProcess = require('child_process');

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script : pkg.main,
    nodeArgs : ['--debug']
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
})

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy : 'http://localhost:3000',
    files : ['public/**/*.*'],
    browser : 'google chrome',
    port : 7000
  });
});

gulp.task('redis-server', function() {
  childProcess.exec('redis-server', function(err, stdout, stderr) {
    console.log(stdout);
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({
        errLogToConsole : true,
        sourceComments : true,
        includePaths : ['bower_components/foundation/scss']
      }).on('error', sass.logError))
      .pipe(gulp.dest('./public/css'))
      .pipe(reload({ stream : true }));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*.*').on('change', reload);
});

gulp.task('default', ['redis-server','watch', 'sass', 'browser-sync']);