class ValuePair{
      constructor(key,value){
          this.key = key;
          this.value = value;
      }
  }
  class HashTable{
      constructor(){
          this.storageLimit = 10;
          this.table = new Array(this.storageLimit);
      }
      Hash(key){
          let hash = 0;
          for(let i = 0; i < key.length; i++){
              hash += key.charCodeAt(i);
          }
          return hash % this.storageLimit;
      }
      add(key,value){
          const index = this.Hash(key);
          if(this.table[index] === undefined){
              this.table[index] = new LinkedList();
          }
          this.table[index].append(new ValuePair(key,value));
      }
      get(key){
          const index = this.Hash(key);
          let current = this.table[index].getHead();
          if(this.table[index] !== undefined){
              while(current !== null){
                  if(current.element.key === key){
                      return current.element.value;
                  }
                  current = current.next;
              }
          }
          return undefined;
      }
      remove(key){
          const index = this.Hash(key);
          let current = this.table[index].getHead();
          if(this.table[index] !== undefined){
              while(current !== null){
                  if(current.element.key === key){
                      this.table[index].remove(current.element);
                      if(this.table[index].isEmpty()){
                          this.table[index] = undefined;
                      }
                  }
                  current = current.next;
              }
              return true;
          }
          return false;
      }
  }
  
  
  const hashTable = new HashTable();

  hashTable.add("강민경","가천대학교");
  hashTable.add("경민강","삼성고등학교");
  hashTable.add("백종찬","남서울대학교");
  hashTable.add("김해미","동양대학교");
  hashTable.add("김대림","평택대학교");
  hashTable.add("조희진","연성대학교");

  console.log(hashTable.table[2].toString()); // [김해미-동양대학교], [조희진-연성대학교]
  console.log(hashTable.get("조희진")); //연성대학교

  hashTable.remove("조희진");

  console.log(hashTable.table[2].toString()); // [김해미-동양대학교]
  console.log(hashTable.get("조희진")); //undefined
  
  console.log(hashTable.table);