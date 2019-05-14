const graphColoring = (graph, colors) => {
    graph.forEach(node => {
        if (node.neighbors.has(node)) throw new Error('Cyclic graphs not permitted')
        const illegalColors = new Set()

        node.neighbors.forEach(neighbor => {
            if (neighbor.color !== null) illegalColors.add(neighbor.color)
        })

        for (let i = 0; i < colors.length; i++) {
            if (!illegalColors.has(colors[i])){
                node.color = color
                break
            }
        }
    })
}

class GraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
}
  
const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];
  