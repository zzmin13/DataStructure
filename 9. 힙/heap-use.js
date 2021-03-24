//앞서 구현한 heap.js를 사용하는 코드!

//최소 힙을 사용하는 코드
const mh = new MinHeap();
mh.add(1);
mh.add(10);
mh.add(5);
mh.add(100);
mh.add(8);

console.log(mh); //array(5) [1, 8, 5, 100, 10]

console.log(mh.poll()); // 1
console.log(mh.poll()); // 5
console.log(mh.poll()); // 8
console.log(mh.poll()); // 10
console.log(mh.poll()); // 100

console.log(mh); // array(0)


//최대 힙을 사용하는 코드