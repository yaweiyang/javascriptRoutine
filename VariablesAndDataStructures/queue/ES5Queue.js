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

/*let que = new MyQueue();
console.log(que.isEmpty());
que.enqueue('yangyawei');
console.log(que.front());
que.enqueue('yangmeili');
que.print();
console.log(que.dequeue());
que.print();*/

/**
 * 优先队列  最小优先
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
            let added = false;
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

function hotPotato (nameList, num) {
    if (null == nameList || 0 == nameList.length)
        return;
    let members = new MyQueue();

    for (let i = 0; i < nameList.length; ++i) {
        members.enqueue(nameList[i]);
    }

    let eliminated = '';

    while (members.size() > 1) {
        for (let i = 0; i < num; ++i) {
            members.enqueue(members.dequeue());
        }
        eliminated = members.dequeue();
        console.log(eliminated+' 被淘汰');
    }
    return members.dequeue();
}

let names = ['yangyawei','zhangzheng','liuzhu','xiachunguang','yuhuijie','yankuiliang','konglingkang','maxudong'];
let winner = hotPotato(names, 3);
console.log('最后的胜利者是：' + winner);