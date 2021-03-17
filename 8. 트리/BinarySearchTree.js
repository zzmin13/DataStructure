class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //트리에 키 삽입
    insert(key){
        let newNode = new Node(key);

        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    //in-order traversal 중위순회 (왼쪽 - 루트 - 오른쪽)
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }
    
    inOrderTraverseNode(node, callback){
        if(node !== null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    //pre-order traversal 전위순회 (루트 - 왼쪽 - 오른쪽)
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root,callback);
    }

    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    //post-order traversal 후위순회 (왼쪽-오른쪽-루트)
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    //최솟값 찾기
    min(){
        return this.minNode(this.root);
    }

    minNode(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }

            return node.key;
        }
        return null;
    }

    //최댓값 찾기
    max(){
        return this.maxNode(this.root);
    }

    maxNode(node){
        if(node){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    findMinNode(node){
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    };

    //특정값 찾기
    search(key){
        return this.searchNode(this.root, key);
    }
    searchNode(node, key){
        if(node === null){
            return false;
        }else if(key < node.key){
            return this.searchNode(node.left, key);
        }else if(key > node.key){
            return this.searchNode(node.right, key);
        }else{
            return true;
        }
    }

    //노드 삭제
    remove(key){
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key){
        if(node === null){
            return null;

        }else if(key < node.key){
            node.left = this.removeNode(node.left, key);
            return node;

        }else if(key > node.key){
            node.right = this.removeNode(node.right, key);
            return node;

        }else{
            //경우 1 : 리프 노드인 경우
            //경우 2 : 왼쪽/오른쪽 중 어느 한 쪽에만 자식이 있는 경우
            // 경우 3 : 왼쪽 오른쪽 모두 자식을 가진 경우
            
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tree = new BinarySearchTree();
tree.insert(11); // 11은 루트노드가 된다.

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree);
const printNode = (value) => {
    console.log(value);
}
console.log('------------중위순회------------');
tree.inOrderTraverse(printNode); // 중위순회(in-order traversal, 왼쪽-루트-오른쪽)

console.log('------------전위순회------------');
tree.preOrderTraverse(printNode); // 전위순회(pre-order traversal, 루트-왼쪽-오른쪽)

console.log('------------후위순회------------');
tree.postOrderTraverse(printNode); // 후위순회(post-order traversal, 왼쪽-오른쪽-루트)

console.log(`최솟값: ${tree.min()}`); // 최솟값 3
console.log(`최댓값: ${tree.max()}`); // 최댓값 25

console.log(tree.search(1) ? '키 1을 찾았습니다.' : '키 1을 찾지 못했습니다.');
console.log(tree.search(8) ? '키 8을 찾았습니다.' : '키 8을 찾지 못했습니다.');

console.log("***************삭제 6***************");
tree.remove(6); // 리프노드를 지우는 경우
tree.inOrderTraverse(printNode); //중위순회로 순서 확인 "3 7 8 9 10 11"

console.log("***************삭제 5***************");
tree.remove(5);
tree.inOrderTraverse(printNode);

console.log("***************삭제 15**************");
tree.remove(15);
tree.inOrderTraverse(printNode);