const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports ={
    isProd: isProd,
    isDev: isDev,

// webpack
    webpack:{   mode: isProd ? 'production' : 'development'     },

// images
    imagemin:{  verbose: isProd   },
    
// Html
    htmlmin:{     collapseWhitespace: true        }
}