const fs = require('fs')
const path = require('path')

function mkdirs(pathname, callback) {
    const rootpath = path.dirname(module.parent.filename)
    pathname = path.isAbsolute(pathname) ? pathname : path.join(rootpath, pathname)
    let relativePath = path.relative(rootpath, pathname)
    let folders = relativePath.split(path.sep)
   try{
    let prefix=''
    folders.forEach((item) => {
        try{
           fs.statSync(path.join(rootpath,prefix, item))
        }catch(error){
          fs.mkdirSync(path.join(rootpath,prefix, item))
        }
        prefix = path.join(prefix, item)
    })
     callback && callback(null)
   }catch(err){
      callback && callback(err)
   }
}

module.exports = mkdirs
