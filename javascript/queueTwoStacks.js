class Stack {
    constructor() {
        this.storage = []
    }
  
    push(item) {
        this.storage.push(item)
    }
  
    pop() {
        return !this.storage.length ? null : this.storage.pop()
    }
  
    peek() {
        return !this.storage.length ? null : this.storage[this.storage.length - 1]
    }
}

class Queue {
    constructor() {
        this.inbox = new Stack()
        this.outbox = new Stack()
    }

    enqueue(item) {
        this.inbox.push(item)
    }

    dequeue() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                this.outbox.push(this.inbox.pop())
            }
        }
        return this.outbox.pop()
    }
}