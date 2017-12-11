const fs = require('fs')
const path = require('path')
const moment = require('moment')

const targetFile = path.join(__dirname, process.argv[2] || './')

fs.readdir(targetFile, (err, files) => {
    files.forEach((file) => {
        try {
            var stats=fs.statSync(path.join(targetFile, file))
            console.log(`${moment(stats.mtime).format("YYYY/DD/MM, HH:mm") }\t${stats.size}\t${file}`);
        } catch (err) {
            console.log(err)
        }
    })
});
