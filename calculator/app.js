let args = process.argv.slice(2)

let p1 = args[0]
let operator = args[1]
let p2 = args[2]
let result



switch (operator) {
    case '+':
        result = parseFloat(p1) + parseFloat(p2)
        break;
    case '-':
        result = parseFloat(p1) - parseFloat(p2)
        break;

    case '*':
        result = parseFloat(p1) * parseFloat(p2)
        break;

    case '/':
        result = parseFloat(p1) / parseFloat(p2)
        break;
    default:
        throw new Error('参数不合法');
}
console.log(result)
