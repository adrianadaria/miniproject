/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var map = require('gulp-sourcemaps');
var modernizr = require('gulp-modernizr');


// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('build-css',function() {
    return gulp.src('source/scss/**/*.scss')
    .pipe(map.init())
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
    
});

gulp.task('watch', function(){
    gulp.watch('source/scss/**/*.scss',['build-css']);

});