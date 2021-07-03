// console.info(
//   `
//   \n###########################   EXERCISES CHAPTER 27   ###########################

//   `
// )

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

const returnNumber = num => num < 5

const lesserThanFive = numbers.filter(returnNumber)

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

let totalPrice = prices.reduce((totalPrice, number)=> totalPrice += number, 0)

setTimeout(()=> console.log(`Preço total: ${totalPrice}`), 2400)

/*
   05

   - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
   - Não insira `car.color = azul`.
*/
setTimeout(()=> console.info("\n## Exercise >> 05 "), 2500)

let car = { color: 'amarelo' }

car["color"] = 'Azul'

setTimeout(()=> console.log(car), 2500)

/*
  06

   - Crie uma função que recebe 3 argumentos;
   - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
     deve ser invocada com 3 argumentos' deve ser retornada;
   - Se todos os argumentos forem passados, retorne a string 'A função foi 
     invocada com 3 argumentos'.
*/
setTimeout(()=> console.info("\n## Exercise >> 06 "), 2600)

const functionTest = (arg1 = undefined, arg2 = undefined, arg3 = undefined)=> {

  const requiredArguments = [arg1, arg2, arg3]

  return requiredArguments.reduce((msg, arg) => {
    return arg == undefined ? msg = 'A função deve ser invocada com 3 argumentos' : msg = 'A função foi invocada com 3 argumentos'
  }, '')
  
}

setTimeout(()=> console.log(functionTest()), 2600)

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
  addBook (quantity) {

    if (quantity <= (this.spaces - this.booksIn)) {

      this.booksIn += quantity
      return `Já há ${this.booksIn} livros na caixa`
    }

    if (quantity > (this.spaces - this.booksIn) && (this.spaces - this.booksIn) !== 0) {

      if (this.spaces - this.booksIn === 1) {
        return `Só cabe mais ${this.spaces - this.booksIn} livro`
      }
      return `Só cabem mais ${this.spaces - this.booksIn} livros`
    }
    if(this.spaces - this.booksIn === 0) {
      return "A caixa já está cheia"
    }

  }
}

setTimeout(()=> console.log(
  booksBox.addBook(3)
), 2900)

setTimeout(()=> console.log(
  booksBox.addBook(5)
), 2900)

setTimeout(()=> console.log(
  booksBox.addBook(2)
), 2900)

setTimeout(()=> console.log(
  booksBox.addBook(2)
), 2900)