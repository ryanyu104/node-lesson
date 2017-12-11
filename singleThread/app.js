let fs = require('fs')

console.time('start')

fs.stat('./package.json', (error, status) => {
    if (error) {
        console.log('文件不存在')
        createFile('文件创建成功')
        return false
    }
})

fs.unlink('./package.json', (error) => {
    if (error) {
        console.error(error)
        return false
    }
    createFile('文件删除后创建成功')
})

function createFile(tips) {
    fs.writeFile('./package.json', new Date(), (err) => {
        if (err) {
            console.error(err)
            return false
        }
        console.log(tips)
    })
}
console.timeEnd('start');
