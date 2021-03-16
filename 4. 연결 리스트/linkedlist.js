//연결 리스트 만들기

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //1. append(element) : 가장 뒤에서 원소를 삽입
    append(element){
        let node = new Node(element);
        let current = this.head;

        if(this.head === null){
            this.head = node;
        }else{
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    //2. insert(position, element) : 원하는 위치에 원소를 삽입
    insert(position,element){
        if(position >=0 && position <= this.length){
            let node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){
                node.next = current;
                this.head = node;
            }else{
                while(index < position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;

            }
            this.length++;
            return true;
        }else{
            return false;
        }
    }

    //3. removeAt(position) : 원하는 위치의 원소를 삭제
    removeAt(position){
        if(position > -1 && position < this.length){
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){
                this.head = current.next;
            }else{
                while(index < position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }
    }

    //4. indexOf(element) : element의 index를 반환
    indexOf(element){
        let current = this.head;
        let index = 0;

        while(current!==null){
            if(element === current.element){
                return index;
            }

            index++;
            current = current.next;
        }
        return -1;
    }

    //5. remove(element): 해당 element를 삭제
    remove(element){
        let index = this.indexOf(element);

        return this.removeAt(index);
    }

    //6. toString()
    toString(){
        let current = this.head;
        let string = '';

        while(current!==null){
            string += current.element+",";
            current = current.next;
        }
        return string;
    }

    //7. size()
    size(){
        return this.length;
    }

    //8. isEmpty()
    isEmpty(){
        return this.length == 0;
    }

    //9. getHead()
    getHead(){
        return this.head;
    }
}

let linkedlist = new LinkedList();
linkedlist.append("짱구");
linkedlist.append("철수");
linkedlist.append("맹구");
console.log(linkedlist);
console.log(linkedlist.toString()); //짱구,철수,맹구,

linkedlist.insert(2, "훈이");
linkedlist.insert(2, "유리");
console.log(linkedlist.toString()); //짱구,철수,유리,훈이,맹구,

linkedlist.removeAt(1);
console.log(linkedlist.toString()); //짱구,유리,훈이,맹구,

linkedlist.append("원장선생님");
console.log(linkedlist.toString()); //짱구,유리,훈이,맹구,원장선생님,

console.log(linkedlist.indexOf("짱구")); //0

linkedlist.remove("원장선생님");
console.log(linkedlist.toString()); //짱구,유리,훈이,맹구,

console.log(linkedlist.size()); //4
console.log(linkedlist.isEmpty()); // false
console.log(linkedlist.getHead()); // 짱구
