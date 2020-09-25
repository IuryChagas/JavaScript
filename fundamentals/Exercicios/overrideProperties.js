class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    };
};

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('labrador','Caramelo');

console.log('\n');

console.log(labrador);
console.log('Patas:',labrador.patas);
console.log('Raça:',labrador.raca);
console.log('Override Raça: ',Cachorro.prototype.raca); // Sobrescrevendo a propriedade default raça da classe Cachorro. 