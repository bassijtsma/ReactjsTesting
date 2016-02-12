"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // local dev server
var open = require('gulp-open'); // opens URL in the browser

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

// Start local dev server
gulp.task('connect', function() {
  connect.server({
    root: [ 'dist' ],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

// Open file in the server. ['connect'] as dependency
gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}))
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// Watch the html paths, and whenever changes occur run the html task
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html'])
})

// default tasks when the 'gulp' command is run
gulp.task('default', ['html', 'open', 'watch']);
