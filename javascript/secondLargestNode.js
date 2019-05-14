const findLargest = root => {
    let current = root
    while (current) {
        if (!current.right) return current.value
        current = current.right
    }
}

const findSecondLargest = root => {
    if (!root && (!root.left || !root.right)) {
        throw new Error('tree must have at least two nodes')
    }
    let cur = root
    while (cur) {
        if (cur.left && !cur.right) return findLargest(cur.left)
        if (cur.right && !cur.right.left && !cur.right.right) return cur.value
        current = current.right
    }
}

// Two cases for second largest node:
// 1. The largest node has a left subtree.
// 2. The largest node does not have a left subtree.
