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
  return gulp.src('./src/html/*.html')
    .pipe(plumberNotifier())
    .pipe(htmlhint({
      "tag-pair": true,
      }))
    .pipe(htmlhint.reporter());
});
// Компиляция LESS
gulp.task('less', function () {
  return gulp.src('./src/less/style.less')
    .pipe(plumberNotifier())
    //.pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    //.pipe(sourcemaps.write())
    //.pipe(cleanss())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./src/css'));
});

//собиратель в билд
gulp.task('bild', function(){
  gulp.src('./src/css/*.css')
    .pipe(cleanss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./bild/css'));
  gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./bild/html'));
  gulp.src('./src/imgs/**/*.*')
    .pipe(gulp.dest('./bild/imgs'));
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./bild/js'));
  gulp.src('./src/svg/*.svg')
    .pipe(gulp.dest('./bild/svg'));
  });

// Вотчер 
gulp.task('watch', function() {
    gulp.watch('/src/less/**/*.less', ['less']);
    });