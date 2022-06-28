console.info(
    `
    \n:::::   EXERCISES CHAPTER 17   :::::
    `
)

/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const form = document.querySelector('form')
const inputUsername = document.querySelector('#username')
const button = document.querySelector('button')
const paragraphUsernameFeedBack = document.createElement('p')
const paragraphSubmitFeedBack = document.createElement('p')


const invalidUsernameInfo = {
  paragraph: paragraphUsernameFeedBack,
  text: 'Seu username deve conter no mínimo 6 caracteres, apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback',
  previousSibling: inputUsername
}

const validUsernameInfo = {
  paragraph: paragraphUsernameFeedBack,
  text: 'Username válido =)',
  className: 'username-success-feedback ',
  previousSibling: inputUsername
}

const invalidSubmitInfo = {
  paragraph: paragraphSubmitFeedBack,
  text: 'Para efetivar o envio, insira um username válido',
  className: 'submit-help-feedback',
  previousSibling: button
}

const validSubmitInfo = {
  paragraph: paragraphSubmitFeedBack,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previousSibling: button
}

paragraphSubmitFeedBack.setAttribute('data-feedback', 'submit-feedback')

const usernameRegex = username => {
  const regexUsernamePattern = /^[a-zA-Z]{6,}$/
  return regexUsernamePattern.test(username)
}

const insertParagraphIntoDOM = paragraphInfo => {
  const { paragraph, text, className, previousSibling } = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
}

const removeSubmitParagraph = () => {
  const paragraphSubmitFeedBackExists = document.querySelector('[data-feedback="submit-feedback"]')
  
  if (paragraphSubmitFeedBackExists) {
    paragraphSubmitFeedBack.remove()
  }
}

const showUsernameInfo = event => {
  const inputValue = event.target.value
  const isUsernameValid = usernameRegex(inputValue)

  removeSubmitParagraph()

  if(!isUsernameValid){
    insertParagraphIntoDOM(invalidUsernameInfo)
    return
  }

  insertParagraphIntoDOM(validUsernameInfo)
}

inputUsername.addEventListener('input', showUsernameInfo)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const paragraph = document.createElement('p')

const showSubmitInfo = event => {
  event.preventDefault()

  const username = event.target.username.value

  if (!usernameRegex(username)) {
    insertParagraphIntoDOM(invalidSubmitInfo)
    return
  }

  insertParagraphIntoDOM(validSubmitInfo)
}

form.addEventListener('submit', showSubmitInfo)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const numbers = [1, 2, 3]

const some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    
    const item = arr[i]

    if(func(item)){
      return true
    }
  }

  return false
}

console.log(some(numbers, item => item > 2))
console.log(some(numbers, item => item === 0))

console.log(numbers.some(item => item > 2))
console.log(numbers.some(item => item === 0))
