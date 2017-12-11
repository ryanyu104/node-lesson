const net = require('net')
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

rl.question('设置你在聊天室的名字? \n', (name) => {
    name = name.trim()
    if (!name) {
        throw new Error('请输入你的名字')
    }
    let server = net.connect({ port: 3000, host: '127.0.0.1' }, () => {
        console.log(`欢迎${name}来到聊天室`)
    })
    server.on('data', (chunk) => {
        try {
            let signalObj = JSON.parse(chunk.toString().trim());
            let { type } = signalObj
            switch (type) {
                case 'broadcast':
                    console.log(`${signalObj.from}>`)
                    console.log(`${signalObj.message}`);
                    break;
                default:
                    console.log('未知的类型')
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    })

    rl.setPrompt(`${name}>`)
    rl.prompt()

    rl.on('line', (line) => {
        var send = {
            type: 'broadcast',
            from: name,
            message: line.toString().trim()
        }
        server.write(JSON.stringify(send));

        rl.prompt();

    }).on('close', () => {
        // console.log('Have a great day!');
        // process.exit(0);
    });

})
