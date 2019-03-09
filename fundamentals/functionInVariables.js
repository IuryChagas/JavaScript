// função em uma variavel do tipo imutavel!
const printSum = function(a, b) { //função anônima!
    console.log(a + b);
}

printSum(3, 15);

/**    ###|  Armazenando uma função arrow em uma variavel  |###
 *  'simploriamente' é uma forma reduzida de construir uma função!
 */

 const sum = (a ,b) => { // função arrow! é a mesma função acima de forma enxuta!
     return a + b;
 }

    console.log(sum(5, 9));

/**
 *    ####| Retorno implícito ~ função arrow ainda mais simples! |####
 *  Funciona apenas em casos onde a função executa apenas uma sentença de código!
*/
const subtraction = (c, d) => c - d;

console.log(subtraction(15,10));

// Quando existe apenas 1 parâmetro na função, fica ainda mais enxuta a declaração!
const print = x => console.log(x);
print('>> Nice!');