'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var ngTemplate = require('gulp-ng-template');
var minifyHtml = require('gulp-minify-html');
var clean = require('gulp-clean');

var jsFilesorder = [
    './vendor/parse-1.3.4.min.js',
    './vendor/angular.min.js',
    './vendor/angular-route.min.js',
    './vendor/angular-route-segment.min.js',
    './js/**/*.js',
    '!./js/main.js',
    '!./js/fakeApi.js',
    './modules/*/*.js',
    './modules/**/*.js'
];

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function(fileName) {
                    return /app\/(css|js)$/.test(fileName) || /(main\.js|main\.css)$/.test(fileName);
                }
            },
            open: true,
            host: '0.0.0.0',
            fallback: 'index.html'
        }));
});

gulp.task('modules_styl', function () {
    return gulp.src(['./modules/**/*.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('./modules/'));
});

gulp.task('page_styl', function () {
    return gulp.src(['./pages/**/*.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('./pages/'));
});

gulp.task('stylus', function () {
    return gulp.src(['./stylus/main.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('./stylus/'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('concat_css', function() {
    return gulp.src(['./modules/**/*.css', './vendor/**/*.css', './pages/**/*.css', './stylus/main.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('styles', ['stylus', 'modules_styl', 'page_styl'], function() {
    gulp.src(['./modules/**/*.css', './vendor/**/*.css', './pages/**/*.css', './stylus/main.css'])
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
    gulp.src(jsFilesorder)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('clean', function() {
    return gulp.src('../public')
        .pipe(clean({force: true}));
});

gulp.task('templates', function() {
    gulp.src(['./**/*.html', '!*.html', '!node_modules/**/*.html'])
        .pipe(minifyHtml({empty: true, quotes: true}))
        .pipe(ngTemplate({
            moduleName: 'ss.templates',
            standalone: true,
            filePath: 'templates.js'
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('compile', ['styles', 'templates'], function() {
    gulp.run('js');
});

gulp.task('public', ['clean', 'compile'], function() {
    gulp.src('index.html')
        .pipe(gulp.dest('../public'));

    gulp.src(['./js/main.js'])
        .pipe(gulp.dest('../public/js'));

    gulp.src('./fonts/**/*')
        .pipe(gulp.dest('../public/fonts/'));

    gulp.src('css/main.css')
        .pipe(gulp.dest('../public/css'));
});

gulp.task('default', function () {
    gulp.run(['webserver', 'styles']);

    gulp.watch("**/*.styl", ['styles']);

    gulp.watch("**/*.html", ['templates']);

    gulp.watch(["modules/**/*.js", "js/app.js", "js/templates.js"], ['js']);
});