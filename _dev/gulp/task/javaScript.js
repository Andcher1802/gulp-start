const {src, dest} = require('gulp')

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')


// Config
const path = require('../config/path')
const app = require('../config/app')

const js = () =>{
    return src(path.js.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack( app.webpack))
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
    }

module.exports = js