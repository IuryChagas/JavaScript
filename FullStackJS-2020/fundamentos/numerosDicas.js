console.log(27 / 0); // qualquer número dividido por zero retorna infinity

// Por mais que o primeiro valor é do tipo string, o js tenta interpreta-lo como número,
// conseguindo essa interpretação, ele inicia a operação especificada!
console.log('10.5' / 2);

// valor esperado!: "NaN: Not a Number"
console.log('Show!' / 2);

// algumas operações podem ocorrer algum tipo de imprecisão por conta da especificação da qual a linguagem segue.
// no caso no JavaScript sua especificação é a C11, por conta de ser mais rapida, pois a mais precisa demanda muito
// tempo de processamento. Para saber mais sobre: pesquisar! 'IEEE Standard for Binary Floating-Point Arithmetic'
//  exe de imprecisão:

console.log(0.1 + 0.7);
// console.log(10.toString()) // retorna erro pois o js não interpreta quando no formato literal 

console.log((10).toFixed(2)); /// não entendi pq dessa forma funciona! ´-_-
console.log((10.23456).toFixed(2));
