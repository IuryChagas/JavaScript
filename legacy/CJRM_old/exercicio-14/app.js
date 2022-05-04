console.info(
  `
  \n########################### EXPLANATION: Intro to DOM ###########################
  
  `
)

const paragraph = document.querySelector('p')

console.log(paragraph)

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: red')

paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
  paragraph.innerText += ` Novo texto ${index +1}`
} )

const div = document.querySelector('.content')

div.innerHTML = `<h2> Novo H2 </h2>`

const people = ['Jessica', 'Karine', 'Pietra']

people.forEach( person => {
  div.innerHTML += `<p>${person}</p>`
})

const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

link.setAttribute('href','https://twitter.com/IuryChagas_')

link.innerText = 'Twitter do Iury Chagas'

console.info(
`
\n###########################     EXERCISES CHAPTER 14    ###########################

`
)
/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/
console.info("## Exercise >> 01")

const h1 = document.querySelector('h1')

h1.innerText = h1.innerText.toUpperCase()

console.log(h1.textContent = h1.textContent.toUpperCase())
/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/
console.info("## Exercise >> 02")

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

let ul = document.querySelector('.numbers')
const insertNumberIntoHTML = number => {
  ul.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumberIntoHTML)

console.log(ul)
/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/
console.info("## Exercise >> 03")

const list = document.querySelectorAll('.number')

const changeLiColor = li => {
  const isEvenNumber = Number(li.textContent) % 2 === 0

  if (isEvenNumber) {
    return li.style.color = 'lightblue'
  }

  li.style.color = 'pink'
}

list.forEach(changeLiColor)

console.log(list)
/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/
console.info("## Exercise >> 04")

const body = document.querySelector('body')

body.classList.add("body-background")

console.log(body)

/*
  05

  - Adicione o link 
    https://github.com/IuryChagas/JavaScript/tree/master/CJRM no href  
    do link do index.html.
*/
console.info("## Exercise >> 05")

const url = document.querySelector('a')

// url.href = 'https://github.com/IuryChagas/JavaScript/tree/master/CJRM'

url.setAttribute('href', 'https://github.com/IuryChagas/JavaScript/tree/master/CJRM')
url.setAttribute('class','link')
url.textContent = 'Github:: IuryChagas'

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/
console.info("## Exercise >> 06")

// console.log(url.href) or..
console.log(url.getAttribute('href'))

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/
console.info("## Exercise >> 07")

console.log(h1.style)

/*
  08

  - Remova a classe "body-background", do elemento body.
*/
console.info("## Exercise >> 08")

// body.setAttribute('class', '') or..

body.classList.remove('body-background')
console.log(' -[x] Remova a classe "body-background", do elemento body.')

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
console.info("## Exercise >> 09")

// ul.classList.toggle('link')

console.log('-[x] Se o link da página possuir uma classe "link", remova-a;')