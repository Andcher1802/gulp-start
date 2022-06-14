const {src, dest} = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const imagemin = require('gulp-imagemin') 
const newer = require('gulp-newer') 
const webp = require('gulp-webp')


// Config
const path = require('../config/path')
const app = require('../config/app')

const img = () =>{
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'Image',
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(app.imagemin))
        .pipe(dest(path.img.dest))
    }

module.exports = img