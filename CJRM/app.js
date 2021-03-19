const paragraph = document.querySelector('.copy-me')

console.log(paragraph)


paragraph.addEventListener('copy', ()=> {
    console.log('Texto copiado: ')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', event =>{

    let position = `X: ${event.offsetX}  |  Y: ${event.offsetY}`

    console.log(box.innerHTML = position)
})

document.addEventListener('wheel', event => {
    const pageX = event.pageX
    const pageY = event.pageY

    console.log(pageX, pageY)
})