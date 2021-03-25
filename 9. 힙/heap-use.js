//앞서 구현한 heap.js를 사용하는 코드!

//최소 힙을 사용하는 코드
const minheap = new MinHeap();
minheap.add(1);
minheap.add(10);
minheap.add(5);
minheap.add(100);
minheap.add(8);

console.log(minheap.items); //array(5) [1, 8, 5, 100, 10]
console.log(minheap.sort()); 

// //최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
maxheap.add(1);
maxheap.add(10);
maxheap.add(5);
maxheap.add(100);
maxheap.add(8);

console.log(maxheap.items); //array(5) [100, 10, 5, 1, 8]
console.log(maxheap.sort()); // array(5) [100, 10, 8, 5, 1]
