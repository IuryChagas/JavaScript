console.info(
  `
  \n###########################     EXERCISES CHAPTER 23   ###########################

  `
)

/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/
console.info("## Exercise >> 01")

const myString = '    JS      '
const trimmedString = myString.trim()

console.log(trimmedString)

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info("## Exercise >> 02")

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const playersInAscendingOrder = people
        .map( ({ firstName, lastName, score }) => ({ firstName, lastName, score }))
        .sort( (player01, player02)=> player01.score - player02.score)

console.log({people, playersInAscendingOrder})
// debugger

/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/
console.info("## Exercise >> 03")

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const animalWithOnly3Chars = animals.filter( ({ length }) => length === 3)

console.log({animals, animalWithOnly3Chars})
// debugger

/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/
console.info("## Exercise >> 04")

const quantityLettersEachAnimal = animals.map( ({ length }) => length )
console.log(quantityLettersEachAnimal)
// debugger

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/
console.info("## Exercise >> 05")

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const nameOfFriendsNearMe = friends.filter( friend => friend.nearMe).map( ({ name }) => name)
// debugger

/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/
console.info("## Exercise >> 06")

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const oddNumbersTotal = numbers.filter( number => number % 2)
                               .reduce((total, oddNumber) => total + oddNumber, 0)
// debugger

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/
console.info("## Exercise >> 07")

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

const populationTotal = data
  .filter( ({ country, __ }) => country !== "China")
  .reduce((total, { population })=> total += population, 0)

console.log(populationTotal)
