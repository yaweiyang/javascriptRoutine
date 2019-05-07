// 导入模块
var module = require('./stackFunc');
let Stack = module.Stack;

/**
 * 十进制转化为二进制
 * @param decNumber
 * @returns {string|string}
 */
function transformBinary (decNumber) {
    let remStack = new Stack();
    let rem = 0;
    let binaryNum = '';
    while (decNumber > 0) {
        rem = decNumber % 2;
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryNum += remStack.pop();
    }
    return binaryNum;
}

console.log(transformBinary(10));