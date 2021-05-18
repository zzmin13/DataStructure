class UndirectedGraph {
  constructor() {
    this.edges = {};
  }
  // 정점 추가하기
  addVertex(vertex) {
    this.edges[vertex] = {}; // 객체에서 []를 쓰면 그게 키(key)라는 얘기
  }

  // 간선 추가하기
  addEdge(vertex1, vertex2, weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  // 간선 삭제하기
  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
      delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
      delete this.edges[vertex2][vertex1];
    }
  }

  // 정점 삭제하기
  // (하나의 정점이 삭제될 때는 그 정점과 연결된 간선이 삭제되니까 상대편 정점에서도 그 간선을 지워줘야 한다.)
  removeVertex(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
  }
}

const graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(1, 2, 1);
graph1.addEdge(1, 5, 88);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
console.log(graph1.edges);

const graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(1, 2, 1);
graph2.addEdge(1, 5, 88);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.removeVertex(5);
graph2.removeVertex(1);
graph2.removeEdge(2, 3);
console.log(graph2.edges);
