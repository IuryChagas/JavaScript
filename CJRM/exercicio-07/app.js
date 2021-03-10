console.log()
const scores = [50,0,25,0,30,100,20,10]

for (let i = 0; i < scores.length; i++) {
  if(scores[i] === 0){
    continue
  }

  console.log(`Sua pontuação: ${scores[i]}`)

  if(scores[i] === 100){
    console.log(`\nParabéns, você atingiu a pontuação máxima\n`)
    break
  }
}
console.log('\n----------------\n')

const grade = 'E'

switch (grade) {
  case 'A':
    console.log(`Você tirou um ${grade}`)
    break;
  case 'B':
    console.log(`Você tirou um ${grade}`)
    break;
  case 'C':
    console.log(`Você tirou um ${grade}`)
    break;
  case 'D':
    console.log(`Você tirou um ${grade}`)
    break;
  case 'E':
    console.log(`Você tirou um ${grade}`)
    break;
  default:
    console.log(`Nota inválida!`)
}

console.log('\n----------------\n')
/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/
console.info('\n### Etapa 02 - Exercício: 01 ###\n ')

console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

console.info('\n### Etapa 02 - Exercício: 02 ###\n ')

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo', '']

if (!animals.includes('leão')) {
  console.log("Leão não existe no array animals.")
}else{
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
console.info('\n### Etapa 02 - Exercício: 03 ###\n ')

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]

let limit = 400
let sum = 0

for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i]
  if (sum > limit) {
   console.log(`A soma ultrapassou ${limit}. Até aqui, o valor atual é ${sum}.`)
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
console.info('\n### Etapa 02 - Exercício: 04 ###\n')

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']

let modifiedSentence = ''

for(var i = 0; i < sentence.length; i++){
  let key = sentence[i]
  if (key !== 'certeza') {
    modifiedSentence += `${key} `
  }
}

console.log(modifiedSentence)

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
console.info('\n### Etapa 02 - Exercício: 05 ###\n')

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]

let amountArrayIteration = 0
let amountStringType = 0
let amountBooleanType = 0
let firstFourStrings = []
let lastItem = firstFourStrings.length -1
for (let i = 0; i < randomValues.length; i++) {
  let isTypeOfString = typeof randomValues[i] === typeof String()
  let isTypeOfBoolean = typeof randomValues[i] === typeof Boolean()
  let newItem = randomValues[i]

  if(isTypeOfString){

    amountStringType += 1
    firstFourStrings.push(newItem)

    if (firstFourStrings.length === 4) {
      break
    }
  }else if (isTypeOfBoolean) {
    amountBooleanType  += 1
  }
  amountArrayIteration += 1
}

let concatenationOfArray = firstFourStrings.join(', ').toString().replace(`, ${lastItem}`, ` e ${lastItem}`)

console.log(`
  3 informações sobre o array randomValues:
  - As primeiras 4 strings são ${concatenationOfArray};
  - Até que as primeiras 4 strings fossem iteradas, ${amountBooleanType} booleans foram iterados;
  - O array foi iterado por ${amountArrayIteration} vezes.
`)
/*
  06

  - Descomente a constante abaixo e atribua a ela algum tipo de bebida. Exemplo:  
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
console.info('\n### Etapa 02 - Exercício: 06 ###\n\n')

const drinkType = `café`

switch (drinkType) {
  case 'água':
    console.log('Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.')
    break
  case 'refrigerante':
    console.log('Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.')
    break
  case 'suco':
    console.log('Bebida produzida do líquido extraído de frutos.')
    break
  default:
    console.log('Bebida desconhecida.')
    break
}
/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/
console.info('\n### Etapa 02 - Exercício: 07 ###\n\n')

const a = 0
let msg = `O valor de "a" é `
// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch (a) {
  case 0:
    console.log(msg,`${a}`)
    break
  case 1:
    console.log(msg,`${a}`)
    break
  default:
    console.log(msg,'qualquer número, exceto 0 e 1')
    break
}