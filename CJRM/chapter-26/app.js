console.info(
    `
    \n:::::   EXERCISES CHAPTER 26   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')

setTimeout(() => {
    section(1)
    result(`Async process it's done!`)
}, 1000)

console.log('Linha 5')
console.log('Linha 6')
console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting (name) {
    console.log(`olá, ${name}`)
}

setTimeout( ()=> {
    section(2)
    const x = (callback, name = `Iury Chagas`) => callback(name)
    
    x(logGreeting)
}, 1200)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const numbersLessThanFive  = numbers.filter(getLessThanFive)

setTimeout(()=>{
    section(3)
    console.log(numbersLessThanFive)
}, 1250)

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
let totalPrice = 0

const getTotalPrice = (acc, number) => acc += number

const totalSum = prices.reduce( getTotalPrice, 0 )

for (let i = 0; i < prices.length; i++) {
  totalPrice += prices[i]
}
setTimeout(() => {
    section(4)
    console.log(` Preço total: ${totalPrice}`)
    result(totalSum)
}, 1300)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }
car["color"] = 'Azul'

const secondCar = car
secondCar.color = 'Black'

setTimeout(()=> {
    section(5)
    result({car, secondCar})
}, 1350)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi invocada com 3 argumentos'.
*/

const myFunc = (param1, param2, param3) => {
    const isSomeParametersUndefined = [param1, param2, param3].includes(undefined)
    const warningMessage = 'A função deve ser invocada com 3 argumentos'
    const successMessage = 'A função foi invocada com 3 argumentos'
    
    return isSomeParametersUndefined ? warningMessage : successMessage
}

setTimeout(()=>{
    section(6)
    result(myFunc("null", "false"))
}, 1355)

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0
}

booksBox.addBooks = booksQuantity => {
    const fixPluralOrSingular = (pluralWord, singularWord, correlation) => correlation === 1 ? pluralWord : singularWord

    let { spaces } = booksBox
    let availableSpaces = 0

    const hasAvailableSpaces = spaces - booksBox.booksIn > 0
    if (hasAvailableSpaces) {
        availableSpaces = spaces - booksBox.booksIn
    }
    
    
    const unavailableSpaces = booksQuantity > availableSpaces && availableSpaces != 0
    if (unavailableSpaces) {
        const book = fixPluralOrSingular('livro', 'livros', availableSpaces)
        const cabe = fixPluralOrSingular('cabe', 'cabem', availableSpaces)
        
        return `Só ${cabe} mais ${availableSpaces} ${book}`
    }

    
    const hasSpacesAvailable = availableSpaces > 0 && availableSpaces <= spaces
    if (hasSpacesAvailable) {
        booksBox.booksIn += booksQuantity
        const book = fixPluralOrSingular('livro', 'livros', booksBox.booksIn)
        return `Já há '${booksBox.booksIn}' ${book} na caixa`
    }

    return `A caixa já está cheia`
}

setTimeout( ()=> {
    section(7)
    result(booksBox.addBooks(4))
    result(booksBox.addBooks(3))
}, 1360)

