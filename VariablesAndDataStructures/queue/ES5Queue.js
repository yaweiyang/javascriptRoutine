// 队列 先进先出
function MyQueue () {

    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    };

    this.dequeue = function () {
      return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };
}

let que = new MyQueue();
console.log(que.isEmpty());
que.enqueue('yangyawei');
console.log(que.front());