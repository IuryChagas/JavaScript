class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

//  Uma classe pode herdar propriedades de outra classe por herança. Para isso se o *extends*
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