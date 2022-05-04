/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
console.info("## Exercise >> 01")

function multiplier(firstNumber = 0, SecondNumber = 0) {
  return firstNumber * SecondNumber
}

let result  = multiplier(40, 5)

console.log(result)

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
console.info("## Exercise >> 02")

const divisor = (firstNumber = 0, secondNumber = 0) => {
  return firstNumber / secondNumber
}

result = divisor(40, 5)

console.log(result)

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
console.info("## Exercise >> 03")

function showNumber(params = 'Valor como argumento é obrigatório!') {
  return params
}

for (let iterator = 1; iterator <= 7; iterator++) {
  
  const message = `Esta é a ${showNumber(iterator)}ª vez que essa string é exibida.`

  console.log(message)
}

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
console.info("## Exercise >> 04")

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

function StringsToUpperCase(array = []) {
  const newArray = []

  for (let index = 0; index < array.length; index++) {
    const word = array[index]
    newArray.push(word.toUpperCase())
    
  }
  return newArray
}

const millennialWordsInUpperCase = StringsToUpperCase(millennialWords)

console.log(millennialWordsInUpperCase)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/
console.info("## Exercise >> 05")

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

const isPositiveNumbers = function (number = 0) {
  return number >= 1
}

let positiveNumbersQuantity = 0
let negativeNumbersQuantity = 0

for (let index = 0; index < randomNumbers.length; index++) {
  const isPositiveNumber = isPositiveNumbers(randomNumbers[index])

  if (isPositiveNumber) {
    positiveNumbersQuantity++
  }else {
    negativeNumbersQuantity++
  }

}

console.log( `O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumbersQuantity} positivos e ${negativeNumbersQuantity} negativos.`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

console.info("## Exercise >> 06")

const getOddNumbers = arr => {
  const oddNumbers = []
  for (let iterator = 0; iterator < arr.length; iterator++) {

    const number = arr[iterator]
    const isOddNumber = number % 2 !== 0

    if (isOddNumber) { 
      oddNumbers.push(number)
    }

  }
  return oddNumbers
}

const arrayWithOddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(arrayWithOddNumbers)
/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

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

console.info("## Exercise >> 07")

let phrase = ``

for (let i = 0; i < functions.length; i++) {
  const element = functions[i]
  phrase += element().concat(' ')
}

console.log(phrase)