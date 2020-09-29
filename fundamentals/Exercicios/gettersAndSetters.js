class Dog {
    constructor(raca,cor){
        this._raca = raca;
        this._cor = cor;
    };
    latir(){
        console.log("Au au");
    };
    get getRaca(){ 
        return this._raca;
    };
    set setRaca(value){ 
        this.raca = value;
    };
    get getCor(){ 
        return this._cor;
    }
}

let golden = new Dog('Pastor Alemão', 'Sem Cor');
console.log(golden);

console.log('\n');
console.log(golden.getRaca);
console.log(golden.getCor);