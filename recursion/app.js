// const fs = require('fs')
// const path = require('path')

// const targetFile = path.join(__dirname, process.argv[2] || './')



// function loadTree(targetFile, depth) {
//     let prefix = new Array(depth + 1).join('│ ');
//     let filesInfo = fs.readdirSync(targetFile)
//     let dirs = []
//     let files = []

//     filesInfo.forEach((item) => {
//         let stats = fs.statSync(path.join(targetFile, item))
//         if (stats.isFile()) {
//             files.push(item)
//         } else {
//             dirs.push(item)
//         }
//     })

//     dirs.forEach((dir) => {
//         console.log(`${prefix}├─ ${dir}`)
//         loadTree(path.join(targetFile, dir), depth + 1)
//     })

//     let count = files.length - 1
//     files.forEach((file) => {
//         let mark = count-- ? '├─' : '└─'
//         console.log(`${prefix}${mark}─${file}`)
//     })
// }

// loadTree(targetFile, 0)

var name = 'llp'

function static () {
console.log(name)
}

(function(){
var name = 'kjj'
static()
})()
