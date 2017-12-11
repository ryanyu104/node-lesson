const net = require('net')
let clients = []

const server = net.createServer((socket) => {
    clients.push(socket)
    console.log(`欢迎${socket.remoteAddress}来到聊天室`)

    function broadcast(clients, singalObj) {
        const { type, message } = singalObj
        const sendInfo = {
            type,
            message,
            from: singalObj.from,
        }
        clients.forEach((client) => {
            client.write(JSON.stringify(sendInfo))
        })
    }


    socket.on('data', (chunk) => {
        try {
            let singalObj = JSON.parse(chunk.toString().trim())
            let { type } = singalObj
            switch (type) {
                case 'broadcast':
                    broadcast(clients, singalObj)
                    break
                    // case 'chatroom1':
                    //     chatroom1(singalObj)
                    //     break
                    // case 'chatroom2':
                    //     chatroom2(singalObj)
                default:
                    socket.write('未知的类型')
                    break
            }
        } catch (err) {
            socket.write(err)
        }
    })

})


const port = 3000

server.listen(port, (err) => {
    if (err) {
        throw err
    }
    console.log(`服务器监听端口${port}`)
})
