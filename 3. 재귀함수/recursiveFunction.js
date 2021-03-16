function factorial(n){
    if(n <= 1)
        return 1;
    
    return n * factorial(n-1);
}
//수학적으로 0!과 1!은 1이다.
console.log(factorial(3));
/*
factorial(3)
= 3 * factorial(2)
= 3 * 2 * factorial(1)
= 3 * 2 * 1
*/

//유클리드 호제법
function getGCD(a,b){
    let maxNum = Math.max(a,b); // 둘 중 큰 수 찾기
    let minNum = Math.min(a,b); // 둘 중 작은 수 찾기

    let remainder = maxNum % minNum ;
    if(remainder == 0)
        return minNum;
    
    maxNum = minNum;
    minNum = remainder;

    return getGCD(maxNum, minNum);
}
console.log(getGCD(72,192)); // 24

function getGCD(a,b){
    if(a % b == 0)
        return b;
     
     return getGCD(b, a%b);
}
//굳이 큰 수를 찾지 않아도, 작은수 큰수 순서로 입력하면 어차피 첫 단계에 뒤바뀌게 된다.   
console.log(getGCD(72,192));