const cytoscape = require("cytoscape")
const fs = require("fs");

let nodes_raw = fs.readFileSync("data/nodes.json").toString();
let nodes = nodes_raw.trim("\n").split("\n").map(JSON.parse);

let edges_raw = fs.readFileSync("data/edges.json").toString();
let edges = edges_raw.trim("\n").split("\n").map(JSON.parse);

console.log(nodes);
console.log(edges);


var cy = cytoscape({

  container: document.getElementById('graphview'), // container to render in

  elements: {
    nodes: nodes,
    edges: edges
  },

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});
