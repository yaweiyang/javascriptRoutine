/**
 * 队列 先进先出
 * @constructor
 */
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

    this.print = function () {
        console.log(items.toString());
    };
}

let que = new MyQueue();
console.log(que.isEmpty());
que.enqueue('yangyawei');
console.log(que.front());
que.enqueue('yangmeili');
que.print();
console.log(que.dequeue());
que.print();

/**
 * 优先队列
 * @constructor
 */
function MyPriorityQueue() {

    let items = [];

    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (let i = 0; i < items.length; ++i) {
                if (queueElement.priority > items[i].priority) {
                    items.splice(i, 1, queueElement);
                    added = true;
                    break;
                }
             }
             if (!added) {
                items.push(queueElement);
             }
        }
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return 0 == items.length;
    }

    this.clear = function () {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}