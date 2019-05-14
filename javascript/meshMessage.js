const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott']
}
const reconstructPath = (path, sender, recipient) => {
    const shortestPath = []
    let current = recipient
    while (current !== null) {
        shortestPath.push(current)
        current = path[current]
    }
    return shortestPath.reverse()
}

const sendMessage = (network, sender, recipient) => {
    if (!network.hasOwnProperty(sender) || !network.hasOwnProperty(recipient)) throw new Error("Sender & recipient must be in network")
    
    const connections = new Queue()
    connections.enqueue(sender)
    const path = {}
    path[sender] = null

    while (connections.size > 0) {
        let node = connections.dequeue()
        if (node === recipient) return reconstructPath(path, sender, recipient)
        network[node].forEach(neighbor => {
            if (!path.hasOwnProperty(neighbor)) {
                connections.enqueue(neighbor)
                path[neighbor] = node
            }
        })

    }
    return "No path possible"
}