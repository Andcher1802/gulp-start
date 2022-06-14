const pathSrc = './src/'
const pathDest = '../assets'

module.exports = {
    root: pathDest,

    html:{
        src: pathSrc + 'html/pages/*.html',
        watch: pathSrc + 'html/**/*.html',
        dest: pathDest
    },

    css:{
        src: pathSrc + 'css/*.css',
        watch: pathSrc + 'css/**/*.css',
        dest: pathDest + '/css'
    },

    scss:{
        src: pathSrc + 'sass/*.{scss,sass}',
        watch: pathSrc + 'sass/**/*.{scss,sass}',
        dest: pathDest + '/css'
    },

    js:{
        src: pathSrc + 'js/*.js',
        watch: pathSrc + 'js/**/*.js',
        dest: pathDest + '/script'
    },

    img:{
        src: pathSrc + 'img/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + 'img/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/img'
    },
    font:{
        src: pathSrc + 'font/**/*.*',
        watch: pathSrc + 'font/**/*.*',
        dest: pathDest + '/font'
    }
}