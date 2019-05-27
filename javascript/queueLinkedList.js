class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(node) {
        let prevTail = this.tail
        this.tail = new LinkedListNode(node, prevTail)
    }

    dequeue() {
        let prevHead = this.head
        this.head = this.head.next
        return prevHead
    }
}