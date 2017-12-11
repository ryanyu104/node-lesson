let fs = require('fs')
let path = require('path')
let timeRE = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/


fs.readFile(path.join(__dirname, './test.lrc'), (err, data) => {
    if (err) throw err
    const lyricStr = data.toString('utf-8')
    const lines = lyricStr.split('\n')
    const begin = new Date().getTime()
    lines.forEach((line) => {
        let matches = timeRE.exec(line)
        if (matches) {
            let miniute = parseFloat(matches[1])
            let second = parseFloat(matches[2])
            let millisecond = parseFloat(matches[3])
            let lyric = matches[4]
            let offset = new Date().getTime() - begin
            setTimeout(() => {
                console.log(lyric)
            }, miniute * 60 * 1000 + second * 1000 + millisecond - offset)
        }
    })
});
