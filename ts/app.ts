class GraphNode {
  label: string
  neighbors: Set<GraphNode>
  color: string
  constructor(label: string) {
    this.label = label;
    this.neighbors = new Set<GraphNode>();
    this.color = null;
  }
}

// const a = new GraphNode('a');
// const b = new GraphNode('b');
// const c = new GraphNode('c');

// a.neighbors.add(b);
// b.neighbors.add(a);
// c.neighbors.add(b);
// b.neighbors.add(c);

// const graph = [a, b, c];

function colorGraph(graph: Array<GraphNode>, colors: Array<string>) {

  // Create a valid coloring for the graph

  //need to make sure not in infinite loop/graph has a cycle. 
  if (isCyclic(graph)) {

  } else {
    //maybe break down and go through each node in some sort of order coloring a subgraph consisting of just the attached nodes
    // the trick being to use the nodes already colored by previous subgraph colorings....
    // also need to check for loops and throw an error if one is found. 
    //maybe create a vaild coloring for the nodes in the graph one at a time? basically like the induction example?
    //maybe do it D+1 nodes at a time? 
    for (let node of graph) {
      let usedColors = new Array<string>();
      node.neighbors.forEach((neighbor) => neighbor.color ? usedColors.push(neighbor.color): null);
      let diff = colors.filter(x => !usedColors.includes(x));
      node.color = diff[0];
    }
    return graph;
  }
};

function isCyclic(graph: Array<GraphNode>): boolean {
  let isTree = false;
  //cycle through every node as base node.
  //get list of neighbors of neighbors minus base node
  //while list of neighbors is not equal to graph and list of new neighbors is nonempty
  //get list of new neighbors by finding neighbors of list of neighbors of neigbhors? something... wait no. that doesn't work. 
  //since it's an array does the slow+fast runner waiting until they meetup trick work?
  return isTree;
};