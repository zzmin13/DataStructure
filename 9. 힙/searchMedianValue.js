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
        console.log(`${this.count}. 중앙값 : ${this.median()}`);
        if(value > this.median()){
            this.minHeap.add(value);
            console.log(`${value}는 중앙값보다 크므로 minHeap에 삽입되었습니다.`);
            console.log(`현재 minHeap: ${this.minHeap.items.toString()}`);
            console.log(`현재 maxHeap: ${this.maxHeap.items.toString()}`);
        }else{
            this.maxHeap.add(value);
            console.log(`${value}는 중앙값보다 작으므로 maxHeap에 삽입되었습니다.`);
            console.log(`현재 minHeap: ${this.minHeap.items.toString()}`);
            console.log(`현재 maxHeap: ${this.maxHeap.items.toString()}`);
        }

        if(this.minHeap.size() - this.maxHeap.size() > 1){
            this.maxHeap.add(this.minHeap.poll());
            console.log(`minHeap의 사이즈가 더 커서 minHeap의 첫번째 원소가 maxHeap으로 이동했습니다.`);
        }

        if(this.maxHeap.size() - this.minHeap.size() > 1){
            this.minHeap.add(this.maxHeap.poll());
            console.log(`maxHeap의 사이즈가 더 커서 maxHeap의 첫번째 원소가 minHeap으로 이동했습니다.`);
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
console.log(`현재 중앙값: ${medianheap.median()}`); // 12
console.log(`----------------------------------`);

medianheap.add(2);
console.log(`현재 중앙값: ${medianheap.median()}`); // 7
console.log(`----------------------------------`);

medianheap.add(23);
console.log(`현재 중앙값: ${medianheap.median()}`); // 12
console.log(`----------------------------------`);

medianheap.add(13);
console.log(`현재 중앙값: ${medianheap.median()}`); // 12.5
console.log(`----------------------------------`);

medianheap.add(6);
console.log(`현재 중앙값: ${medianheap.median()}`);// 12
console.log(`----------------------------------`);

console.log(medianheap.minHeap.items.toString());
console.log(medianheap.maxHeap.items.toString());
