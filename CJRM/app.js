const btn = document.querySelector('button')

console.log(btn)

btn.addEventListener('click', () => {
    console.log('clicou no botão')
})

const list = document.querySelectorAll('li')

console.log(list)

list.forEach(li => {
    li.addEventListener('click', event => {
        console.log('clicou em mim:', li)
        console.log(event.target)
        const clickedElement = event.target

        clickedElement.style.textDecoration = 'line-through'
    })
})