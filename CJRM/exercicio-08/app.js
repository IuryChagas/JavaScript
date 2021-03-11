/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
console.info('\n### Etapa 03 - Exercício: 01 ###\n ')

function multiplier(num1 = null, num2 = null){
  return num1 * num2;
}

let muiltp = multiplier(2,13)
console.log(muiltp)

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
console.info('\n### Etapa 03 - Exercício: 02 ###\n ')

let divider = function(param1 = 0, param2 = 0) {
  return param1 / param2
}

console.log(divider(12, 2))
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
console.info('\n### Etapa 03 - Exercício: 03 ###\n ')

function parameterPrinter(param = null) {
  return param
}

for (let index = 1; index <= 7; index++) {
  let message = `Esta é a ${index}ª vez que essa string é exibida.`
  let printLn = parameterPrinter(message)

  console.log(printLn)
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
console.info('\n### Etapa 03 - Exercício: 04 ###\n ')

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

let stringsUpperCase = function (arrOfString = null) {
  let newArrOfString = []
  for (let i = 0; i < arrOfString.length; i++) {
    
    let item = arrOfString[i];
    const wordInUpperCase = item.toUpperCase()

    newArrOfString.push(wordInUpperCase)
  }
  return newArrOfString
}

let showNewArry = stringsUpperCase(millennialWords)

console.log(showNewArry)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/
console.info('\n### Etapa 03 - Exercício: 05 ###\n ')

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

function numberValueChecker(param = null) {

  let positiveNumberQuantity = 0
  let negativeNumberQuantity = 0

  for (let i = 0; i < param.length; i++) {
    const isPositiveNumber = param[i] > 0

    if (isPositiveNumber) {
      positiveNumberQuantity++
    }else{
      negativeNumberQuantity++
    }

  }

  return `O array "randomNumbers" possui ${param.length} números, sendo ${positiveNumberQuantity} positivos e ${negativeNumberQuantity} negativos.`

}

console.log(numberValueChecker(randomNumbers))
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
console.info('\n### Etapa 03 - Exercício: 06 ###\n ')

function getOddNumbers(arrOfValues) {
  let arrayOfOddNumbers = []
  for (let i = 0; i < arrOfValues.length; i++) {

    const number = arrOfValues[i]
    const isOddNumber = !(number % 2 === 0)

    if(isOddNumber){
      arrayOfOddNumbers.push(number)
    }
    
  }
  return arrayOfOddNumbers
}

console.log(
  getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/
console.info('\n### Etapa 03 - Exercício: 07 ###\n ')

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

let phrase = function(arrayOfStrings){
  let outputPhrase = []

  for (let index = 0; index < arrayOfStrings.length; index++) {
    outputPhrase.push(arrayOfStrings[index]())
  }
  return outputPhrase.toString()
}

console.log(phrase(functions))


console.log('\n |------------Correção!-----------| \n')

let sentence = ''
for (let i = 0; i < functions.length; i++) {
  
  const string = `${functions[i]()} `
  sentence += string

}

console.log(
  sentence,
  '\n'
)