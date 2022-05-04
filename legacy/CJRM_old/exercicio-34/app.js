console.info(
  `
  \n###########################   EXERCISES CHAPTER 34   ###########################

  `
)

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
console.info("## Exercise >> 01")

const reverseString = string => string.split('').reverse().join('')

console.log(
  reverseString('123')
)

const getReversedString = string => string.split('').reduce((acc, char) => char + acc, '')

console.log(
  getReversedString('Pindamonhangaba')
)

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/
console.info("## Exercise >> 02")

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
// let foundNumber = false

// numbers.forEach(number => {
//   if (number === 15) {
//     foundNumber = true
//   }
// })

// console.log(foundNumber)

const foundNumber = numbers.includes(15)
console.log( foundNumber )

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/

console.info("## Exercise >> 03")

console.log('- [x] refatoração concluída')