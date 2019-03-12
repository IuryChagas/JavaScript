/**
 * Hoisting is JavaScript's default behavior of moving declarations to the top.
 * 
 * Em JS a var hoisting é jogada para cima e por isso não retorna erro...
 * O log identifica que a variavel existe e até o dado momento ainda não foi definida!
 * Em outras linguagens isso retornaria um erro!
 */

console.log('hoisting = ', hoisting);
var hoisting = 10;
console.log(`hoisting = `,hoisting);


console.log(`-----------------------------`)
console.log(` #####|  O Hoisting joga a var para cima na execução  |##### `)
// Conforme o conseito de içamento o js faz dessa forma com o mesmo código acima!
var hoisting
console.log('hoisting = ', hoisting);
hoisting = 10;
console.log(`hoisting = `,hoisting);

// Retorna erro pois a variavel realmente não esta definida!
console.log('Result log =', hoistingNotDefined);
console.log(hoistingNotDefined);


// o içamento ocorre mesmo dentro de uma função!
function hoistingTest() {
    var test = 5;
    console.log('Test hoisting inside function: ', test);
}
hoistingTest();


/**
 *      Usando hoisting com LET (x) entendendo o erro! 
 */

//O efeito de hoisting não acontece com LET!
console.log('hoisting = ', hoistingWithLet);
let hoistingWithLet = 20;
console.log(`hoisting = `,hoistingWithLet);