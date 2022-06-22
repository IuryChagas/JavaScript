const paragraph = document.querySelector('p')

console.log(paragraph.innerText)

paragraph.innerHTML = `youtube:: `

console.log(paragraph.innerHTML)

paragraph.innerHTML += `Yoste - chihiro`

console.log(paragraph.innerHTML)

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

console.info(`\n            :::: atributo >> innertText ::::\n`)

paragraphs.forEach( p => console.log(p.innerText))

paragraphs.forEach( (paragraph, index) => {
    paragraph.innerText += ` [${index}] ( ͡❛ . ͡❛)`
    console.log(paragraph.innerText)
})

const div = document.querySelector('.content')

console.log(div)
console.log(div.innerHTML)

div.innerHTML = "<hr><h2>Nova tag adicionada!</h2>"

div.innerHTML += "<hr><h2>Nova tag incrementada!<br></h2>"

const names = ['Mitião', 'Tiudy', 'Jon Polack', 'Banguela']

 names.forEach( name => {
    return div.innerHTML += `<li>${name}</li>`
})

const link = document.querySelector('a')

console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://github.com/iurychagas')

const user = link.getAttribute('href')
console.log(user)

const userLinkValue = link.innerText = 'Profile: IuryChagas'
console.log(userLinkValue)

link.setAttribute('style', 'color: red; font-family: georgia; font-weight: bold')

console.log(div)

div.innerHTML += `<button>button</button>`

let btn = document.getElementsByTagName('button')

console.log(btn)


pr = document.querySelectorAll('p')

paragraph.setAttribute('class', 'success')
paragraph.setAttribute('style', 'color: blue; font-weight: bold; font-family: sans-serif')


let h3 = document.querySelector('h3')

console.log(h3)

h3.setAttribute('style', 'text-align: center;')

console.log(h3.style)
console.log(h3.style.color)

h3.style.backgroundColor = 'yellow'
h3.style.fontSize = '40px'
h3.style.fontFamily = 'arial'
h3.style.cursor = 'pointer'
h3.style.border = 'dashed purple'
h3.style.borderRadius = '.1em'
h3.style.border = ''
h3.style.boxShadow = '.15em .25em #99f'

const i = document.querySelector('i')
console.log(paragraph.classList)

i.classList.add('erro')
i.classList.remove('erro')
i.classList.toggle('success')
// i.classList.toggle('success')

const span = document.querySelectorAll('span')

console.log(span)

console.log('\n')
span.forEach( paragraph => {
    const hasSuccessWord = paragraph.textContent.includes('success')
    const hasErrorWord = paragraph.textContent.includes('error')
    if(hasSuccessWord){
        paragraph.classList.add('ok')
    }

    if(hasErrorWord){
        paragraph.classList.add('error')
    }
    console.log(paragraph.textContent)
})