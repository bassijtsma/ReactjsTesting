"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // local dev server
var open = require('gulp-open'); // opens URL in the browser
var browserify = require('browserify'); // bundles the JS
var babel = require("babelify"); // transforms JSX to JS
var source = require('vinyl-source-stream'); // text streams with gulp
var concat = require('gulp-concat') // concat the css files
var eslint = require('gulp-eslint') // lint JSS and JSX files

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      './src/**/*.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ],
    mainJs: './src/js/main.js',
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

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
})

// task to bundle the javascript, transform jsx files to js with babel,
// and bind to console to spit out errors that occur. bundle wil lbe called
// bundle.js
gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(babel)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.paths.dist + '/js'))
    .pipe(connect.reload());
})

gulp.task('lint'), function() {
  return gulp(config.paths.js)
    .pipe(eslint({config: 'eslint.config.json'}))
    .pipe(eslint.format());
}


// Watch the html paths, and whenever changes occur run the html task
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.mainJs, ['js', 'lint'])
  gulp.watch(config.paths.css, ['css'])
})

// default tasks when the 'gulp' command is run
gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
