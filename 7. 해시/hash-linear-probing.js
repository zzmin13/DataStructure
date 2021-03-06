class ValuePair{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}
class HashTable{
    constructor(){
        this.table = [];
    }

    Hash(key){
        let hash = 0;

        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % 10;
    }

    add(key,value){
        let index = this.Hash(key);

        if(this.table[index] === undefined){
            this.table[index] = new ValuePair(key,value);
        }else{
            let anotherIndex = ++index;
            while(this.table[anotherIndex]){
                anotherIndex++;
            }
            this.table[anotherIndex] = new ValuePair(key,value);
        }
    }

    get(key){
        let index = this.Hash(key);

        if(this.table[index] !== undefined){
            if(this.table[index].key === key){
                return this.table[index].value;
            }else{
                let anotherIndex = ++index;
                while(this.table[anotherIndex] === undefined || this.table[anotherIndex].key !== key){
                    anotherIndex++;
                }
                if(this.table[anotherIndex].key === key){
                    return this.table[anotherIndex].value;
                }
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.Hash(key);
        if(this.table[index] !== undefined){
            if(this.table[index].key === key){
                this.table[index] = undefined;
            }else{
                let anotherIndex = ++index;
                while(this.table[anotherIndex] === undefined || this.table[anotherIndex].key !== key){
                    anotherIndex++;
                }
                if(this.table[anotherIndex].key === key){
                    this.table[anotherIndex] = undefined;
                }
            }
        }
    }

    print(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(`${i} -> key: ${this.table[i].key}, value: ${this.table[i].value}`);
            }
        }
    }
}

let hashtable = new HashTable();
hashtable.add("??????","?????????");
hashtable.add("??????","?????????");
hashtable.add("??????","?????????");
hashtable.add("??????", "????????? ?????????");
hashtable.add("??????", "??????");
hashtable.add("??????", "??????");

hashtable.print();

console.log(hashtable.get("??????")); // ??????

hashtable.remove("??????");

hashtable.print();