console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 05   :::::::::::::::::::::::::::
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
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/
section(1)

const fruits = ['morango', 'maçã', 'mamão']
let fruitName = ``

const hasPineapple = fruits.includes(`abacaxi`)
const hasPear = fruits.includes(`pera`)

let message = `A string "fruitName" existe no array fruits.`

if(hasPineapple) {
    fruitName = `abacaxi`
    result(message.replace('fruitName', `${fruitName}`))
}else if(hasPear){
    fruitName = `pera`
    result(message.replace('fruitName', `${fruitName}`))
}else{
    result(`Nem pera nem abacaxi existem no array "fruits".`)
}


/*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/
section(2)

const hour = 23

const isMorning = hour > 0 && hour < 12 
const isAfternoon = hour >= 12 && hour <= 18

if(isMorning){
    result(`Bom dia!`)
}else if(isAfternoon){
    result(`Boa tarde!`)
}else {
    result(`Boa noite!`)
}

/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/
section(3)

const age = 142
let ticketTypeMessage = null
const isChild = age <= 7
const isOlder = age >= 65

if ( isChild || isOlder) {
    ticketTypeMessage = `Para você, a entrada é grátis!`
    result(ticketTypeMessage)
}else {
    ticketTypeMessage = `A entrada é R$ 30,00.`
    result(ticketTypeMessage)
}

/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/
section(4)

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
let numbersBetween11And90 = []

for (let num = 0; num < numbers.length; num++) {
  
  const number = numbers[num]
  const isNumberBetween11And90 = number >= 11 && number <= 90

  if (isNumberBetween11And90) {
    numbersBetween11And90.push(number)
  }

}

result(numbersBetween11And90)

/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/
section(5)

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

let booleans = 0
let nums = 0
let strings = 0

for (let item = 0; item < crazyArray.length; item++) {

  const typeOfItem = typeof crazyArray[item]
  const isItemABoolean = typeOfItem === typeof Boolean()
  const isItemANumber = typeOfItem === typeof Number()
  
  if (isItemANumber) {
    nums++
  } else if(isItemABoolean){
    booleans++
  } else {
    strings++
  }

}

result(`"O crazyArray tem ${booleans} booleans, ${nums} números e ${strings} strings."`)
/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/
section(6)

const randomNumbers = [73, 4, 67, 10, 31, 58]
const oddNumbers = []
const evenNumbers = []

for (let num = 0; num < randomNumbers.length; num++) {

  let number = randomNumbers[num]
  const isEvenNumber = number % 2 === 0

  if (isEvenNumber) {
    evenNumbers.push(number)
  }else {
    oddNumbers.push(number)
  }

}

const lastOddNumber = oddNumbers[oddNumbers.length -1]
const lastEvenNumber = evenNumbers[evenNumbers.length -1]

const oddNumbersString = `${oddNumbers.join(', ').replace(`, ${lastOddNumber}`, ` e ${lastOddNumber}`)}`
const evenNumbersString = `${evenNumbers.join(', ').replace(`, ${lastEvenNumber}`, ` e ${lastEvenNumber}`)}`

result(`Numeros ímpares: ${oddNumbersString}. Números pares: ${evenNumbersString}.`)
