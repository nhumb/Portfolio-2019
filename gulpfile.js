'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Compile 
gulp.task('build', function () { 
    gulp.src('src/main.scss') 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(autoprefixer({
        browserlist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css')); 
});
