'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  Server = require('karma').Server,
  jasmine = require('gulp-jasmine'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  assign = require('lodash.assign'),
  watchify = require('watchify'),
  clean = require('gulp-clean');

//predefined tasks
gulp.task('default', ['watch']); //watches for changes in html, css, or js and updates
gulp.task('dev', ['build-html', 'build-css', 'images', 'browserify']); //one-time build for html, css, and js
gulp.task('fresh', ['nuke', 'build-html', 'build-css', 'images', 'browserify']); //nukes build/ and starts over

//nuke build/
gulp.task('nuke', function() {
  return gulp.src('build/', {read:false})
    .pipe(clean());
});

//lint js
gulp.task('jshint', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//collect css and push to build/
gulp.task('build-css', function() {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('images', function() {
  return gulp.src('app/images/*.*')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/images/'));
});

//collect html and push to build/
gulp.task('build-html', function() {
  return gulp.src('app/**/*.html')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'));
});

//bundle js code and push to build
gulp.task('browserify', function() {
  return browserify('./app/js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/'));
});

//testing js code
gulp.task('test', function(done) {
  new Server({
    configFile: require('path').resolve('karma.conf.js'),
    singleRun: true
  }, done).start();
});

//watch for js, css, or html changes and push to build
gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['jshint']);
  gulp.watch('app/css/**/*.scss', ['build-css']);
  gulp.watch('app/js/**/*.js', ['browserify']);
  gulp.watch('app/**/*.html', ['build-html']);
});
