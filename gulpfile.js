var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  sass = require('gulp-sass'),
  path = require('path');

gulp.task('sass', function () {
  gulp.src('./client/sass/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./client/sass/*.scss', ['sass']);
  gulp.watch('./client/**/*.js', ['browserify']);
});

gulp.task('browserify', function () {
  var b = browserify();
  b.transform(reactify);
  b.add('./client/client.js');
  return b.bundle()
   .pipe(source('./client/client.js'))
   .pipe(gulp.dest('./public/js'));
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'browserify',
  'watch'
]);
