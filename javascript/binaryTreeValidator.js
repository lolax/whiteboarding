const binaryTreeValidator = root => {
    let nodeAndBounds = [{
        node: root,
        lower: Number.NEGATIVE_INFINITY,
        upper: Number.POSITIVE_INFINITY
    }]

    while (nodeAndBounds.length) {
        const { node, lower, upper } =  nodeAndBounds.pop()
        if (node.value <= lower || node.value >= upper) return false
        if (node.left) {
            nodeAndBoundsStack.push({
              node: node.left,
              lowerBound,
              upperBound: node.value,
            });
          }
        if (node.right) {
        nodeAndBoundsStack.push({
            node: node.right,
            lowerBound: node.value,
            upperBound,
        });
        }
    }
    return true
}

// O(n) time & space