/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/
console.info('\n### Etapa 03 - Exercício: 01 ###\n ')

let output

// function convertToString (value) {
//   return String(value)
// }

convertToString = value => String(value)


output = convertToString(true)

console.log(typeof output+':', output)
/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/
console.info('\n### Etapa 03 - Exercício: 02 ###\n ')

const charsQuantity = string => string.length

const word = 'Pneumoultramicroscopicossilicovulcanoconiótico'

const showCharsQuantity = charsQuantity(word)

console.log(`This string contains [${showCharsQuantity}] chars`)

/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/
console.info('\n### Etapa 03 - Exercício: 03 ###\n ')

convertToLowerCase = param => param.toLowerCase()

const phrase = 'CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'

const phraseInLowerCase = convertToLowerCase(phrase)

console.log(phraseInLowerCase)

/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/
console.info('\n### Etapa 03 - Exercício: 04 ###\n ')

const indexIdentifier = (char, str) =>  str.indexOf(char)

let string = "Uoogle"
console.log(indexIdentifier('g', string))

/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/
console.info('\n### Etapa 03 - Exercício: 05 ###\n ')

let item = 'D'
const arrayOfItems = ['O', 'i', 's', 'd', 'Y', 'D', 'g', 'a']

// const itemCheck = item => {
//   if (arrayOfItems.includes(item)) {
//     return true
//   }else {
//     return false
//   }
// }

const containsItem = (item, arr) => arr.includes(item)

console.log(
  containsItem(item, arrayOfItems)
)

/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/
console.info('\n### Etapa 03 - Exercício: 06 | 01 ###\n ')

let firstArray = [true, 'item', 'false', null]
let secondArray = [6,Infinity,"",9, undefined]

const arraysConcatenator = (arr1, arr2) => arr1.concat(arr2)


// const arraysConcatenator = (firstArray, secondArray) => {
//   let newArray = []
//   for (let i = 0; i < secondArray.length; i++) {
//     firstArray.push(secondArray[i]);
//   }
//   for (let i = 0; i < firstArray.length; i++) {
//     newArray[i] = firstArray[i];  
//   }

//   return newArray
// }

console.table(
  arraysConcatenator(firstArray, secondArray)
)

/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/
console.info('\n### Etapa 03 - Exercício: 07 ###\n ')

let topActionMovies = ['Jogo Perigoso', 'Rastros de Um Sequestro', 'O Cidadão Ilustre', 'Um Contratempo', 'The Invitation', 'Garota Exemplar ', 'Ilha do Medo']

const arrayWithoutLastItem = arr => {
  
  arr.pop()
  
  return arr
}

output = arrayWithoutLastItem(topActionMovies)

console.log(output)
/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/
console.info('\n### Etapa 03 - Exercício: 08 ###\n ')

const nullable = null

isNull = param => {
  if (param === null) {
    return true
  }
  return false
}

console.log(isNull(nullable))

/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/
console.info('\n### Etapa 03 - Exercício: 09 ###\n ')

const myName = 'Iury'

const firstFunction = callback => {
  callback()
}

const showMyName = () => {
  console.log(myName)
}


firstFunction(showMyName)

/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/
console.info('\n### Etapa 03 - Exercício: 10 ###\n ')

const invokeCallback = (callback, param) => {
  return callback(param)
}

const triple = num => num * 3

console.log(invokeCallback(triple, 33))


/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/
console.info('\n### Etapa 03 - Exercício: 11 ###\n ')

const numbers = [1, 2, 3]

const showNumbersInfo = (item, index, array) => {
  const indexItem = index + 1
  const arrayOfNumbers = array.join(', ')
  console.log(`O ${indexItem}º item do array [${arrayOfNumbers}] é ${item}.`)
}

numbers.forEach(showNumbersInfo)

/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/
console.info('\n### Etapa 03 - Exercício: 12 ###\n ')

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

// console.log(lettersCopy)

// const insertItem = (item, index, array) => lettersCopy.push(letters[index])
// letters.forEach(insertItem)

// Correção
letters.forEach(item => {
  lettersCopy.push(item)
})

console.log(lettersCopy)
/*
  13

  - Inclua o markup abaixo em seu index.html;
  - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do  
    array "review";
  - Ao gerar o template, verifique no browser se os parágrafos foram incluídos  
    dentro da section vazia do markup abaixo.

  <article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
  </article>
*/
console.info('\n### Etapa 03 - Exercício: 13 ###\n ')

// const section = document.querySelector('[data-js="section"]')

// const review = [
//   'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
//   'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
//   'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
//   'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
// ]

// let paragraphs = ''

// // for (let i = 0; i < review.length; i++) {
// //   paragraphs += `${review[i]}<br \><br \>`
// // }

// // refactoring

// addParagraphs = paragraph => {
//   const space = `<br \><br \>`
//   paragraphs += `${paragraph} ${space}`
// }

// review.forEach(addParagraphs)

// section.innerHTML = paragraphs

/*
  14

  - Implemente uma função que retorna uma string com a quantidade de pessoas que  
    curtiram um post, conforme descrito a seguir;
  - A função deve receber por parâmetro um array com os nomes das pessoas que  
    curtiram o post/vídeo/foto;  
  - Se o array recebido estiver vazio, a mensagem que a função deve retornar é  
    "Ninguém curtiu isso";  
  - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem  
    retornada deve ser "Rafael curtiu isso";  
  - Se o array conter 2 nomes, a mensagem retornada deve ser  
    "NOME_1 e NOME_2 curtiram isso";  
  - Se o array conter 3 nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e NOME_3 curtiram isso";  
  - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
    pelo restante da quantidade de pessoas que curtiram o post (além das duas  
    pessoas já mencionadas no início da mensagem).
*/

console.info('\n### Etapa 03 - Exercício: 14 ###\n ')

const mediaEngagement = (array = []) => {
  const firstName = array[0]
  const secondName = array[1]
  const thirdName = array[2]
  const totalLikes = array.length - 2

  switch (array.length) {
    case 0:
      return "Ninguém curtiu isso"
    case 1:
      return `${firstName} curtiu isso`
    case 2:
      return `${firstName} e ${secondName} curtiram isso`
    case 3:
      return `${firstName}, ${secondName} e ${thirdName} curtiram isso`
    default:
      if (array.length >= 4) {
        return   `${firstName}, ${secondName} e mais ${totalLikes} curtiram isso`
      }
  }
}

console.log(
  mediaEngagement(['Ana Maria', 'Camilla', 'Claudia', 'Geise', 'Iury', 'Wendvan', 'Neiva'])
)