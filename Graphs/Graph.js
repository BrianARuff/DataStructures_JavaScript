class Vertex {
    constructor(name) {
        this.name = name
        this.edges = [];
    }
    print() {
        console.log(this);
    }
}

class Graph {
    constructor(name) {
        this.name = name
        this.vertices = [];
    }
    add_vertex(name) {
        this.vertices.push(new Vertex(name));
    }
    add_edge(vert_name, edge) {
        this.vertices.forEach(v => {
            if(v.name === vert_name) {
                return v.edges.push(edge);
            }
        })
    }
    print() {
        console.log(this.name);
        console.log(this.vertices);
    }
}

g = new Graph("Graph");
g.add_vertex("McAdenville")
g.add_vertex("Cramerton")
g.add_edge("McAdenville", "Cramerton");
g.add_edge("Cramerton", "Charlotte");
g.add_edge("Cramerton", "McAdenville");
g.print()