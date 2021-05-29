console.info(
  `
  \n########################### EXPLANATION: Reserved word 'this' ###########################
  
  `
)

let user = {
  name: 'Anonymous undefined of names',
  age: 43,
  email: 'anonymouser@provider.undef',
  city: 'Boston',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login: function () {
      console.log('connected user!')
  },
  logout: function (){
      console.log('desconnected user!')
  },
  
  logBlogPosts () {
      console.log(`${this.name} wrote these recipes`)
      this.blogPosts.forEach( (article, index) => console.log(`>> ${index+1}: ${article}`))
  },
  // Para capturar o contexto onde o this é declarado é preciso utilizar `function declaration`
  getThisContextWithFunctionDeclaration: function() {
      console.log('get This Context wth "Function Declaration":'.toUpperCase(), this)
  },
  // O 'this' em Arrow Functions dentro de objetos referencia o contexto/escopo global.
  // por isso não é possível utilizar o 'this.' em 'arrow functions' para referenciar o escopo do objeto. 
  getContextWithArrowFunction: () => {
      console.log('get Context with "Arrow Function": '.toUpperCase(), this)
  },
  // Uma forma utilizar a combinação do this e uma sintax igual a arrow Function em objetos é:
  getThisContextWithShortcutFunctionDeclaration () {
      console.log('get this Context wth "Function Declaration shortcut": '.toUpperCase(), this)
  }
}

console.table(user)
user.logBlogPosts()

user.getThisContextWithFunctionDeclaration(),
user.getContextWithArrowFunction(),
console.log("This refer a global scope:".toUpperCase(), this),
user.getThisContextWithShortcutFunctionDeclaration()

console.info(
    `
    \n###########################     EXERCISES CHAPTER 11    ###########################
    
    `
)

/*

  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
console.info("## Exercise >> 01")

const name = `MyName`
/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
console.info("## Exercise >> 02")

const getAge = () => {
  let name = 'My name'
  return console.log(name)
}

getAge()

/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
console.info("## Exercise >> 03")

const car = {
  "name": 'phantom extended',
  "brand": 'rolls royce',
  "colors": ['purple','silver','black'],
  "isRunning": false,
  run(){
      this.isRunning = true
      return `isRunning: ${this.isRunning} >> O ${this.name} está em movimento`
  },
  stop(){
    this.isRunning = false
    return `isRunning: ${this.isRunning} >> O ${this.name} está parado`
  },
  getColorMessage(){
    return `O ${this.name} está disponível nas cores ${this.colors.join(', ').replace(`, ${this.colors[this.colors.length -1]}`,` e ${this.colors[this.colors.length -1]}`)}`
  }
}

/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
console.log(
  car.run()
)

/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
car['isRunning'] = false
console.log(
  car.stop()
)
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(
  car.getColorMessage()
)
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log(
  `O carro é um ${car['brand']} ${car['name']}`
)