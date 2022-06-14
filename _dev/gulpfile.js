const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync')

// Tasks -->
    const clear = require('./gulp/task/clear')
    const font = require('./gulp/task/font')
    const html = require('./gulp/task/html')
    const img = require('./gulp/task/img')
    const js = require('./gulp/task/javaScript')
    const scss = require('./gulp/task/scss')
// Configs -->
    const path = require('./gulp/config/path')
    const app = require('./gulp/config/app')

// watch
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload)
    watch(path.scss.watch, scss).on('all', browserSync.reload)
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.font.watch, font).on('all', browserSync.reload)
}

// server
const server = () =>{
    browserSync.init({
        server:{
            baseDir: path.root
        }
    })
}


exports.del = clear
exports.font = font
exports.watch = watcher
// exports.css = css

const build =
    series( clear,
        parallel(html, scss, js, img, font))

const dev = series(
    build,
        parallel( watcher, server))



exports.default = app.isProd ? build : dev