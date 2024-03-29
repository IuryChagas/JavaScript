console.info(
    `
    \n:::::   EXERCISES CHAPTER 21   :::::
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

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
section(1)

const getArrayCopy = array => array.map( item => item )

const names = ['Caio', 'André', 'Dário']

const copyNames = getArrayCopy(names)
const ordenatedNames = names.map( name => name ).sort()

result(ordenatedNames)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
section(2)

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

const ordenatedObjects = characters
  .map( ( { id, name } ) => ({ id, name }) )
  .sort( (object1, object2)=> object1.id - object2.id)

result(ordenatedObjects)
result(characters)

/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
section(3)

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const numbersInAscendingOrder  = getArrayCopy(numbers)
  .sort( ( numberPositionOne, numberPositionTwo ) => numberPositionOne - numberPositionTwo )

result(numbersInAscendingOrder)
result(numbers)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/
section(4)

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]
const numberGraterThan50 =  randomNumbers.find( number => number > 50 )

result(numberGraterThan50)
/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
section(5)

const people = ['Cauã', 'Alfredo', 'Bruno']

const namesReverseOrdering = getArrayCopy(people).sort( (a, b) => b.localeCompare(a) )

result(namesReverseOrdering)

const peopleInReverseAlphabeticalOrder = getArrayCopy(people).sort().reverse()

result(peopleInReverseAlphabeticalOrder)

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/
section(6)

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const ingredientsMessage = ingredients.reduce( (message, item, index, array) => {

  const correctWordGender = /a$/.test(item) ? 'codiza' : 'cozido'
  const isLastItem = index === array.length -1
  const ingredientMessage = `${item} ${correctWordGender}`

  return isLastItem ? message + ingredientMessage : message + `${ingredientMessage}, `

}, '')

result(ingredientsMessage)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que assistiram apenas os filmes da Disney.
*/
section(7)

const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const disneyFilmsAssistants = topBrazilmovies.reduce( (peopleTotal, { distributedBy, peopleAmount }) => {
  if (distributedBy === 'Disney') {
    peopleTotal += peopleAmount
  }

  return peopleTotal
}, 0)

result(disneyFilmsAssistants)

const peopleAmount = topBrazilmovies
  .filter( ({ distributedBy }) => distributedBy === 'Disney')
  .reduce( (acc, { peopleAmount })=> (acc += peopleAmount), 0)

result(peopleAmount)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/
section(8)

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]


const dogsInHumanAge = pets
  .filter( ({ type }) => type === 'Dog')
  .map( ({ name, age, gender, type }) => ({ name, age: age * 7, gender, type }))

result(dogsInHumanAge)

/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/
section(9)

const ul = document.querySelector('.list-group')

topBrazilmovies.map( movie => ul.innerHTML += `<li>${movie.title}</li>` )

const insertMoviesIntoHTML = (acc, { title })=> ul.innerHTML = acc += `<li>${title}</li>`

const movieNames = topBrazilmovies.reduce(insertMoviesIntoHTML, '')

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/
section(10)

result(`-[x] function resetUserScore it's working`)