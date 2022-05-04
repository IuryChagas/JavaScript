console.info(
  `
  \n###########################   EXERCISES CHAPTER 24   ###########################

  `
)

/*
  01

  - Exiba no console um boolean indicando se o caractere ':' existe na string 
    abaixo.
*/
console.info("## Exercise >> 01")

const message = 'Próxima etapa: 10'
console.log(message.includes(':'))

/*
  02

  - Exiba no console um boolean indicando se o item '635' existe no array 
    abaixo.
*/
console.info("## Exercise >> 02")

const numbers = [979, 2673, 41, 77, 276, 554, 399, 385, 65, 726, 635, 833, 462]

const hasNumber635 = numbers.includes(635)

console.log(hasNumber635)

/*
  A partir daqui, vamos treinar nossas skills de refatoração.

  Antes de iniciar o refactoring abaixo, por precaução, versione (ou faça uma 
  cópia do) seu todo-list atual para que seja possível mais tarde voltar ao 
  estado em que ele está agora, se necessário.
*/

/*
  03

  - Refatore a implementação da remoção do to-do (li) da tela;
  - Tente implementar essa remoção sem "navegar pelo DOM" usando propriedades
    como a parentElement.
    
    Por que? 

    Se futuramente a marcação HTML da aplicação mudar, se o parentElement mudar, 
    o código que foi implementado na aula não funcionará.
*/
console.info("## Exercise >> 03")

/*
  04

  Algumas sugestões de refactoring
  
  - Isole em funções de responsabilidade única:
    - O código que adiciona os to-dos;
    - O código que filtra e adiciona as classes CSS nos to-dos.
*/
console.info("## Exercise >> 04")

console.log(`- [x] Refatore a implementação da remoção do to-do`)