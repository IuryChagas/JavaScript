console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 13   :::::::::::::::::::::::::::
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

- Faça com que o texto do h1 do index.html seja exibido com todas as letras maiúsculas.
*/
section(1)

let title = document.querySelector('h1')

const titleInUpperCase = title.textContent.toLocaleUpperCase()

title.textContent = titleInUpperCase

result(titleInUpperCase)

/*
02

- Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
- Cada número deve estar dentro de uma <li> com a classe "number".
*/
section(2)

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55]

let ul = document.querySelector('ul')

const insertNumbersIntoUL = number => {
    ul.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumbersIntoUL)

result(insertNumbersIntoUL)
/*
03

- Modifique as cores dos números dentro da ul da seguinte forma:
- Se o número é par, ele deve ser exibido na cor "lightblue";
- Se o número é ímpar, exiba-o na cor "pink".
*/
section(3)

const li = document.querySelectorAll('li')

const addConditionalColor = li => {
    li.style.fontWeight = `bold`

    const number = Number(li.textContent)
    const evenNumber = number % 2 === 0

    if (evenNumber) {
        li.style.color = `lightblue`
        return
    }

    li.style.color = `red`
}

li.forEach(addConditionalColor)

result(addConditionalColor)
/*
04

- Adicione a classe "body-background" no corpo do index.html;

P.s: a classe "body-background" já está declarada no style.css.
*/
section(4)

// const body = document.querySelector('body')
const body = document.body

body.classList.add('body-background')

result(body.className)

/*
05

- Adicione o link https://github.com/IuryChagas/JavaScript/tree/master/CJRM no href do link do index.html.
*/
section(5)

const urlSource = `https://github.com/IuryChagas/JavaScript/tree/master/CJRM`

const url = document.querySelector('a')

url.setAttribute('href', urlSource)
url.setAttribute('target', '_blank')

result(url)

/*
06

- Exiba o novo valor do atributo href do link no console.
*/
section(6)

result(url.getAttribute('href'))

/*
07

- Exiba, no console, um objeto com todas as propriedades CSS que podem ser manipuladas via JS no h1.
*/
section(7)

result(title.style)

/*
08

- Remova a classe "body-background", do elemento body.
*/
section(8)

body.removeAttribute('class', 'body-background')

/*
09

- Se o link da página possuir uma classe "link", remova-a;
- Não utilize o método remove() para fazer isso.
*/
section(9)

const a = document.querySelector('a')

a.classList.toggle('link')

result(a)
