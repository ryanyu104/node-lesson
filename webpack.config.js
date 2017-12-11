let path = require('path')
let JS_PATH = path.join(__dirname)
let webpack = require('webpack')

module.exports = {
  context: __dirname,
  resolve: {
    root: JS_PATH,
}
