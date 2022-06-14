const {src, dest} = require('gulp')

const fileinclude = require('gulp-file-include')
const size = require('gulp-size')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const media = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const webpCss = require('gulp-webp-css')

// Config
const path = require('../config/path')
const app = require('../config/app')

const scss = () =>{
    return src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(fileinclude())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(media())
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(size({        title: 'main.css:'             }))
        .pipe(rename({  suffix: '.min'      }))
        .pipe(csso())
        .pipe(size({        title: 'main.min.css:'            }))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
    }

module.exports = scss