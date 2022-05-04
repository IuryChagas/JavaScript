const peso1 = 1.0;
const peso2 = Number('2.31');

console.log(peso1, peso1);
// metodo .isInteger: para saber se a const peso1 é inteiro ou não!
console.log('peso1 é do tipo inteiro? >> '+ Number.isInteger(peso1));
console.log('peso2 é do tipo inteiro? >> '+ Number.isInteger(peso2));

const nota1 = 9.832;
const nota2 = 6.934;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);

console.log('Nota Média: '+ media);

// função para controlar a quantidade de casas decimais... 
// o (2) define a quantidade de casas decimais quero que seja mostrado!
console.log('\n::Nota com filtro::');
console.log('Nota Média: '+ media.toFixed(2));

// convertendo um numerico para string...
console.log('Nota Média (String):'+ media.toString());
console.log('Nota Média (binary String):'+ media.toString(2));
console.log('Tipo do valor da const media: '+ typeof media);
console.log('Qual é o tipo de Number? >> '+ typeof Number);

// A função Math.max() retorna o maior de um ou mais números.
console.log('Maior Nota: '+ Math.max(nota1, nota2));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Indice_metodos_js
