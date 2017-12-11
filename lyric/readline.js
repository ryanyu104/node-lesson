const fs = require('fs')
const path = require('path')
const readline=require('readline')
const timeRE = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/
const lyricFile=path.join(__dirname, './test.lrc')
const streamReader=fs.createReadStream(lyricFile)
const rl=readline.createInterface({input:streamReader})
const begin = new Date().getTime()


rl.on('line', (line) => {
  task(line, begin)
})

function task(line,beginTime){
      let matches = timeRE.exec(line)
        if (matches) {
            let miniute = parseFloat(matches[1])
            let second = parseFloat(matches[2])
            let millisecond = parseFloat(matches[3])
            let lyric = matches[4]
            let offset = new Date().getTime() - beginTime
            setTimeout(() => {
                console.log(lyric)
            }, miniute * 60 * 1000 + second * 1000 + millisecond - offset)
        }
}
