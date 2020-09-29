class Dog{
    constructor(raca){
        this.raca = raca;
    }
}

// Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes;
// Utilizamos Symbol como uma constante, específica para propriedades dos objeto.

let patas = Symbol();

Dog.prototype[patas] = 4;

let golden = new Dog('Golden Retriever');

console.log(golden);
// o symbol só é possivel acessar atraves do prototype
console.log("Patas: ",Dog.prototype[patas]);