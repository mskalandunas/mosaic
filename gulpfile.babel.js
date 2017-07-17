'use strict';

import gulp from 'gulp';
import cssNano from 'gulp-cssnano';
import concatCss from 'gulp-concat-css';
import webpack from 'webpack-stream';
import htmlmin from 'gulp-htmlmin';
import rmHtmlComments from 'gulp-remove-html-comments';

const staticFiles = [
  'src/**/*.ico',
  'src/**/*.jpg',
  'src/**/*.mp3',
  'src/**/*.wav',
  'src/**/*.svg',
  'src/**/*.png',
  'src/**/*.pdf'
];

const styleSheets = [
  'src/css/normalize.css',
  'src/css/skeleton.css',
  'src/css/style.css',
  'src/css/player.css'
];

gulp.task('static:dev', () => {
  gulp.src(staticFiles)
  .pipe(gulp.dest(__dirname + '/public/'));
});

gulp.task('webpack:dev', () => gulp.src('src/js/app.js').pipe(webpack({output: {filename: 'bundle.js'}})).pipe(gulp.dest('public/js/')));
gulp.task('css:dev', () => gulp.src(styleSheets).pipe(concatCss('main.css')).pipe(cssNano()).pipe(gulp.dest(__dirname + '/public/css')));
gulp.task('html:dev', () => gulp.src('src/*.html').pipe(htmlmin({collapseWhitespace: true})).pipe(rmHtmlComments()).pipe(gulp.dest('public')));

gulp.task('watch:build', () => {
  gulp.watch(staticFiles, ['static:dev']);
  gulp.watch(styleSheets, ['css:dev']);
  gulp.watch('src/**/*.js', ['webpack:dev']);
});

gulp.task('build', ['static:dev', 'webpack:dev', 'css:dev', 'html:dev']);
gulp.task('default', ['build', 'watch:build']);
