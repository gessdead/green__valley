'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const plumberNotifier = require('gulp-plumber-notifier');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cleanss = require('gulp-cleancss');
const sourcemaps = require('gulp-sourcemaps');
const htmlhint = require('gulp-htmlhint');


//проверка html кода
gulp.task('htmlhint', function() {
  return gulp.src('./html/*.html')
    .pipe(plumberNotifier())
    .pipe(htmlhint({
      "tag-pair": true,
      }))
    .pipe(htmlhint.reporter());
});
// Компиляция LESS
gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(plumberNotifier())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    .pipe(sourcemaps.write())
    .pipe(cleanss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

// Вотчер 
gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['less']);
    });