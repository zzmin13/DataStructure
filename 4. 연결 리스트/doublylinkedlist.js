class Node2{
        constructor(element){
            this.element = element;
            this.next = null;
            this.prev = null;
        }
    }
    class DoublyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        append(element){
            let node = new Node2(element);

            if(this.head === null){
                this.head = node;
                this.tail = node;
            }else{
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
            this.length++;
        }
        insert(position,element){
            if(position >= 0 && position <= this.length){
                let node = new Node2(element);
                let current = this.head;
                let previous;
                let index = 0;

                if(position === 0){
                    if(!this.head){
                        this.head = node;
                        this.tail = node;
                    }else{
                        node.next = current;
                        current.prev = node;
                        this.head = node;
                    }
                }else if(position === this.length){
                    current = this.tail;
                    current.next = node;
                    node.prev = current;
                    this.tail = node;
                }else{
                    while(index < position){
                        previous = current;
                        current = current.next;
                        index++;
                    }
                    node.next = current;
                    current.prev = node;

                    previous.next = node;
                    node.prev = previous;
                }

                this.length++;
                return true;
            }else{
                return false;
            }
        }

        removeAt(position){
            if(position > -1 && position < this.length){
                let current = this.head;
                let previous;
                let index = 0;

                if(position === 0){
                    this.head = current.next;
                    if(this.length === 1){
                        this.tail = null;
                    }else{
                        this.head.prev = null;
                    }
                }else if(position === this.length-1){
                    current = this.tail;
                    this.tail = current.prev;
                    this.tail.next = null;
                }else{
                    while(index < position){
                        previous = current;
                        current = current.next;
                        index++;
                    }
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.length--;
                return current.element;

            }else{
                return null;
            }
        }

        //나머지 indexOf, remove, toString, size, isEmpty는 모두 똑같다.
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

        remove(element){
            let index = this.indexOf(element);
    
            return this.removeAt(index);
        }

        toString(){
            let current = this.head;
            let string = '';
    
            while(current!==null){
                string += current.element+",";
                current = current.next;
            }
            return string;
        }

        size(){
            return this.length;
        }

        isEmpty(){
            return this.length == 0;
        }
    }
    
let doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.append("짱구");
doublylinkedlist.append("철수");
doublylinkedlist.append("맹구");
console.log(doublylinkedlist.toString()); //짱구,철수,맹구,

doublylinkedlist.insert(2,"훈이");
console.log(doublylinkedlist.toString()); // 짱구,철수,훈이,맹구,
doublylinkedlist.insert(2,"유리");
console.log(doublylinkedlist.toString()); // 짱구,철수,유리,훈이,맹구,

doublylinkedlist.removeAt(3);
console.log(doublylinkedlist.toString()); // 짱구,철수,유리,맹구,

doublylinkedlist.remove("철수");
console.log(doublylinkedlist.toString()); //짱구, 유리, 맹구,

console.log(doublylinkedlist.indexOf("맹구")); //2
