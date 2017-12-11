let http = require('http')
let count = 0
let server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write(`你是第${count++}个用户`)
    res.end()
});
server.listen(3000, (err) => {
    if (err) throw err
    console.log('已经监听3000端口')
})
