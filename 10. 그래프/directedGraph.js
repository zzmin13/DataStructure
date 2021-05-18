class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  //정점을 추가하는 함수
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  //간선을 추가하는 함수
  addEdge(originVertex, destVertex, weight) {
    // 시작 정점, 도착 정점, 가중치
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[originVertex][destVertex] = weight;
  }
}

const graph1 = new DirectedGraph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B", 1);
graph1.addEdge("B", "C", 2);
graph1.addEdge("C", "A", 3);
console.log(graph1.edges);
