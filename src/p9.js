function findPath(graph, start, end) {
  // Return early if either the start or end node is not present in the graph
  if (!(start in graph) || !(end in graph)) {
    return { exists: false, path: [] };
  }

  // Initialize queue for Breadth-First Search (BFS)
  const queue = [start];

  // Track visited nodes to prevent revisiting and infinite loops
  const visited = new Set([start]);

  // Map each node to its predecessor to reconstruct the path later
  const parent = new Map();
  parent.set(start, null);

  while (queue.length > 0) {
    const current = queue.shift();

    // If the destination node is reached, reconstruct the path
    if (current === end) {
      const path = [];
      let node = end;

      // Backtrack from end node to start node using parent map
      while (node !== null) {
        path.push(node);
        node = parent.get(node);
      }

      // Reverse to obtain path from start to end
      path.reverse();

      return { exists: true, path };
    }

    // Explore all adjacent nodes
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }

  // Return false if no path exists between start and end
  return { exists: false, path: [] };
}

module.exports = findPath;