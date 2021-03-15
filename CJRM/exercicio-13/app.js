/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer  
    com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/
console.info('\n### Etapa 05 - Exercício: 01 ###\n ')

console.log(`\n## version 00\n\n`)
const getCatInfo = () => {
  const name = 'Mitião'
  let age = 5
  const color = 'Cinza'
  return {name: name, age: age, color: color}
}
 
let  outputMessage = `${getCatInfo().name} é um gato ${getCatInfo().color} de ${getCatInfo().age} anos.`

console.log(outputMessage)

console.log(`\n## Refactoring 01 \n\n`)

const catName = getCatInfo().name
const catAge = getCatInfo().age
const catColor = getCatInfo().color

outputMessage = `${catName} é um gato ${catAge} de ${catColor} anos.`

console.log(outputMessage)

console.log(`\n## Refactoring 02 \n\n`)
getCatInfo2 = () => {
  const name = 'Mitião'
  let age = 5
  const color = 'Cinza'

  return {name, color, age} // <-- Initializer notation
}

let {name, color, age} = getCatInfo2() // <-- Destructuring assignment

outputMessage = `${name} é um gato ${color} de ${age} anos.`

console.log(outputMessage)

/*
  02

  - Adicione apenas duas linhas de código dentro da função "external" para  
    exibir no console a string que a const movie armazena, com todas as letras  
    maiúsculas.
*/
console.info('\n### Etapa 05 - Exercício: 02 ###\n ')

const external = () => {
  const movie = 'Parasite'

  const internal = () => {
    const extraInternal = () => {
      movie.toUpperCase()
    }
    return extraInternal()
  }
  return internal()
}

console.log(external())

/*
  03

  - Exiba no console o array abaixo com a ordem dos itens invertida;
  - O resultado exibido deve ser [1, 2, 3];

  Dica: procure pelo método reverse, no MDN.
*/
console.info('\n### Etapa 05 - Exercício: 03 ###\n ')

let randomNumbers = [3, 2, 1]

console.log(randomNumbers.reverse())
/*
  04

  - Exiba no console o array abaixo com o 1º item removido;

  Dica: procure pelo método shift, no MDN.
*/
console.info('\n### Etapa 05 - Exercício: 04 ###\n ')

let crazyArray = [
  { prop1: '1', prop2: '2' },
  function getMessage () { return 'hi' },
  [ 5, 96, 53  ]
]

crazyArray.shift()

console.log(crazyArray)

/*
  05

  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto  
    no console;

  Dica: procure pelo método find, no MDN.
*/
console.info('\n### Etapa 05 - Exercício: 05 ###\n ')

const dogs = [
  { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
  { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
  { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
  { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
  { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
]
console.log(`\n## version 00\n\n`)
dogs.forEach((element) => {
  if (element.name === 'Zequinha') {
    console.log(element.name)
  }
})

console.log(`\n## Refactoring 01 \n\n`)
dogs.find( obj => {
  if (obj.name == 'Zequinha') {
    console.log(obj.name)
  }
})

console.log(`\n## Refactoring 02 \n\n`)
const pet = dogs.find(dog => dog.name === 'Zequinha')

console.log(pet)

/*
  06

  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  
    página, através da classe dele;
  - Exiba a referência do título principal no console.

*/
console.info('\n### Etapa 05 - Exercício: 06 ###\n ')

let mainTitle = document.querySelector('.main-title')
console.log(mainTitle)
/*
  07

  - Obtenha um NodeList com as referências de todos os títulos secundários da  
    página, através da classe deles;
  - Exiba esse NodeList no console.
*/
console.info('\n### Etapa 05 - Exercício: 07 ###\n ')

let secondaryTitles = document.querySelectorAll('.secondary-title')

console.log(secondaryTitles)
