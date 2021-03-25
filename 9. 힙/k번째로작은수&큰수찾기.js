//k번째로 작은 수 찾기
function findKthSmallestNumber(array, k){
    const minheap = new MinHeap();
    let answer;
    
    for(let i = 0; i < array.length; i++){
        minheap.add(array[i]);
    }
    
    for(let i = 1; i <= k; i++){
        answer = minheap.poll();
    }
    return answer;
    
}
const array = [12, 3, 13, 4, 2, 40, 23] // 정렬하면 2, 3, 4, 12, 13, 23, 40
console.log(findKthSmallestNumber(array, 1)); // 2
console.log(findKthSmallestNumber(array, 3)); // 4
console.log(findKthSmallestNumber(array, 6)); // 23

//k번째로 큰 수 찾기
function findKthBiggestNumber(array, k){
    const maxheap = new MaxHeap();
    let answer;

    for(let i = 0; i < array.length; i++){
        maxheap.add(array[i]);
    }
    for(let i = 1; i <= k; i++){
        answer = maxheap.poll();
    }
    return answer;
}

const array2 = [1,6,10,20,90,4]; // 정렬하면 90 20 10 6 4 1
console.log(findKthBiggestNumber(array2, 1)); // 90
console.log(findKthBiggestNumber(array2, 3)); // 10
console.log(findKthBiggestNumber(array2, 6)); // 1