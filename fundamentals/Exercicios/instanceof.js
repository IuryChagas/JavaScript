class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(raca, patas){
        super(patas, patas);
        this.raca = raca;
    }
    latir(){
        console.log("Au au.. grahhhhhh!")
    }
}


let pug = new Cachorro('Pug', 4);
console.log(pug);

console.log('Raça:', pug.raca);
console.log('Patas:',pug.patas);
let latir = pug.latir();

latir;

console.log('pug is instance of Cachorro: ', pug instanceof Cachorro);
console.log('Cachorro is instance of Mamifero: ', Cachorro instanceof Mamifero);
console.log('new Cachorro is instance of Mamifero: ', new Cachorro instanceof Mamifero);