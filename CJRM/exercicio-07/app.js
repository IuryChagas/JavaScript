/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/
console.info("## Exercise >> 01")

console.log(true, false)
console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/
console.info("## Exercise >> 02")

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

if (!animals.includes('leão')) {
  console.log("Leão não existe no array animals.")
} else {
  console.log("Existe um leão no array animals.")
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/
console.info("## Exercise >> 03")

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let total = null
const limit = 400

for (let index = 0; index < randomNumbers.length; index++) {
  total += randomNumbers[index]

  if (total > limit) {
    console.log(`A soma ultrapassou ${limit}. Até aqui, o valor atual é ${total}`)
    break
  }

}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/
console.info("## Exercise >> 04")

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
let phrase = ``

for (let index = 0; index < sentence.length; index++) {
  const word = sentence[index] 
  if (word.includes('certeza')) {
    continue
  }
  phrase += word.concat(' ')
}

console.log(phrase)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/
console.info("## Exercise >> 05")

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]

let stringTypeQuantity = 0
let arrayOfStrings = []
let booleanTypeQuantity = 0
let arrayIterationQuantity = 0
let message = ``

for (let i = 0; i < randomValues.length; i++) {

  const item = randomValues[i]
  const isTypeOfString = typeof item === 'string'
  const isTypeOfBoolean = typeof item === 'boolean'

  if (stringTypeQuantity === 4) {
    break
  }

  if (isTypeOfString) {
    stringTypeQuantity++
    arrayOfStrings.push(item)
  }

  if (isTypeOfBoolean) {
    booleanTypeQuantity++
  }
  arrayIterationQuantity++
}
const lastItem = arrayOfStrings[arrayOfStrings.length -1]

message = `
3 informações sobre o array randomValues:
  - As primeiras 4 strings são ${arrayOfStrings.join(', ').replace(`${lastItem}`, ` e ${lastItem}`)};
  - Até que as primeiras 4 strings fossem iteradas, ${booleanTypeQuantity} booleans foram iterados;
  - O array foi iterado por ${arrayIterationQuantity} vezes.

`


console.log(message)

/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/
console.info("## Exercise >> 06")

const drinkType = 'água'
let drinkMessage = null

switch (drinkType) {
  case `água`:
    drinkMessage = `Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.`
    break
  case `refrigerante`:
    drinkMessage = `Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.`
    break
  case `suco`:
    drinkMessage = `Bebida produzida do líquido extraído de frutos.`
    break
  default:
    drinkMessage = `Bebida desconhecida.`
    break
}

console.log(drinkMessage)
/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/
console.info("## Exercise >> 07")

const number = 3

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

message = `O valor de "a" é ${number}`

switch (number) {
  case 0:
    console.log(message)
    break;
  case 1:
    console.log(message)
    break;
  default:
    console.log('O valor de "number" é qualquer número, exceto 0 e 1')
}