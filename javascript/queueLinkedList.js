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

    enqueue(value) {
        if (!this.tail) {
            this.tail = new LinkedListNode(value, null)
        } else {
            let prevTail = this.tail
            this.tail = new LinkedListNode(value, null)
            prevTail.next = this.tail
            if (!this.head) {
                this.head = prevTail
            }
        }
    }

    dequeue() {
        let prevHead = this.head
        this.head = this.head.next
        return prevHead
    }
}