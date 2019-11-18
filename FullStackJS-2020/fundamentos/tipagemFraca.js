let qualquer = 'Interessante!';
console.log('\n\nTipo de variavel >> let \nNome de Variavel >> qualquer \nValor da variavel >> '+ qualquer);
console.log('Tipo do valor: '+ typeof qualquer);

console.log('\nVariavel {qualquer} redefinida \n');
qualquer = 3.141516;
console.log('Tipo >> let \nNome >> qualquer \nNovo Valor >> '+ qualquer);
console.log('Novo tipo do Valor: '+ typeof qualquer +'\n\n');

// evitar nomes genéricos e/ou siglas
// Clean Code por Filipe Deschamps >> https://www.youtube.com/watch?v=9w3o9NHXqu0

let valor = '';
let numero = 1;
// Parece obvio para quem esta dentro do contexto de produção,
// porem quem esta fora desse context pode não interpretar de igual forma!
// ex:
let pqp = false // Produto Químico Perigoso... kkk!
