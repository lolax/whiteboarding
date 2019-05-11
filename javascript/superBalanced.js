const superBalanced = root => {
    let stack = [root]
    let branchHeight = 0
    let heights = new Set()
    while (stack.length) {
        let node = stack.pop()
        if (!node.left && !node.right) {
            if (!heights.has(branchHeight))
            heights.add(branchHeight)
            branchHeight = 0
            if (heights.size > 2 || (heights.size === 2 && Math.abs(heights.values()[0] - heights.values()[1]) > 1)) return false
        }
        if (node.left || node.right) branchHeight += 1
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return true
} 