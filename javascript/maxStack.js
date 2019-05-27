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
  

class MaxStack {
    constructor() {
        this.stack = new Stack()
        this.maxes = new Stack()
    }

    push(item) {
        this.stack.push(item)
        if (this.maxes.peek() === null || item >= this.maxes.peek()) this.maxes.push(item)
    }

    pop() {
        const removed = this.stack.pop()
        if (removed === this.maxes.peek()) this.maxes.pop()
        return removed
    }

    getMax() {
        return this.maxes.peek()
    }
}