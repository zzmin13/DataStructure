class HashTable {
    constructor() {
      this.storageLimit = 10; // 해시테이블의 용량 한계 설정
      this.table = new Array(this.storageLimit); // 정해진 용량 크기로 해시 테이블을 배열로 만듬
    }

    // 키, 인덱스, 값
  
    // key -> index (키를 가지고 인덱스로 변환해주는 해시 함수)
    Hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
      }
      return hash % this.storageLimit;
    }
  
    // add(key,value)  - 원소를 추가한다.
    add(key, value) {
      const index = this.Hash(key);
      this.table[index] = value;
    }

    //get(key) - 키에 해당하는 원소를 찾아 그 값을 반환한다.
    get(key) {
      const index = this.Hash(key);
      return this.table[index];
    }

    //remove(키) - 키에 해당하는 원소를 찾아 삭제한다.
    remove(key) {
      const index = this.Hash(key);
      delete this.table[index]; // 객체에서 요소를 삭제하는 방법
    }
  }
  
  const hashTable = new HashTable();
  hashTable.add("뭉치", "말티즈");
  hashTable.add("우니", "빠삐용");
  hashTable.add("복남이", "말티푸");
  
  console.log(hashTable.table);
  console.log(hashTable.get("우니")); // 빠삐용
  hashTable.remove("복남");
  console.log(hashTable.table);
  console.log(hashTable.table[0]); // undefined