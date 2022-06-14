const {src, dest} = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// Config
const path = require('../config/path')

// Task
const font = () =>{
    return src(path.font.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'Font',
                message: error.message
            }))
        }))
        .pipe(dest(path.font.dest))
    }

module.exports = font
