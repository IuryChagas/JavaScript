console.info(
    `
    \n:::::   EXERCISES CHAPTER 23   :::::
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

  - Exiba no console um boolean indicando se o caractere ':' existe na string abaixo.
*/
section(1)

const message = 'Próxima etapa: 10'

result(message.includes(':'))

/*
  02

  - Exiba no console um boolean indicando se o item '635' existe no array abaixo.
*/
section(2)

const numbers = [979, 2673, 41, 77, 276, 554, 399, 385, 65, 726, 635, 833, 462]

const number635Exist = numbers.includes(635)

result(number635Exist)

/*
  A partir daqui, vamos treinar nossas skills de refatoração.

  Antes de iniciar o refactoring abaixo, por precaução, versione (ou faça uma 
  cópia do) seu todo-list atual para que seja possível mais tarde voltar ao 
  estado em que ele está agora, se necessário.
*/

/*
  03

  - Refatore a implementação da remoção do to-do (li) da tela;
  - Tente implementar essa remoção sem "navegar pelo DOM". Ou seja, sem usar 
    propriedades como a parentElement.
    
    Por que? 

    Se futuramente a marcação HTML da aplicação mudar, se o parentElement mudar, 
    o código que foi implementado não funcionará.
    
    Dica: pesquise por dataset e atributos data.
*/

/*
  04

  Algumas sugestões de refactoring
  
  - Isole em funções de responsabilidade única:
    - O código que adiciona os to-dos;
    - O código que filtra e adiciona as classes CSS nos to-dos.
*/
