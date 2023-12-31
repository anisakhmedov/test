// npm i gulp gulp-autoprefixer gulp-clean-css gulp-sass node-sass sass
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer') // prefixex
const cleanCSS = require('gulp-clean-css') // minify css
const sass = require('gulp-sass')(require('sass')) // scss sass

// sources
const paths = {
    styles: {
        src: {
            custom: './static/scss/**/*.scss',
        },
        dist: './static/css'
    }
}

sass.compiler = require('node-sass');

// styles custom optimize
function CustomStyles() {
    return gulp.src(paths.styles.src.custom)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['> 1%'], cascade: false }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest(paths.styles.dist))
}

// watchin' onchange
function watch() {
    gulp.watch(paths.styles.src.custom, CustomStyles)
}

gulp.task('styles', CustomStyles)
gulp.task('watch', watch)

gulp.task('build', gulp.parallel(CustomStyles))
gulp.task('default', gulp.series('build', 'watch'))
