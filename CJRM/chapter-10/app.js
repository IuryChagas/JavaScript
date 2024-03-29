console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 10   :::::::::::::::::::::::::::
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

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
section(1)

const name = 'Justantino'

result(name)

/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
section(2)

const getAge = () => {
    let age = 23
    return age
}

// result(age)
result(getAge())
/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento. Inicialmente, deve receber um boolean indicando que o carro não está em movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
section(3)

const car = {
    name: `SUV3`,
    brand: `Lexus`,
    colors: [`Prata`, `Preto`, `Azul netuno`],
    isRunning: false,
    run(){
        this.isRunning = true
        return `${this.name} está em movimento`
    },
    stop() {
        this.isRunning = false
        return `${this.name} está parado`
    },
    getColorMessage() {
      const lastItem = this.colors[this.colors.length -1]
      const colors = this.colors.join(', ').replace(`, ${lastItem}`,` e ${lastItem}`)

        return `O ${this.name} está disponível nas cores ${colors}`
    }
}

result(car)
/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
section(4)
result(car.run())
/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
section(5)
result(car.stop())
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
section(6)
result(car.getColorMessage())
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
section(7)

result(`O carro é um ${car["brand"]} ${car["name"]}`)