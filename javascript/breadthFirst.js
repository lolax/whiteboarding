import Queue from './queue';

const breadthFirst = (root, target) => {
    let q = new Queue;
    q.enqueue(root)
    while (q.length > 0) {
        let item = q.dequeue()
        if (item === target) {
            return item
        } else {
            q.enqueue(root.child)
        }
    }
}