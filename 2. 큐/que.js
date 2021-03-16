/*
2. 큐(Queue) : FIFO(선입선출) 방식의 자료구조, 
입구와 출구가 모두 뚫려있다고 생각하기
새 원소는 뒤로 들어가서 앞에서 빠져나가는 구조이다.

<예시>
마트에서 줄서서 계산하기

<큐에서 사용할 메소드>
1) enqueue(원소(들)) : 큐의 뒤쪽에 원소(들)를 추가한다.
2) dequeue() : 큐의 첫 번째 원소(큐의 맨 앞쪽에 위치한 원소)를 반환하고 큐에서 삭제한다.
3) front() : 큐의 첫 번째 원소를 반환하되 큐 자체는 그대로 놔둔다(참조만 할 뿐 큐에서 원소를 삭제하지 않는다. stack에서 peek 메소드와 비슷하다.)
4) isEmpty() : 큐가 비어있으면 true를, 비어있지 않으면 false를 반환한다.
5) size() : 큐의 원소 개수를 반환한다. 배열의 length와 같다.
6) print() : 디버깅 용도로 print 메소드 추가

*/

class Queue{
    constructor(){
        this.arr = [];
    }

    enqueue(item){
        this.arr.push(item);
    } // enqueue는 뒤에서 원소를 넣어야 함(스택처럼 Array.push 메소드 사용)

    dequeue(){
        return this.arr.shift();
    } // 앞에서 부터 지워야 하기 때문에 배열의 Array.shift 메소드 사용
    
    front(){
        return this.arr[0];
    }

    clear(){
        this.arr = [];
    }
    isEmpty(){
        return this.arr.length == 0;
    }

    size(){
        return this.arr.length;
    }
    print(){
        console.log(this.arr.toString());
    }
}

let testQueue = new Queue();

console.log(testQueue.isEmpty()); // true

testQueue.enqueue("John");
testQueue.enqueue("Jack");
testQueue.enqueue("Camila");

testQueue.print(); //John,Jack,Camila
console.log(testQueue.size()); // 3
console.log(testQueue.isEmpty()); // false

testQueue.dequeue();
testQueue.dequeue();
testQueue.print(); //Camila

/*
2-1. 우선순위 큐(priority queue)
: 우선순위를 설정해 정확한 위치에 추가하는 것, 그리고 추가는 순서대로 하되, 삭제만 우선순위에 따른다.

<예시>
- 비행기: 1등석과 비즈니스석 승객은 항상 이코노미석 승객보다 우선순위가 높다, 어떤 국가에서는 연장자와 임산부에게 우선권을 주기도 한다
- 병원 응급실 : 중상 환자는 의사의 판단에 따라 찰과상을 입은 환자보다 먼저 진료실로 보낸다

 */

// 우선순위 큐에 삽입되는 데이터 클래스
class QElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
  
  // 우선순위 큐
  class QElement {
        constructor(element, priority) {
          this.element = element;
          this.priority = priority;
        }
    }
    class PriorityQueue {
        constructor() {
          this.arr = [];
        }
        // <삽입 메소드 구현> 데이터의 우선순위에 따라 큐의 적절한 위치에 삽입
        enqueue(element, priority) {
            // QElement 객체 생성
            const qElement = new QElement(element, priority);
            let added = false;
            
            // 전체 데이터를 순회하면서 자신의 우선순위가 더 높은 위치를  탐색
            // splice 함수는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
            // array.splice(startIndex, deleteCount, item1, item2, ...)
            for(let i=0; i < this.arr.length; i++) {
            if(qElement.priority < this.arr[i].priority) {
                this.arr.splice(i, 0, qElement);
                added = true;
                break;
            }
            }
            
            // 큐에 자신보다 더 낮은 우선순위를 가진 요소가 없을 때, 큐의 맨 마지막에 삽입
            if(!added) {
            this.arr.push(qElement);
            }
        }
        //<삭제 메소드 구현>
        dequeue() {
            return this.arr.shift();
        }
        //<유틸리티 메소드 구현>
        front() {
        
            return this.arr[0];
        }
          
        rear() {
            return this.arr[this.arr.length-1];
        }
          
        isEmpty() {
          
            return this.arr.length === 0;
        }
          
        print() {
            let str ="";
            this.arr.forEach((element) => str+= `(${element.element},${element.priority}),`)
            console.log(`{${str}}`);
        }
    //{("Jack",1),("Camila",1),("John",2)}
      }
    let pq = new PriorityQueue();
    pq.enqueue("John",2);
    console.log(pq);
    pq.enqueue("Jack",1);
    pq.enqueue("Camila", 1);
    pq.print();
    
    // 2-2. 환형 큐
    //<뜨거운 감자 게임>
    function hotPotato(nameList, number){
        let queue = new Queue();
        let eliminatePerson = '';
        let winner;
        for(let i = 0; i < nameList.length; i++){
            queue.enqueue(nameList[i]);
        }
    
        while(queue.size() > 1){
            let count = 1;
            for(let i = 0; i < number; i++){
                queue.enqueue(queue.dequeue());
            }
            eliminatePerson = queue.dequeue();
            console.log(`${count}라운드: ${eliminatePerson}님을 퇴출시킵니다.`);
            count++;
        }
        winner = queue.dequeue();
    
    return winner;
    }
    
    let names=["minkyoung","jongchan","haemi","daerim","heejin"];
    let winner = hotPotato(names, 7);
    console.log(`승자는 ${winner}님 입니다.`);