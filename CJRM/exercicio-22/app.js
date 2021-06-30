console.info(
  `
  \n###########################     EXERCISES CHAPTER 22   ###########################

  `
)
const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre do manhã', price: 5 },
  { name: 'O futuro da Humanidade', price: 10 },
  { name: 'Quem pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 },
]

const booksOnSale = books
  .filter(( { price } )=> price > 20)
  .map(( {name, price} )=> `O preço do livro '${name}' caiu para ${price} reais`)

console.table(booksOnSale)

const getArrayCopy = array => {
  return array.map( item => item )
}
/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info("## Exercise >> 01")

const names = ['Caio', 'André', 'Dário']

const namesInAlphabeticalOrder = getArrayCopy(names).sort()

console.table(namesInAlphabeticalOrder)
console.table(names)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info("## Exercise >> 02")

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

const charactersOrderedById = characters
        .map( ({ id, name }) => ({ id, name }))
        .sort( (char1, char2) => char1.id - char2.id)

console.table(charactersOrderedById)
console.table(characters)
/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info("## Exercise >> 03")

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

const numbersInAscendingOrder = getArrayCopy(numbers)
                                  .sort((number1, number2) => number1 - number2)

console.log(numbersInAscendingOrder)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/
console.info("## Exercise >> 04")

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

const firstNumberGreaterThan50 = randomNumbers.find( number => number > 50)

console.log(firstNumberGreaterThan50)
/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
console.info("## Exercise >> 05")

const people = ['Cauã', 'Alfredo', 'Bruno']

const namesInReverseAlphabeticalOrder = getArrayCopy(people).sort().reverse()

console.table({ people, namesInReverseAlphabeticalOrder })

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/
console.info("## Exercise >> 06")

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const phrase = ingredients.reduce((string, ingredient, index, arr) => {
 const correctWordGender = /a$/.test(ingredient) ? 'cozida' : 'cozido'
 const isLastItem = index === arr.length -1
 const ingredientMessage = `${ingredient} ${correctWordGender}`

 return  isLastItem ? string + ingredientMessage : string + `${ingredientMessage}, ` 

}, ``)

console.log(phrase)
/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/
console.info("## Exercise >> 07")

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

const moviesSelected = topBrazilmovies
  .filter(({ distributedBy }) => distributedBy === 'Disney')
  .reduce((total, { peopleAmount }) => total += peopleAmount, 0)

console.log(moviesSelected)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/
console.info("## Exercise >> 08")

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const dogs = pets.filter( ({ type }) => type === 'Dog')
                 .map( ({ name, age, gender, type }) =>  ({ name, age: age * 7, gender, type }))

console.table(dogs)
/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/
console.info("## Exercise >> 09")
const ul = document.querySelector('.list-group')

let li = ''

const movieTitles = topBrazilmovies
  .reduce( (stringify, movie) => stringify + `<li>${movie.title}</li>`, ``)

li = movieTitles
ul.innerHTML = li

console.log(li)

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/

console.info("## Exercise >> 10")

