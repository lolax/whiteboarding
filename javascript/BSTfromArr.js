class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const build_bst = (array, low = 0, high = null) => {

    if (high == null) {
        high = array.length - 1
    }

    let pivot = Math.ceil((low + high) / 2)

    while (high > low) {
        let node = new BinaryTreeNode(array[pivot])
        node.left = build_bst(array, low, pivot - 1)
        node.right = build_bst(array, pivot + 1,  high)
        return node
    } 
}



console.log(build_bst([1, 2, 3, 4, 5, 6, 7]))