class Stack {
    constructor () {
        this.items = [];
    }

    /**
     * 向栈顶添加元素
     * @param element
     */
    push (element) {
        this.items.push(element);
    }

    /**
     * 移除栈顶元素
     * @param element
     * @returns {*}
     */
    pop (element) {
        return this.items.pop();
    }

    /**
     * 返回栈顶元素
     * @returns {*}
     */
    peek () {
        return this.items[this.items.length-1];
    }

    /**
     * 判断栈中是否有元素
     * @returns {boolean}
     */
    isEmpty () {
        return this.items.length === 0;
    }

    /**
     * 返回栈中有多少元素
     * @returns {number}
     */
    size () {
        return this.items.length;
    }
    clear () {
        this.items = [];
    }
    print () {
        console.log(this.items.toString());
    }
}

let stack = new Stack();
console.log(stack.isEmpty());

// 模块化导出方式
module.exports = {
    Stack: Stack
};