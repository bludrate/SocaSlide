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
    '!./js/fakeApi.js',
    './modules/*/*.js',
    './modules/**/*.js'
];

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            host: '0.0.0.0',
            filter: function(fileName) {
                if (fileName.match(/main\.(css|js)/)) { // exclude all source maps from livereload
                    return true;
                } else {
                    return false;
                }
            }
        }));
});

gulp.task('stylus', function () {
    return gulp.src('./modules/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./modules/'));
});

gulp.task('styles', ['stylus'], function() {
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

    gulp.watch("**/*.styl", function(){
        gulp.run('styles');
    });

    gulp.watch(["modules/**/*.js", "js/app.js", 'js/services/*.js'], function() {
        gulp.run('js');
    });
});