const {src, dest, watch,parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean =require('gulp-clean');


function styles() {
    return src([     
        'app/scss/main.scss'
    ])
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())   
    }

function watching() {
    watch(['app/scss/*'], styles) 
    watch(['app/*.html']).on('change', browserSync.reload)
}

function browsersync(){
    browserSync.init({
        server:{
            baseDir: "app/"
        }
    })
}

function building(){
    return src([
        'app/css/style.min.css',
        'app/**/*.html',
        'app/images/*',
        'app/fonts/*'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function cleanDist (){
    return src('dist')
    .pipe(clean())

}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, browsersync, watching);
