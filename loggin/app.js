let question = '请输入用户名'

let userInfo = {
    'admin': '123',
    'admin2': '456'
}
let userName = ''
let isLoggin = false
process.stdout.write('请输入用户名:\n')

process.stdin.on('data', (input) => {
    let inputInfo = input.toString().trim()
    if(isLoggin){
      process.stdout.write('已经登陆')
      return
    }
    if (!userName) {
       let  isUserName=Object.keys(userInfo).includes(inputInfo)
        if (isUserName ) {
            userName = inputInfo
            process.stdout.write('请输入密码:')
        } else {
            inputInfo = ''
            process.stdout.write('用户名不存在\n')
            process.stdout.write('请输入用户名:')
        }
    } else {
        if (userInfo[userName] === inputInfo) {
            isLoggin = true
            process.stdout.write('登陆成功')
        } else {
            process.stdout.write('密码错误\n')
            process.stdout.write('请输入密码:')
        }
    }
})
