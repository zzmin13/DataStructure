class DirectedGraph {
  constructor() {
    this.edges = {};
  }

  // 정점 추가하기
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  // 간선 추가하기
  addEdge(originVertex, destVertex, weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[originVertex][destVertex] = weight;
  }

  traverseBFS(vertex) {
    console.log(`BFS`);
    const queue = [];
    const visited = {};

    queue.push(vertex);

    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(`방문한 노드 : ${vertex}`);
        for (let adjacentVertex in this.edges[vertex]) {
          queue.push(adjacentVertex);
        }
      }
    }
    console.log(`-----------------`);
  }
  traverseDFS(vertex) {
    console.log(`DFS`);
    const visited = {};
    this._traverseDFS(vertex, visited);
  }
  _traverseDFS(vertex, visited) {
    visited[vertex] = true;
    console.log(`방문한 노드 : ${vertex}`);
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited);
      }
    }
  }
}

directedGraph = new DirectedGraph();
directedGraph.addVertex("A");
directedGraph.addVertex("B");
directedGraph.addVertex("C");
directedGraph.addVertex("E");
directedGraph.addVertex("D");
directedGraph.addVertex("G");
directedGraph.addVertex("F");
directedGraph.addVertex("H");
directedGraph.addVertex("J");

directedGraph.addEdge("A", "B");
directedGraph.addEdge("B", "C");
directedGraph.addEdge("B", "E");
directedGraph.addEdge("C", "D");
directedGraph.addEdge("D", "G");
directedGraph.addEdge("D", "F");
directedGraph.addEdge("G", "H");
directedGraph.addEdge("F", "J");

console.log(directedGraph);
directedGraph.traverseBFS("A");
directedGraph.traverseDFS("A");
