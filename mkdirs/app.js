const fs = require('fs')
const path = require('path')
const mkdirs=require('./module/mkdirs')

mkdirs(path.join(__dirname, 'f1/f2/f3'), (err) => { console.log(err)})

// mkdirs('demo1')
