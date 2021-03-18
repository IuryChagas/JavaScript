const btn = document.querySelector('button')

console.log(btn)

const ul = document.querySelector('ul')
const list = document.querySelectorAll('li')

console.log(list)

list.forEach(li => {
    li.addEventListener('click', event => {
        console.log('clicou em mim:', li)
        console.log(event.target)
        const clickedElement = event.target

        clickedElement.style.textDecoration = 'line-through'
        console.log('cliclou na li')
        clickedElement.remove()
        
    })
})

btn.addEventListener('click', () => {

   const li = document.createElement('li')
   console.log(li)
   li.textContent = 'Novo Item'
   ul.append(li)
})

ul.addEventListener('click', () => {
    console.warn('Event bubbling occurrence: Collateral effect at UL')
})