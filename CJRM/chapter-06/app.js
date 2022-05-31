console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 06   :::::::::::::::::::::::::::
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

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/
section(1)

console.log(true, false)

console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/
section(2)

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

if(!animals.includes('leão')) {
  result('Leão não existe no array animals.')
}else {
  result('Existe um leão no array animals.')
}

!animals.includes('leão') ? result('Leão não existe no array animals.') : result('Existe um leão no array animals')

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/
section(3)

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let total = 0
const limit = 400
for(let i = 0; i < randomNumbers.length; i++){
  let number = randomNumbers[i]
  total += number

  if(total > limit){
    result(`A soma ultrapassou ${limit}. Até aqui, o valor atual é ${total}.`)
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
section(4)

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']

const wordExist = sentence.indexOf('certeza') > -1
const removeWord = sentence.splice(sentence.indexOf('certeza'), 1)

if (wordExist) removeWord

result(sentence.join(' '))

/* Option 2 */

let newSentence = ''

for(let i = 0; i < sentence.length; i++){
  const word = sentence[i]

  if(word === 'certeza'){
    continue
  }

  newSentence += `${word} `
}

result(newSentence)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/
section(5)

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]

let booleansAmount = 0
let stringsAmount = 0
let totalIterations = 0
let firstFourStrings = []

for (let i = 0; i < randomValues.length; i++) {
  const value = randomValues[i]
  const typeOfValue = typeof value
  const isItemAString = typeOfValue === typeof ''
  const isItemABoolean = typeOfValue === typeof Boolean()

  if (stringsAmount === 4) {
    break
  }
  
  if(isItemAString){
    stringsAmount++
    firstFourStrings.push(value)
  }
  
  if (isItemABoolean) {
    booleansAmount++
  }

  totalIterations++
}

const lastItem = firstFourStrings[firstFourStrings.length -1]
const fourStrings = firstFourStrings.join(', ').replace(`, ${lastItem}`, ` e ${lastItem}`)

const message = `\n
3 informações sobre o array randomValues:
  - As primeiras 4 strings são ${fourStrings}.
  - Até que as primeiras 4 strings fossem iteradas, ${booleansAmount} booleans foram iterados.
  - O array foi iterado por ${totalIterations} vezes.
`
result(message)

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
section(6)

const drinkType = 'cerveja'
let drinkMessage = null

switch (drinkType) {
  case 'água':
    drinkMessage = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.'
    break;
  case 'refrigerante':
    drinkMessage = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.'
    break;
  case 'suco':
    drinkMessage = 'Bebida produzida do líquido extraído de frutos.'
    break;
  default:
    drinkMessage = 'Bebida desconhecida.'
    break;
}

result(drinkMessage)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/
section(7)

const number = 2

let numberMessage = `O valor de "number" é ${number}`

switch (number) {
  case number === 0:
    break;
  case number === 1:
    break;
  default:
    numberMessage = numberMessage.replace(`${number}`, ' qualquer número, exceto 0 e 1')
    break;
}

result(numberMessage)
