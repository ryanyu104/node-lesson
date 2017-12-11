const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')
const errTips = require('./module/err')

let target

let template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>{{{style}}}</style>
</head>
<body>
   {{{content}}}
</body>
</html>`

try {
    target = path.join(__dirname, process.argv[2])
} catch (err) {
    console.log('没有要执行的文件')
}

let htmlFile = target.replace(path.extname(target), '.html')
var htmlName = path.basename(htmlFile)

browserSync({
    server: path.dirname(target),
    index: htmlName
})


fs.watchFile(target, { interval: 200 }, (cur, pre) => {
    fs.readFile(target, 'utf8', (error, data) => {
        errTips(error)
        let html = marked(data)
        fs.readFile(path.join(__dirname, 'github.css'), 'utf8', (cssErr, css) => {
            errTips(cssErr)
            let temp = template.replace('{{{content}}}', html).replace('{{{style}}}', css)
            fs.writeFile(htmlFile, temp, 'utf-8', (err, data) => {
                errTips(err)
                browserSync.reload(htmlName)
            })
        })
    })
})
