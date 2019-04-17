//  a Primeira parte do operador ternário é uma expressão relacional, 
//  a Segunda é o return caso a expressão relacional for Verdadeira, "a divisão entre a 1° e 2° parte é marcarda pelo simbolo ?"
//  a Terceira é o return caso a expressão relacional for Falsa, "a divisão entre a 2° e 3° parte é marcada pelo simbolo : "

const result = achievement => achievement >= 100 ? 'profit' : 'loss';

console.log(result(1900));
console.log(result(75));
console.log(result(99.99));

// 1°) achievement >= 100
// 2°) ? 'profit'
// 3°) : 'loss'