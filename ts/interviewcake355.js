"use strict";
exports.__esModule = true;
var console_1 = require("console");
var GraphNode = /** @class */ (function () {
    function GraphNode(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
    return GraphNode;
}());
// const a = new GraphNode('a');
// const b = new GraphNode('b');
// const c = new GraphNode('c');
// a.neighbors.add(b);
// b.neighbors.add(a);
// c.neighbors.add(b);
// b.neighbors.add(c);
// const graph = [a, b, c];
function colorGraph(graph, colors) {
    // Create a valid coloring for the graph
    //need to make sure not in infinite loop/graph has a cycle. 
    if (hasLoop(graph)) {
        throw console_1.exception("Graph has a loop and thus cannot be legally colored!");
    }
    else {
        var _loop_1 = function (node) {
            var usedColors = new Array();
            node.neighbors.forEach(function (neighbor) { return neighbor.color ? usedColors.push(neighbor.color) : null; });
            var diff = colors.filter(function (x) { return !usedColors.includes(x); });
            node.color = diff[0];
        };
        //maybe break down and go through each node in some sort of order coloring a subgraph consisting of just the attached nodes
        // the trick being to use the nodes already colored by previous subgraph colorings....
        // also need to check for loops and throw an error if one is found. 
        //maybe create a vaild coloring for the nodes in the graph one at a time? basically like the induction example?
        //maybe do it D+1 nodes at a time? 
        for (var _i = 0, graph_1 = graph; _i < graph_1.length; _i++) {
            var node = graph_1[_i];
            _loop_1(node);
        }
        return graph;
    }
}
;
function hasLoop(graph) {
    for (var _i = 0, graph_2 = graph; _i < graph_2.length; _i++) {
        var node = graph_2[_i];
        if (node.neighbors.has(node)) {
            return true;
        }
    }
    return false;
}
//   function isCyclic(graph: Array<GraphNode>): boolean {
//     let isCycle = false;
//     //cycle through every node as base node.
//     //get list of neighbors of neighbors minus base node
//     //while list of neighbors is not equal to graph and list of new neighbors is nonempty
//     //get list of new neighbors by finding neighbors of list of neighbors of neigbhors? something... wait no. that doesn't work. 
//     //since it's an array does the slow+fast runner waiting until they meetup trick work?
//     //ended up just googling it lol
//     //setup visitation map!
//     let visited: Map<GraphNode, boolean> = new Map<GraphNode, boolean>();
//     for (let node of graph) {
//         visited.set(node, false);
//     }
//     //define helper function which is a closure
//     function cycleHelper(node: GraphNode, visited: Map<GraphNode, boolean>, parent: GraphNode) {
//         let foundCycle = false;
//         visited.set(node, true); // node has been visited!
//         let subGraph = node.neighbors.values();
//         for (let i of subGraph) {
//             if (!visited.get(i)) {
//                 if(cycleHelper(i, visited, node)) {
//                     foundCycle = true;
//                     break;
//                 }
//             }
//             else if (parent !== i) {
//                 foundCycle = true;
//                 break;
//             }
//         }
//         return foundCycle;
//     }
//     //recurse using helper function
//     for (let node of graph) {
//         if (!visited.get(node)) {
//             if(cycleHelper(node, visited, new GraphNode(""))) {
//                 isCycle = true;
//                 break;
//             }
//         }
//     }
//     return isCycle;
// };
