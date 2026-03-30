const findPath = require('./p9');

const graph = {
  A: ["B"],
  B: ["A", "C", "D", "E"],
  C: ["F"],
  D: ["E", "G"],
  E: ["F"],
  F: ["B", "G"],
  G: [],
  H: []
};

console.log(findPath(graph, "F", "A"));
// { exists: true, path: [ 'F', 'B', 'A' ] }

console.log(findPath(graph, "D", "B"));
// { exists: true, path: [ 'D', 'E', 'F', 'B' ] }
// I noticed the example says D → B is false, but based on the graph there is a path D → E → F → B. So my solution returns true for that case

console.log(findPath(graph, "E", "D"));
// { exists: true, path: [ 'E', 'F', 'B', 'D' ] }

console.log(findPath(graph, "G", "A"));
// { exists: false, path: [] }