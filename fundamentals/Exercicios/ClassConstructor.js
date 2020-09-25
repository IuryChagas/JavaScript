// Construtores são formas de instânciar uma classe, ou seja é o mesmo de criar 'instanciar' um objeto.
// No Construtor já podemos definir propriedades;

function createGuitar(body, strings, bridge){
    let guitar = Object.create({});
    guitar.body = body;
    guitar.strings = strings;
    guitar.bridge = bridge;
    guitar.timbre = function(){
        console.log('\nTimbre Clean: ♫ ♩ ♫ ♪ ♫ ♪!');
    };

    return guitar;
};

let stratoCaster = createGuitar('wood', 7, 'bronze');

console.log(stratoCaster);

stratoCaster.timbre();

console.log("\n ####### Constructor with 'new' ####### \n");

function Dog(race){
    this.race = race;
};

let husky = new Dog('Husky');
console.log('Dog Race:', husky.race);