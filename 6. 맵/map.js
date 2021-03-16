const map = new Map();
console.log(map); // Map(0) {}

const map1 = new Map([['key1','value1'],['key2','value2']]);
console.log(map1); // Map(2) {"key1" => "value1", "key2" => "value2"}

// const map2 = new Map([1,2]);
// console.log(map2); // TypeError : Iterator value 1 is not an entry object

const map3 = new Map([['key1','value1'],['key1','value2']]);
console.log(map3); // Map(1){"key1" => "value2"}

const {size} = new Map([['key1','value1'],['key2','value2']]);
console.log(size); // 2

const map4 = new Map();
console.log(map4); // Map(0) {}
map4.set('key1','value1');
console.log(map4); // Map(1) {"key1" => "value1"}

const map5 = new Map();
map5.set('key1','value1').set('key2','value2');
console.log(map5); // Map(2) {"key1" => "value1", "key2" => "value2"}

const map6 = new Map();
map6.set('key1','value1').set('key1','value2');
console.log(map6); // Map(1) {"key1" => "value2"}

const map7 = new Map();

//NaN과 NaN은 같다고 평가하여 중복 추가를 허용하지 않음
map7.set(NaN, 'value1').set(NaN,'value2');
console.log(map7); // Map(1) { NaN => 'value2'} 

//+0과 -0은 같다고 평가하여 중복 추가를 허용하지 않음
map7.set(+0, 'value3').set(-0, 'value4');
console.log(map7); // Map(2) { NaN => 'value2 , 0 => 'value4'}


const map8 = new Map();
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
map8.set(lee, 'developer').set(kim, 'designer');
console.log(map8); // Map(2) { {name:"lee"} => "developer", {name:"kim"} => "desinger"}

const map9 = new Map();
const kang = { name: 'Kang' };
const park = { name: 'Park' };
map9.set(kang, 'developer').set(park, 'designer');
console.log(map9.get(kang)); // developer
console.log(map9.get(park)); // desinger

const baek = { name: 'Baek' };
const cho = { name: 'Cho' };
const map10 = new Map([[baek,'office worker'],[cho, 'tattooist']]);

console.log(map10.has(baek)); // true
console.log(map10.has(kang)); // false


const boknam = { name: 'boknam' };
const wooni = { name: 'wooni'};
const moongchi = { name: 'moongchi' };

const map11 = new Map( [ [boknam, 'Maltipoo'], [wooni,'Papillon'], [moongchi,'Maltese'] ] );

for(let key of map11.keys()){
    console.log(key); // {name: 'boknam'} {name:'wooni'} {name: 'moongchi'}
}

for(let value of map11.values()){
    console.log(value); // 'Maltipoo' 'Papillon' 'Maltese'
}

for(let entry of map11.entries()){
    console.log(entry); //[{name: 'boknam'},'Maltipoo'] [{name:'wooni'},'Papillon'] [{name: 'moongchi'},'Maltese']
}