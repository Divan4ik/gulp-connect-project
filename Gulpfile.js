"use strict";

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

var scratch = {
	less: [
      'less/normalize.less',
      'less/vars.less',
      'less/fonts.less',
    ],
	html: './index.html',
  js: [
      'js/**/*.js',
    ],
};

gulp.task('less', function() {
  gulp.src(scratch.less)
    .pipe( concat('app.css') )
    .pipe( less() )
    .pipe( gulp.dest('css/') )
    .pipe( connect.reload() );
});

gulp.task('connect', function(){
	connect.server({
    port: 8000,
    livereload: true
  });
});

gulp.task('html', function(){
	gulp.src(scratch.html)
		.pipe(connect.reload());
});

gulp.task('js', function(){
  gulp.src(scratch.js)
    .pipe( concat('app.js') )
    .pipe( gulp.dest('js/') )
    .pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(scratch.less, ['less']);
  gulp.watch(scratch.html, ['html']);
	gulp.watch(scratch.js, ['js']);
})

gulp.task('default', ['connect', 'watch', 'html', 'js', 'less']);