console.info(
    `
    \n:::::   EXERCISES CHAPTER 22   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/
section(1)

const myString = '    JS      '

result(myString.trim())

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
section(2)

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const peopleOrderedByScore = people
    .map( ({ firstName, lastName, score }) => ({ firstName, lastName, score }) )
    .sort( (obj1, obj2) => obj1.score - obj2.score )

result(peopleOrderedByScore)
result(people)
/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/
section(3)

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const getOnlyAnimalsWithThreeLetters = animals.filter( ({ length }) => length === 3 )

result(getOnlyAnimalsWithThreeLetters)
/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/
section(4)

const animalNamesLength = animals.map( ({ length }) => length )

result(animalNamesLength)
/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/
section(5)

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsNearBy = friends.filter( ({ nearMe }) => nearMe ).map( ({ name }) => name )

result(friendsNearBy)
/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/
section(6)

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const getOddNumberSum = numbers
    .filter( number => number % 2 )
    .reduce( (acc, number)=> acc += number, 0)

result(getOddNumberSum)

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/
section(7)

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

const populationAmount = data
    .filter( ({ country }) => country !== 'China' )
    .reduce((acc, { population }) => acc += population, 0)

result(populationAmount)
