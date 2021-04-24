/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/
console.info('\n### Etapa 11 - Exercício: 01 ###\n ')

console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log(' ... ')
setTimeout(() => console.log('Linha 4 - Callback concluído!'), 2000)
console.log('Linha 5')
console.log(' ... ')
setTimeout(() => console.log('Linha 6 - Callback concluído!'), 1000)
console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/
console.info('\n### Etapa 11 - Exercício: 02 ###\n ')

function logGreeting (name) {
  console.log(`olá, ${name}`)
}
setTimeout( name => {
  name = 'Iury Chagas'
  logGreeting(name)
}, 3000)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/
console.info('\n### Etapa 11 - Exercício: 03 ###\n ')

const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const lesserThanFive = numbers.filter(getLessThanFive)

console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/
console.info('\n### Etapa 11 - Exercício: 04 ###\n ')

const prices = [12, 19, 7, 209]
let totalPrice = 0
const getTotalPrice = (acc, price, _) => acc + price

totalPrice = prices.reduce(getTotalPrice, 0)

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/
console.info('\n### Etapa 11 - Exercício: 05 ###\n ')

let car = { color: 'amarelo' }

let { color } = car

color = 'Azul'

console.log("color: ", color, "| obj car.color: ", car)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

console.info('\n### Etapa 11 - Exercício: 06 ###\n ')


const myFunc = (arg1, arg2, arg3) => { 
  const isSomeParameterUndefined = [arg1, arg2, arg3].includes(undefined)

  return !isSomeParameterUndefined 
  ? 'A função foi invocada com 3 argumentos'
  : 'A função deve ser invocada com 3 argumentos'

}

console.log(myFunc())

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
console.info('\n### Etapa 11 - Exercício: 07 ###\n ')

let booksBox = {
  spaces: 5,
  booksIn: 0,
  add (num) {
    if (num + this.booksIn > this.spaces && this.booksIn === this.spaces) {
      return console.log(`A caixa já está cheia!`)
    }

    if (num + this.booksIn <= this.spaces) {
      this.booksIn += num

      if (this.booksIn === 1) {
        return console.log(`Já há ${this.booksIn} livro na caixa!`)
      }

      return console.log(`Já há ${this.booksIn} livros na caixa!`)
    }
    if (num + this.booksIn > this.spaces || this.spaces < this.booksIn) {

      if (this.spaces - this.booksIn === 1) {
        return console.log(`Só cabe mais ${this.spaces - this.booksIn} livro`)
      }
      return console.log(`Só cabem mais ${this.spaces - this.booksIn} livros`)
    }
  }

}

let newBooks = booksBox.add(1)
    // newBooks = booksBox.add(2)
    // newBooks = booksBox.add(1)
console.log(booksBox)

