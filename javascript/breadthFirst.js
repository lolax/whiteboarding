import Queue from './queue';

const breadthFirst = root => {
    let q = new Queue;
    q.enqueue(root)
    while (q.length > 0) {
        let item = q.dequeue()
        if (item.children.length > 0) {
            item.children.forEach(child => q.enqueue(child))
        }
    }
}

// or without Queue
const breadth = root => {
    let queue = [root]
    while (queue.length > 0) {
        let next = queue.shift()
        if (item.children.length > 0) {
            item.children.forEach(child => q.push(child))
        }
    }
}