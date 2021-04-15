/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/
console.info('\n### Etapa 09 - Exercício: 01 ###\n ')

const myString = '    JS      '

console.log(myString.trim())

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info('\n### Etapa 09 - Exercício: 02 ###\n ')

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const peopleOrderedByScore = people
  .map( ({firstName, lastName, score}) => ({ firstName, lastName, score }))
  .sort((firstScore, secondScore) => firstScore.score - secondScore.score)

console.log('Original Array: ', people)
console.log('New Array: ', peopleOrderedByScore)
/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/
console.info('\n### Etapa 09 - Exercício: 03 ###\n ')

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const onlyThreeLetters = ({ length }) => length === 3

const selectedAnimals = animals.filter(onlyThreeLetters)

console.log(selectedAnimals)
// debugger

/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/
console.info('\n### Etapa 09 - Exercício: 04 ###\n ')

const quantityOfChars = animals.map(({ length }) => length)

console.log(quantityOfChars)
// debugger

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/
console.info('\n### Etapa 09 - Exercício: 05 ###\n ')

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsNearMe = friends.filter( ({ nearMe }) => nearMe)
const nameOfFriendsNearMe = friendsNearMe.map( ({ name }) => name)

console.log(friendsNearMe)
/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/
console.info('\n### Etapa 09 - Exercício: 06 ###\n ')

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const oddNumberTotals = numbers
  .filter( number => number % 2 !== 0)
  .reduce( (acc, oddnumber) => acc + oddnumber, 0)

console.log('Odd Numbers Totals: ', oddNumberTotals)

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

console.info('\n### Etapa 09 - Exercício: 07 ###\n ')

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const countryPopulation = data
  .filter( ({ country }) => country !== 'China')
  .reduce((acc, { population }) => acc + population, 0)

console.log('Total Popularion: ', totalPopulationOfCountries)
