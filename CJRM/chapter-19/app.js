console.info(
    `
    \n:::::   EXERCISES CHAPTER 19   :::::
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

  - Insira apenas o css do bootstrap no index.html.
*/
section(1)

console.info(`- [x]: Insira apenas o css do bootstrap no index.html.`)
/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

const message = `- [x]: Um segundo e meio se passaram desde que a página foi carregada`

const logMessage = message => {
  section(2)
  console.info(message)
}

setTimeout(logMessage, 1500, message)

setTimeout(console.log, 1500, '- [x]: test')

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

setTimeout(() => {
    section(3)
},1501)

let counterContainer = document.querySelector('.counter-container')
const initCounter = document.querySelector('.button-init-counter')
const stopCounter = document.querySelector('.button-stop-counter')

let counter = 0
let timer = 0

const incrementCounter = ()=> {
  const incrementedCounter = `${++counter}`
  counterContainer.textContent = incrementedCounter
}

const startCounter = () => {
    timer = setInterval(incrementCounter, 250)
}

const stopCounterEvent = () => {
  clearInterval(timer)
  counterContainer.textContent = 0
}

initCounter.addEventListener('click', event => {
    startCounter()
})

stopCounter.addEventListener('click', event => {
  stopCounterEvent()
})

/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/
setTimeout(() => {
    section(4)
},1502)


/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/