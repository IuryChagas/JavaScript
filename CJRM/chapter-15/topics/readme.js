const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const button = document.querySelector('button')


lis.forEach( li => {
    li.addEventListener('mouseover', ()=> {
        li.style.cursor = `pointer`
    })
    
    // li.addEventListener('click', event => {
    //     console.log('Clicou na <li>')
    //     event.stopPropagation()
    //     event.target.remove()
    // })
})

button.addEventListener('mouseover', ()=> {
    button.style.cursor = `pointer`
})

button.addEventListener('click', event => {
    const li = document.createElement('li')
    li.textContent = `New Item`
    ul.append(li)
})

ul.addEventListener('click', event => {
    // console.log(`Clicou na <ul>`)
    console.log(event)
    console.log(event.target)
    const clickedElement = event.target.nodeName

    if(clickedElement === "LI") {
        console.log(`item deleted >> `, event.target.firstChild.data)
        event.target.remove()
    }

})

console.info(
    `
    \n:::::   DOM - Document Object Model   :::::
    `
)

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
    console.log(`pageX: ${event.pageX}`)
    console.log(`pageY: ${event.pageY}`)
    box.innerHTML = `X: ${event.offsetX} | Y: ${event.offsetY}`
})

box.addEventListener('mousemove', event => {
    box.style.cursor = 'pointer'
})

const body = document.querySelector('body')
body.addEventListener('copy', event => {
    console.log(`${event.target.textContent}`)
})

body.addEventListener('wheel', event => {
    console.log(event.pageY)
})

const btn = document.querySelector('.btn')
const close = document.querySelector('.popup-close')
const popup = document.querySelector('.popup-wrapper')
// const popUpLink = document.querySelector('.popup-link')

btn.addEventListener('click', event => {
    popup.style.display = 'block'
})
console.log(btn)

// close.addEventListener('click', event => {
//     popup.style.display = 'none'
// })

popup.addEventListener('click', event => {
    const classNamcOfClickedElement = event.target.classList.value
    const closingClasses = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopUp = closingClasses.includes(classNamcOfClickedElement)

    if(shouldClosePopUp){
        console.log(classNamcOfClickedElement)
        popup.style.display = 'none'
    }
})