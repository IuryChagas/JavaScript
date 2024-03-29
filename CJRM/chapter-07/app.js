console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 07   :::::::::::::::::::::::::::
    `
  )

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num } ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
section(1)

function multiply(firstNumber = 0, secondNumber = 0) {
    return firstNumber * secondNumber
}

result(multiply(4, 5))
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma
    **function expression** que retorne o resultado da **divisão** entre esses 2 números.
*/
section(2)

const divide = function (firstNumber = 0, secondNumber = 0) {
    return firstNumber / secondNumber
}

result(divide(20, 2))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
section(3)

function logMessage ( message = `Um valor como argumento é obrigatório`) {
  console.log(message)
}


for(let i = 1; i <= 5; i++){
  let count = i
  logMessage(`Esta é a ${count}ª vez que essa string é exibida.`)
}

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no console;
  - Implemente uma função que retorna um novo array com as strings do array "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da função.
*/
section(4)

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

function transformToUppercase(arrayOfWords = []) {
  const upperCaseWords = []

  for (let i = 0; i < arrayOfWords.length; i++) {
    const wordInUpperCase = arrayOfWords[i].toUpperCase()
    upperCaseWords.push(wordInUpperCase)
  }

  return upperCaseWords
}

const millennialWordsInUpperCase = transformToUppercase(millennialWords)

result(millennialWordsInUpperCase)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/
section(5)

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let amontNumbers = 0
let positiveNumbers = 0
let negativeNumbers = 0

function classifyNumbers (arrayOfNumbers = []) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const number = arrayOfNumbers[i];
    const isPositiveNumber = number >= 1

    if(isPositiveNumber){
      positiveNumbers++
    }else {
      negativeNumbers++
    }

    amontNumbers++
  }

  return `O array "randomNumbers" possui ${amontNumbers} números, sendo ${positiveNumbers} positivos e ${negativeNumbers} negativos.`
}

result(classifyNumbers(randomNumbers))

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da função.
*/
section(6)

function getOddNumbers (arrayOfNumbers = []) {
  const oddNumbers = []

  for(let i = 0; i < arrayOfNumbers.length; i++){
    const number = arrayOfNumbers[i]
    const isAOddNumber = number % 2 !== 0

    if(isAOddNumber) oddNumbers.push(number)
  }

  return oddNumbers
}

const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

result(oddNumbers)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/
section(7)

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

function phraseConstructor (arryOfWords){
  let message = ``

  for (let i = 0; i < arryOfWords.length; i++) {
    const word = arryOfWords[i]
    message += `${word()} `
  }
  return message
}

result(phraseConstructor(functions))
