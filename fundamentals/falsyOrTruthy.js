/* 
        ::FALSY::

    > undefined
    > null
    > 0
    > false
    > '' <- empty string
    > NaN <-- Not a Number
*/

/*
        ::TRUTHY::

        > value defined
        > 1...9
        > true
        > string with any char
*/

console.log(false || 'type of string'); // retorna true pois na string consta valor
console.log(false || 1); // retorna true pois consta número 1.
console.log(false || 2 || 8); // retorna true 2 pois o operador OR faz apenas a primeira validação.
let corPersonalizada = 'Verde';
let corPadrao = 'Branco';
let corPerfil = corPadrao || corPersonalizada;
console.log(corPerfil); // retorna 'Branco' pois o operador OR finaliza na primeira condição que satisfaz seu princípio.