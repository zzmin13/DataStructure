//1. 스택(stack) : 나중에 넣은 데이터가 먼저 나오는 자료구조(LIFO, Last In First Out)
//스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.
//예시: 박스 쌓기, 햄버거 놀이, 작업 실행 취소(ctrl+z)

// 주요 함수 및 프로퍼티
//1) push : 데이터를 집어넣는 작업(뒤에서 부터 넣음)
//2) pop : 데이터를 꺼내는 작업(뒤에서 부터 꺼냄)
//3) peek : 맨 나중에 집어넣은 데이터를 확인 peek
//4) top : 맨 나중에 집어넣은 데이터의 위치를 확인
//5) size : 총 스택의 사이즈를 확인
//6) clear : 스택을 비우기
//7) isEmpty: 스택이 비었나 안비었나 확인 , 비었으면 true 리턴
//8) print : 스택의 요소들을 문자열로 print

class Stack{
  constructor(){
    this.arr = [];
  }

  push(item){
    this.arr.push(item);
  }
  pop(){
    // 배열의 길이가 0일 때(배열에 아무것도 없을 때) pop을 시도하면 false를 리턴
    if(this.arr.length == 0)
     return false;

    return this.arr.pop();
  }

  top(){ 
    return this.arr.length-1
  }
  peek(){
    return this.arr[this.arr.lenth-1];
  }
  size(){
    return this.arr.length;
  }

  clear(){
    this.arr = [];
  }

  isEmpty(){
    return this.arr.length == 0;
  }

  print(){
    console.log(this.arr.toString());
  }
}
/*예제 1) 10진수->2진수 함수만들기*/

function convertToBinary(decNumber){ //decNumber(10진수 숫자)를 2진수로 바꿔주는 converToBinary 함수 작성
  let binaryStack = new Stack();  //일단 stack 생성
  let rem ; // rem은 나머지
  let binaryString = '';

  while(decNumber > 0){
    rem = Math.floor(decNumber % 2);
    binaryStack.push(rem);

    decNumber = Math.floor(decNumber / 2);
  }
  
  while(!binaryStack.isEmpty()){
    binaryString += binaryStack.pop().toString();
  }
  return binaryString;
}
console.log(convertToBinary(13));



/* 예제2. 10진수 -> n진수 */

function decimalConverter2(decNumber, baseNumber){ //예: decimalConverter(100345, 8) 100345를 8진법으로 변환하기
  let remStack = new Stack();
  let rem;
  let convertString = '';
  digits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  while(decNumber > 0){
    rem = Math.floor(decNumber % baseNumber);
    remStack.push(rem);

    decNumber = Math.floor(decNumber / baseNumber);
  }
  while(!remStack.isEmpty()) //remStack.isEmpty()가 false이면 비어있지 않은 배열이니까 이것은 비어있는 순간 !true = false가 되면서 멈춤
  {
    convertString += digits[remStack.pop()];
  }

  return convertString;
}
console.log(decimalConverter2(100345,16));
