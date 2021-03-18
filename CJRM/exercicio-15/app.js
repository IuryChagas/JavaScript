/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
console.info('\n### Etapa 05 - Exercício: 01 ###\n ')

let ul = document.querySelector('ul')

const lisOfUl = ul.children

const addVideoClass = li => {
  li.classList.add('video')
}

const convertToArray = Array.from(lisOfUl)

convertToArray.forEach(addVideoClass)

console.log(ul.children[0])
/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
console.info('\n### Etapa 05 - Exercício: 02 ###\n ')

const h2 = document.querySelector('h2')

console.log('O elemento Pai do <H2> é: ', h2.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
console.info('\n### Etapa 05 - Exercício: 03 ###\n ')

const h1 = document.querySelector('h1')

console.log('O elemento irmão do <h1> é: ', h1.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
console.info('\n### Etapa 05 - Exercício: 04 ###\n ')

console.log('O elemento irmão anterior da <ul> é: ', ul.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
console.info('\n### Etapa 05 - Exercício: 05 ###\n ')

let HTMLCollectionToArray = Array.from(lisOfUl)

const getEventClick = li => {
  li.addEventListener('click', ()=> {
    console.log(li)
  })
}

HTMLCollectionToArray.forEach(getEventClick)

// ## Refactoring 01

const showClickedLi = event =>{
  console.log(event.target)
}

const getClickTarget = li => {
  li.addEventListener('click', showClickedLi)
}

HTMLCollectionToArray.forEach(getClickTarget)
/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/
console.info('\n### Etapa 05 - Exercício: 06 ###\n ')

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')

button.addEventListener('click', () => {

  videos.forEach( ( { name }) => {

    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    let addVideoTitleAtList = li.textContent += `${name}`
    let addCssClass = li.classList.add('video')
    let addListAtUl = ul += ul.append(li)

    addVideoTitleAtList
    addCssClass
    addListAtUl

  })
  console.log(ul)

})

/*
  07 

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
console.info('\n### Etapa 05 - Exercício: 07 ###\n ')

let removeBody = ()=>{
  const body = document.querySelector('body')
  body.innerHTML = ''
}

h1.addEventListener('click', removeBody)
