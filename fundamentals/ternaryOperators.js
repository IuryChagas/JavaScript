//  a Primeira parte do operador ternário é uma expressão relacional, 
//  a Segunda é o return caso a expressão relacional for Verdadeira, "a divisão entre a 1° e 2° parte é marcarda pelo simbolo ?"
//  a Terceira é o return caso a expressão relacional for Falsa, "a divisão entre a 2° e 3° parte é marcada pelo simbolo : "

const result = note => {
    return note >= 7 ? 'approved' : 'disapproved';
}

console.log(result(7.9));
console.log(result(6.1));

// 1°) note >= 7
// 2°) ? 'approved'
// 3°) : 'disapproved'