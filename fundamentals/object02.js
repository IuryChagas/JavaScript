console.log(typeof Object); // retorna que é uma função!
console.log(typeof new Object); // Construindo um objeto à partir da função!
console.log(typeof new Object()); // É o mesmo que chamar o construtor!

console.log(`==========`)
// Outros exemplos:

const customers = function(){}
console.log(typeof customers);
console.log(typeof new customers);

console.log(`==========`)
// Class é um atalho de sintax, uma forma diferente de construir uma função!
// Exemplo abaixa, como em outras linguagens: Criando Classes e instânciando Objetos à partir da Classe.
class product {} // Es 2015(ES6)
console.log(typeof product);
console.log(typeof new product());