var GraphNode = /** @class */ (function () {
    function GraphNode(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
    return GraphNode;
}());
var a = new GraphNode('a');
var b = new GraphNode('b');
var c = new GraphNode('c');
a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);
var graph = [a, b, c];
function colorGraph(graph, colors) {
    // Create a valid coloring for the graph
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
