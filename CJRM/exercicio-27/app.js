console.info(
  `
  \n###########################   EXERCISES CHAPTER 27   ###########################

  `
)

console.info("## Exercise >> 01")

/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')

setTimeout(()=> console.log('Linha 4 <-- Callback'), 1000)

console.log('Linha 5')

setTimeout(()=> console.log('Linha 6 <-- Callback'), 1500)

console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/
setTimeout(()=> console.info("\n## Exercise >> 02 "), 2000)

function logGreeting (name) {
  console.log(`olá, ${name}`)
}
const x = () => {
  setTimeout(()=> logGreeting('Iury'), 2000)
}

x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/
setTimeout(()=> console.info("\n## Exercise >> 03 "), 2100)

const numbers = [3, 4, 10, 20]

const getLessThanFive = num => num < 5

const lesserThanFive = numbers.filter(getLessThanFive)

setTimeout(()=> console.log(lesserThanFive), 2200)

/*
  04

  - Refatore o código abaixo.
*/
setTimeout(()=> console.info("\n## Exercise >> 04 "), 2200)

const prices = [12, 19, 7, 209]

// for (let i = 0; i < prices.length; i++) {
//   totalPrice += prices[i]
// }

const getTotalPrice = (totalPrice, price) => totalPrice += price
let totalPrice = prices.reduce(getTotalPrice, 0)

setTimeout(()=> console.log(`Preço total: ${totalPrice}`), 2400)

/*
   05

   - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
   - Não insira `car.color = azul`.
*/
setTimeout(()=> console.info("\n## Exercise >> 05 "), 2500)

let car = { color: 'amarelo' }

let secondCar = car
secondCar["color"] = 'Azul'

setTimeout(() => console.log(secondCar), 2500)

/*
  06

   - Crie uma função que recebe 3 argumentos;
   - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
     deve ser invocada com 3 argumentos' deve ser retornada;
   - Se todos os argumentos forem passados, retorne a string 'A função foi 
     invocada com 3 argumentos'.
*/
setTimeout(()=> console.info("\n## Exercise >> 06 "), 2600)

const myFunction = (param1, param2, param3)=> {

  const requiredArguments = [param1, param2, param3]

  return requiredArguments.includes(undefined)
    ? 'A função deve ser invocada com 3 argumentos'
    : 'A função foi invocada com 3 argumentos'

}

setTimeout(()=> console.log(myFunction('', ()=>{})), 2600)

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

setTimeout(()=> console.info("\n## Exercise >> 07 "), 2700)

let booksBox = {
    spaces: 5,
    booksIn: 0,
    addBooks (quantity){
      const { spaces } = booksBox

      const isBoxFilled = this.booksIn === spaces
      const boxSpacesAreNotEnough = spaces < this.booksIn + quantity

      const getPluralOrSingular = (quantity, singular, plural) => {
        return quantity === 1 ? singular : plural
      }

      const getAvailableSpacesMessage = (spaces, booksIn) => {
        let availableSpaces = spaces - booksIn
        const bookPluralOrSingular = getPluralOrSingular(availableSpaces, `livro`, `livros`)
        const fitPluralOrSingular = getPluralOrSingular(availableSpaces, `cabe`, `cabem`)
        return `Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`
      }

      if (isBoxFilled) {
        return `A caixa já está cheia`
      }

      if (boxSpacesAreNotEnough) {
        return getAvailableSpacesMessage(spaces, this.booksIn)
      }

      this.booksIn += quantity

      const bookPluralOrSingular = getPluralOrSingular(this.booksIn, 'livro', 'livros')

      return `Já há ${this.booksIn} ${bookPluralOrSingular} na caixa`
    }
}

const customConsoleLog = (BooksQuantityToAdd) => {
 
  setTimeout(()=> console.log(
    booksBox.addBooks(BooksQuantityToAdd)
  ), 2900)
  
  setTimeout(()=> console.log(
    booksBox
  ), 2900)

}

customConsoleLog(7)
customConsoleLog(4)
customConsoleLog(2)
customConsoleLog(1)
customConsoleLog(2)