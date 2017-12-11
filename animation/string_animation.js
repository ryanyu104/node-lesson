let arr = [];

arr[arr.length] = `
(*▔＾▔*)
`

arr[arr.length] = `
↖(▔＾▔)↗
`

arr[arr.length] = `
↖(▔＾▔)↗
`
arr[arr.length] = `
ㄟ(▔,▔)ㄏ
`
let index = 0
let fps=200

let render = () => {
    process.stdout.write('\033[0f');
    process.stdout.write('\033[2J');

    if (index === arr.length) {
        index = 0
    }
    console.log(arr[index++])
    setTimeout(render, fps)
}

setTimeout(render, fps)
