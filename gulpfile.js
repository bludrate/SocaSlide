'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

var jsFilesorder = [
    './vendor/angular.min.js',
    './vendor/angular-animate.min.js',
    './vendor/angular-aria.min.js',
    './js/**/*.js',
    '!./js/main.js',
    './modules/**/*.js'
];

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true,
            host: '0.0.0.0'
        }));
});

gulp.task('stylus', function () {
    gulp.src('./modules/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./modules/'));

    gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));

    gulp.src(['./modules/**/*.css', './vendor/**/*.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
    gulp.src(jsFilesorder)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('default', function () {
    gulp.run(['webserver', 'stylus']);

    gulp.watch("./**/*.styl", function(){
        gulp.run('stylus');
    });

    gulp.watch("./modules/**/*.js", function() {
        gulp.run('js');
    });
});