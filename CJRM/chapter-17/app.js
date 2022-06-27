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
const input = document.querySelector('input')
const feedbackLabel = document.createElement('p')

const usernameValidation = input => {
  const regexUsernamePattern = /^[a-zA-Z]{6,}$/
  return regexUsernamePattern.test(input)
}

const customSuccessFeedback = (input, label, message) => {
  input.style.border = `0.1rem solid green`
  input.style.backgroundColor = `#01e90321`
  label.setAttribute('class', 'username-success-feedback')
  label.textContent = message
}

const customErrorFeedback = (input, label, message) => {
  input.style.border = `0.1rem solid darkorange`
  input.style.backgroundColor = `#e9470121`
  label.setAttribute('class', 'username-help-feedback')
  label.textContent = message
}

const feedbackMessage = (feedback, input, label, message) => {
  if (feedback === `success`) {
    customSuccessFeedback(input, label, message)
    return
  }
  customErrorFeedback(input, label, message)
}

const usernameStatusChecker = (status) =>  console.log(status)

form.addEventListener('submit', event => event.preventDefault())

form.username.addEventListener('keyup', event => {
  const inputValue = event.target.value
  const isAValidUsername = usernameValidation(inputValue)
 
  input.insertAdjacentElement('afterend', feedbackLabel)

  usernameStatusChecker(isAValidUsername)

  if(isAValidUsername){
    const message = `Username válido =)`
    feedbackMessage('success', input, feedbackLabel, message)
    usernameStatusChecker(true)
    return
  }

  const message = `Seu username deve conter no mínimo 6 caracteres, apenas letras maiúsculas e/ou minúsculas`
  feedbackMessage('error', input, feedbackLabel, message)
  usernameStatusChecker(false)
})

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

form.addEventListener('submit', event => {
  const inputValue = event.target.value
  const isAValidUsername = usernameValidation(inputValue)

  if (isAValidUsername) {
    const message = "Dados enviados =)"
    feedbackMessage('success', input, feedbackLabel, message)
    return
  }

  if (!isAValidUsername) {
    const message = "Por favor, insira um username válido"
    feedbackMessage('error', input, feedbackLabel, message)
    return
  }
})

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

