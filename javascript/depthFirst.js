
const depthFirst = root => {
    let stack = [root];
    let current;

    while (stack.length > 0) {
        current = stack.pop()
        // comparision or callback here

        if (current.children) {
            stack.concat(n.children)
        }
    }
}