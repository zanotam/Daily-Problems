////class GraphNode {
////    label: string
////    neighbors: Set<GraphNode>
////    color: string
////    constructor(label: string) {
////        this.label = label;
////        this.neighbors = new Set<GraphNode>();
////        this.color = null;
////    }
////}
////const a = new GraphNode('a');
////const b = new GraphNode('b');
////const c = new GraphNode('c');
////a.neighbors.add(b);
////b.neighbors.add(a);
////c.neighbors.add(b);
////b.neighbors.add(c);
////const graph = [a, b, c];
////function colorGraph(graph: Array<GraphNode>, colors: Array<string>) {
////    // Create a valid coloring for the graph
////    //maybe break down and go through each node in some sort of order coloring a subgraph consisting of just the attached nodes
////    // the trick being to use the nodes already colored by previous subgraph colorings....
////    // also need to check for loops and throw an error if one is found. 
////    //maybe create a vaild coloring for the nodes in the graph one at a time? basically like the induction example?
////    //maybe do it D+1 nodes at a time? 
////    for (let node of graph) {
////        let usedColors = new Array<string>();
////        for (let neighbor of node.neighbors) {
////            if (neighbor.color !== null) {
////			}
////        }
////        let diff = colors.filter(x => !usedColors.includes(x));
////        node.color = diff[0];
////    }
////    return graph;
////}
//# sourceMappingURL=interviewcake355.js.map