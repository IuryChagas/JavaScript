// Quando criamos um objeto a partir de um outro, o base será o prototype;
// Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto base), quanto os do objeto base para dentro de si mesmo.

// ex:

const Guitar = {
    strings: 7
};

let Cello = Object.create(Guitar);

console.log(Guitar.hasOwnProperty('strings')); // o método hasOwnProperty() é do prototype Object portanto o objeto guitar esta herdando um método de seu prototype base.

console.log("\nCello has Own property 'strings'?",Cello.hasOwnProperty('strings')); // Mesmo não tendo a propriedade mão, o método hasOwnProperty foi executado com sucesso!
Cello.strings = 4;
console.log("strings: ",Cello.strings);
console.log("typeof Cello: ", typeof Cello);
console.log("Prototype of Cello is Guitar: ", Object.getPrototypeOf(Cello) == Guitar);