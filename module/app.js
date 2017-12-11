
function $require(id) {
    const fs = require('fs')
    const path = require('path')
    const filename = path.join(__dirname, id)
    const dirname = path.dirname(filename)
    let code = fs.readFileSync(filename, 'utf8');
    let module = { id: filename, exports: {} };
    let exports = module.exports;

    code = `
  (function($require, module, exports, __dirname, __filename) {
    ${code}
  })($require, module, exports, dirname, filename);`;
    eval(code);
    return module.exports;
}


var m1 = $require('./module1.js');

m1.a.say();
m2.a.say();
