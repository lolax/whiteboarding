class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class Stack {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value, null)
        } else {
            let prevHead = this.head
            this.head = new LinkedListNode(value, prevHead)
            if (!this.tail) {
                this.tail = prevHead
            }
        }
    }

    pop() {
        let prevHead = this.head
        this.head = this.head.next
        return prevHead
    }
}