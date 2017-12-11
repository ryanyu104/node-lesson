let fs = require('fs')
let path = require('path')
let fileArr = []

let framesDirPath = fs.readdirSync(path.join(__dirname, './frames'))

framesDirPath.forEach((item) => {
    fileArr[fileArr.length] = fs.readFileSync(path.join(__dirname, './frames', item), 'utf8')
})


let index = 0
let fps = 200

let render = () => {
    process.stdout.write('\033[0f');
    process.stdout.write('\033[2J');

    if (index === fileArr.length) {
        index = 0
    }
    console.log(fileArr[index++])
    setTimeout(render, fps)
}

setTimeout(render, fps)
