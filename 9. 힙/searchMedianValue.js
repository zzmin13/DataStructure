class MedianHeap{
    constructor(){
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
        this.count = 0;
    }

    add(value){
        //중앙값 보다 작으면 maxheap에 삽입
        //중앙값 보다 크면 minheap에 삽입
        this.count++;
        if(value > this.median()){
            this.minHeap.add(value);
    
        }else{
            this.maxHeap.add(value);
        }

        if(this.minHeap.size() - this.maxHeap.size() > 1){
            this.maxHeap.add(this.minHeap.poll());
        }

        if(this.maxHeap.size() - this.minHeap.size() > 1){
            this.minHeap.add(this.maxHeap.poll());
        }
    }

    median(){
        if(this.minHeap.size() === 0 && this.maxHeap.size() === 0){
            return Number.NEGATIVE_INFINITY;
        }else if(this.minHeap.size() === this.maxHeap.size()){
            return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
        }else if(this.minHeap.size() > this.maxHeap.size()){
            return this.minHeap.peek();
        }else{
            return this.maxHeap.peek();
        }
    }
}

const medianheap = new MedianHeap();

medianheap.add(12);
console.log(medianheap.median()) // 12

medianheap.add(2);
console.log(medianheap.median()) // 7

medianheap.add(23);
console.log(medianheap.median()) // 12

medianheap.add(13);
console.log(medianheap.median()) // 12.5

medianheap.add(6);
console.log(medianheap.median())// 12


