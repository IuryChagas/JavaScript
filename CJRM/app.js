const paragraph = document.querySelector('p')
console.log(paragraph.innerText)

paragraph.innerText += ' Texto adicionado via Script'

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText += ` Novo texto ${index + 1}`
})

const div = document.querySelector('.content')

div.innerHTML = '<h2>Novo h2</h2>'

console.log(div.innerHTML)


const people = ['Cristina', 'Grabriella', 'Hauro']

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})