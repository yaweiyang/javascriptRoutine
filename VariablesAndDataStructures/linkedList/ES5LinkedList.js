function MyLinkedList () {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    /**
     * 链表末尾增加元素
     * @param element
     */
    this.append = function (element) {
        let node = new Node(element);
        if (null === head) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length ++;
    };

    /**
     * 将元素插入到链表的指定位置
     * @param positon
     * @param element
     */
    this.insert = function (positon, element) {

    };

    /**
     * 移除指定位置的链表元素
     * @param positon
     */
    this.removeAt = function (positon) {

    };

    /**
     * 移除链表中的某元素
     * @param element
     */
    this.remove = function (element) {

    };

    /**
     * 查找某元素在链表中的位置
     * @param element
     */
    this.indexOf = function (element) {

    };

    this.isEmpty = function () {

    };

    this.size = function () {

    };

    this.toString = function () {

    };

    this.print = function () {

    };
}