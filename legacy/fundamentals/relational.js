console.log('01)', '1' == 1); // Comparando apenas valor! "há algo igual? =="
console.log('02)', '1' === 1); // Comparando valor e tipo! "é estritamente igual? ==="
console.log('03)', '3' != 3); // Comparando apenas valor "é diferente? !="
console.log('04)', '3' !== 3); // Comparando valor e tipo! "É estritamente diferente? !=="

console.log('05)', 3 < 2); // 3 é menor que 2?
console.log('06)', 3 > 2); // 3 é maior que 2?
console.log('07)', 3 <= 2); // 3 é menor ou igual à 2?
console.log('08)', 3 >= 2); // 3 é maior ou igual à 2?

const d1 = new Date(0); // o Zer0 significa a data de referência do inicio de quando a função foi criada em  01/01/1970 "Unix time"
const d2 = new Date(0);

console.log('09)', d1 === d2); // d1 é estritamente igual à d2?
console.log('10)', d1 == d2); // há algo igual entre d1 e d2?
console.log('11)', d1.getTime() === d2.getTime()); // Resposta positiva, pois ambos são do mesmo tipo e ambos terão sempre o mesmo valor.
console.log('12)', undefined == null);
console.log('13)', undefined === null);

// obs: É mais adequado usar o estritamente igual === em troca do "há algo igual == " pois assim, 
//      há a certeza de que esta em comparação tanto em tipo quanto em valor.