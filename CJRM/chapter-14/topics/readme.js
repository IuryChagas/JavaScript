const article = document.querySelector('article')

console.log(article.children)

console.log(Array.from(article.children))

Array.from(article.children).forEach( element => {
    element.classList.add('article-element')
})

const title = document.querySelector('h2')


console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

const ul = document.querySelector('ul')
// ul.remove()

const button = document.querySelector('button')

button.addEventListener( 'click', () => {
    console.log('button it was clicked!')

    // option 01:
    // const value = 'novo item'
    // ul.innerHTML += `<li>${value}</li>`

    // option 02:
    const li = document.createElement('li')
    li.textContent = 'Novo Item'
    ul.prepend(li)    
})

button.addEventListener('mouseover', event => {
    button.style.cursor = 'pointer'
})

const li = document.querySelectorAll('li')

li.forEach( li => { 
    li.addEventListener('mouseover', event => {
        li.style.cursor = 'pointer'
    })

})

li.forEach( li => {
    li.addEventListener('click', event => {
        console.log(event, '\nli it was clicked!\n', event.target)
        li.style.textDecoration = 'line-through'
        event.target.remove()
    })
})
