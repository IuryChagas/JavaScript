// O prototype do Javascript pode ser chamado de Classe;
// pois nas outras linguagens a classe é um molde de um objeto;
// em resumo, podemos criar diversos objetos em cima de um prototype;

const Guitar = {
    strings: 7
};

let Cello = Object.create(Guitar);

Cello.body = 'Wood';

console.log('\nBody type:', Cello.body);
console.log('Guitar has Body? ', Guitar.body == true);