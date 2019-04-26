class Queue {
    constructor() {
        this.size = 0;
        this.storage = [];
    }
    enqueue(item) {
        this.storage.unshift(item);
        this.size += 1;
    }
    
    dequeue() {
        if (this.size > 0) {
            this.size -= 1;
            return this.storage.pop()
        } else {
            return null;
        }
    }
}

export default Queue