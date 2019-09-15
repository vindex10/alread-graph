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
        'background-color': function (node) {
            let status = node.data("status")
            return  status == "read" ? "#7a7" : "#aaa";
        },
        'label': function (node) {
            let type = node.data("id").split(":")[0]
            let title = node.data("alias") ? node.data("alias") : node.data("title");
            return type + "/" + title
        },
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'curve-style': 'straight',
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ]

});

cy.nodes().on('click', function(e){
  var ele = e.target;
  alert(JSON.stringify(ele.data(), null, 2));
});
