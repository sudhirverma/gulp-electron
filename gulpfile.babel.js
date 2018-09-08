var gulp = require('gulp'),
    run = require('gulp-run');

gulp.task('run', function(){
  return run('electron .').exec();
});

gulp.task('default', ['run'])
