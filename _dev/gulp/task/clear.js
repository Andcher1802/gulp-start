const del = require('del')


// Config
const path = require('../config/path.js')


const clear = () =>{
    return del(path.root, {
        force: true
    })
}

module.exports = clear