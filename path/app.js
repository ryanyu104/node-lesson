const path=require('path')
const testPath=path.join(__dirname,'./test.js')
const testBasename=path.dirname(testPath)
const testObj=path.parse(testPath)
// console.log(process.env.PATH.split(path.delimiter))
// console.log(path.extname(testPath))
// console.log(testObj)
// console.log(path.format(testObj))
// console.log(path.isAbsolute(testPath))
// console.log(path.join(__dirname,'../module','bin','nrm'))
// console.log(path.normalize('/Users////RyanYu/Desktop/node.js/module/bin/nrm'))
// console.log(path.relative(__dirname,'/Users/RyanYu/Desktop/node.js/module/bin/nrm'))
// console.log(path.sep)
// console.log(path.resolve('/Users','/RyanYu/Desktop'))
console.log(path.win32)