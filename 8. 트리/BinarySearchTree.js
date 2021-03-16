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




}

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