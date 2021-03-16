const set = new Set();
console.log(set); // Set(0) {}


const set1 = new Set([1,2,3,3]);
console.log(set1)// Set(3) {1,2,3}

const set2 = new Set('hello');
console.log(set2) // Set(4) {"h","e","l","o"}


//원래 배열의 중복 요소를 제거하려면
const uniq = array => array.filter((element,index) => array.indexOf(element) === index);
console.log(uniq([2,1,2,3,4,3,4])); // [2,1,3,4]

//Set을 사용한 배열의 중복 제거
const uniq2 = array => [...new Set(array)];
console.log(uniq2([2,1,2,3,4,3,4])); // [2,1,3,4]


const set3 = new Set([1,2,3,3]);
console.log(set3.size); // 3

//객체 비구조화 할당 문법을 이용해서
const {size} = new Set([1,2,3,3]);
console.log(size); // 3


const set4 = new Set();
console.log(set4); // Set(0) {}

set4.add(1);
console.log(set4); // Set(1) {1}

const set5 = new Set();
set5.add(1).add(2);
console.log(set5); // Set(2) {1,2} 

const set6 = new Set();
set6.add(1).add(2).add(2);
console.log(set6); // Set(2) {1,2}

const set7 = new Set();
console.log(NaN === NaN); // false
console.log(0 === -0); //true

set7.add(NaN).add(NaN);
console.log(set7); //Set(1) {NaN}
set7.add(0).add(-0);
console.log(set7); //Set(2) {NaN,0}


const set8 = new Set();

set8
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(()=>{});
console.log(set8); //Set(8) {1, "a", true, undefined, null, {}, [], ()=>{}}

const set9 = new Set([1,2,3]);
console.log(set9.has(2)); //true
console.log(set9.has(4)); //false

const set10 = new Set([1,2,3]);
set10.delete(2);
console.log(set10); // Set(2) {1,3}
set10.delete(1);
console.log(set10); // Set(1) {3}

const set11 = new Set([1,2,3]);
set11.delete(0);
console.log(set11); //Set(3) {1,2,3}

const set12 = new Set([1,2,3]);
set12.clear();
console.log(set12); // Set(0) {}

const set13 = new Set([1,2,3]);
set13.forEach((v,v2,set) => console.log(v,v2,set));
/*
1 1 Set(3) {1,2,3}
2 2 Set(3) {1,2,3}
3 3 Set(3) {1,2,3}
*/

const set14 = new Set([1,2,3]);
for(let value of set14){
    console.log(value); //1,2,3
} 

console.log([...set14]); // [1,2,3]

const [a, ... rest] = set14;
console.log(a, rest); //1, [2,3]

Set.prototype.intersection = function(set){
    const result = new Set();

    for(let value of set){
        if(this.has(value))
            result.add(value);
    }

    return result;
};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.intersection(setB)); // Set(2) {2,4}

Set.prototype.union = function(set){
    const result = new Set(this);

    for(let value of set){
        result.add(value);
    }

    return result;
}

// Set.prototype.union = function(set){
//     return new Set([...this,...set]);
// }
const setC = new Set([1,2,3,4,5]);
const setD = new Set([4,6]);
console.log(setC.union(setD)); //Set(6) {1,2,3,4,5,6}

Set.prototype.difference = function(set){
    let result = new Set(this);

    for(let value of set){
        result.delete(value);
    }

    return result;
}

const setE = new Set([1,2,3,4]);
const setF = new Set([2,4]);

console.log(setE.difference(setF)); //Set(2) {1,3}
console.log(setF.difference(setE)); //Set(0) {}

Set.prototype.isSuperset = function(set){
    //this는 상위집합의 대상 set은 부분집합의 대상,
    // this가 set의 상위집합이려면 set의 원소를 다 가지고 있어야 한다

    for(let value of set){
        if(!this.has(value)){
            return false;
        }
    }
    return true;
}


const setG = new Set([1,2,3,4]);
const setH = new Set([2,4]);

// setG가 setH의 상위집합인지를 묻고 있다.
console.log(setG.isSuperset(setH)); // true

Set.prototype.isSubset = function(set){
    //this는 부분집합의 대상 set은 상위집합의 대상
    //this가 set의 부분집합이려면 this의 원소를 set이 다 가지고 있어야 한다.

    for(let value of this){
        if(!set.has(value)){
            return false;
        }
    }

    return true;
}

const setI = new Set([2,4]);
const setJ = new Set([1,2,3,4]);

//setI가 setJ의 부분집합인지를 묻고 있다.
console.log(setI.isSubset(setJ)); //true
//setJ가 setI의 부분집합인지를 묻고 있다 
console.log(setJ.isSubset(setI)); //false
