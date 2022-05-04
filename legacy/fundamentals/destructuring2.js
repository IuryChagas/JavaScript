// leitura: usando a mesma sintax para um array, foi criado a variavel a da qual recebe do primeiro valor '10' do elemento array posi��o no indice [0]

const [a] = [10]
console.log(a);

// leitura: criando multiplas variaveis e extraindo dados do array em cada uma delaa!

// 0° A var 'n1' extrai o valor '10' do indice '0' do array
// 1° Seguindo a logica da sequencia... as variaveis nâo declaradas não  extraira valores do array, 
// neste caso, não foi definido variavel alguma para extrair o valor 7 do indice 1 do array.
// 2° A var 'n3' extrai valor '9' do indice '2' do array
// 3°A var 'n5' retorna 'undefined' pois já esta fora do array. obs: pois o array foi definido com apenas 4 valores!
// sendo eles: 10, 7, 9, 8 apenas.
// 4° A var 'n6' retorna o valor atribuido já dentro da estrutura do operador destructuring

const [n1, , n3, , n5, n6 = 10] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// Destructuring aninhadas
//  Array tendo outros elementos de array aninhados!
const [, [, note]] = [[, 8, 8],[9, 6, 8]]// leitura: ignore o primeiro array[, 8, 8],
// ignore tbm o 1° atributo do 2° array e extraia apenas o valor segundo tribudo 2° array! portanto valor da var note = 6!
console.log(note);

//obs: apenas como fins didaticos para entender o conceito!