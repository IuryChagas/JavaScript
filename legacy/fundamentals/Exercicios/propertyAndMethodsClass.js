class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    };
    latir(){
        console.log('\nMia! <(⊙.☉)7')
    }
    
};

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Preto');
console.log(labrador);
console.log('Patas: ', labrador.patas);
labrador.latir();