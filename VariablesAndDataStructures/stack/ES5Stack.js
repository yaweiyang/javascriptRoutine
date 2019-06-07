// 栈 后进先出
function MyStack () {

    var items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
      return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString());
    };
}

// 十进制转化为二进制

function tranfromFunc (num) {
    let remStack = new MyStack();
    let remember;
    let binaryString = '';
    while (num > 0) {
        remember = Math.floor(num % 2);
        remStack.push(remember);
        num = Math.floor(num / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(tranfromFunc(5)) ;