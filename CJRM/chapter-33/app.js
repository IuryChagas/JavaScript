console.info(
    `
    \n:::::   EXERCISES CHAPTER 33   :::::
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

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/
section(1)

const getInverseOrder = stringParam => stringParam
    .split('')
    .reverse()
    .join('')

const stringsToInverseOrder = 'abcdefghi'
const numbersToInverseOrder = '123456789'

const stringsInReverseOrder = getInverseOrder(stringsToInverseOrder)
const numbersInReverseOrder = getInverseOrder(numbersToInverseOrder)

console.info(`\n #### Inverted strings #### \n`)

result(stringsInReverseOrder)
result(numbersInReverseOrder)

console.info(`\n #### Ordenated strings #### \n`)

const fixStringsOrder = getInverseOrder(stringsInReverseOrder)
const fixNumbersOrder = getInverseOrder(numbersInReverseOrder)

result(fixStringsOrder)
result(fixNumbersOrder)

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/
section(2)

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber = false

numbers.forEach(number => {
  if (number === 15) {
    foundNumber = true
  }
})

result(foundNumber)

const hasFifteenNumber = numbers.some( number => number === 15 )

result(hasFifteenNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/

section(3)

result('Weather App Project has been completed!')