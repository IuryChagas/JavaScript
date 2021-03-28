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
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.

  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const form = document.querySelector('form')
const input = document.querySelector('#username')
const button = document.querySelector('button')
const paragraphUserNameFeedback = document.createElement('p')
const paragraphSubmitFeedback = document.createElement('p')

paragraphSubmitFeedback.setAttribute('data-feedback', 'submit-feedback')

const insertParagraphIntoDOM = paragraphInfo => {
  const {paragraph, text, className, AdjacentElementRefer} = paragraphInfo

  paragraph.setAttribute('class', className)
  paragraph.textContent = text
  AdjacentElementRefer.insertAdjacentElement('afterend', paragraph)
}

const invalidSubmitInfo = {
  paragraph: paragraphSubmitFeedback,
  text:'Por favor, insira um username válido',
  className:'submit-help-feedback',
  AdjacentElementRefer: button
}

const validSubmitinfo = {
  paragraph: paragraphSubmitFeedback,
  text: 'Dados enviados!',
  className: 'submit-success-feedback',
  AdjacentElementRefer: button
}

const invalidUserNameInfo = {
  paragraph: paragraphUserNameFeedback,
  text: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback',
  AdjacentElementRefer: input
}

const validUserNameInfo = {
  paragraph: paragraphUserNameFeedback,
  text: 'Username válido!',
  className: 'username-success-feedback',
  AdjacentElementRefer: input
}

const removeSubmitParagraph = () => {

  const cssSelectorReference = '[data-feedback="submit-feedback"]'
  const paragraphSubmitFeedbackExists = document.querySelector(cssSelectorReference)

  if (paragraphSubmitFeedbackExists) {
    paragraphSubmitFeedbackExists.remove()
  }

}

const testUserName = inputValue => {
  return /^[a-zA-Z]{6,}$/.test(inputValue)
}

const showUserNameInfo = event => {

  const isUserNameValid = testUserName(event.target.value)

  removeSubmitParagraph()

  // ** ##### Outra forma de obter o mesmo resultado #####

  event.target.insertAdjacentElement('afterend', paragraphUserNameFeedback)

  if (!isUserNameValid) {

    insertParagraphIntoDOM(invalidUserNameInfo)
    return
  }

  insertParagraphIntoDOM(validUserNameInfo)
}

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

const showSubmitInfo = event => {
  event.preventDefault()

  const isUserNameValid = testUserName(input.value)

  if (!isUserNameValid) {

    insertParagraphIntoDOM(invalidSubmitInfo)
    return
  }

  insertParagraphIntoDOM(validSubmitinfo)
}

input.addEventListener('input', showUserNameInfo)
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
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa 6;
    2) Pesquisar no MDN.

  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index])) {
        return true
    }
  }
  return false
}

console.log(some([0,1,2,3,4], item => item === 2))
console.log(some([5,6,7,8,9], item => item === 19))


  // **

  // paragraphUserNameFeedback.setAttribute('data-feedback', 'username-feedback')
  // const feedbackParagraph = document.querySelector('[data-feedback="username-feedback"]')

  // if (feedbackParagraph) {
  //   feedbackParagraph.remove()
  // }