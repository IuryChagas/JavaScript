let paragraph = document.querySelector('p')

// console.log(paragraph)
// console.log(paragraph.classList)

paragraph.classList.add('success')

paragraph.classList.remove('success')

const paragraphs = document.querySelectorAll('p')
 paragraphs.forEach( paragraph => {
    console.log(paragraph.textContent)

    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error')
    }

    if(paragraph.textContent.includes('success')){
        paragraph.classList.add('success')
    }
 })

 const title = document.querySelector('h1')

 // o método .toggle('') verifica se à a classe no elemento, caso negativo..
 // ele adiciona tal classe.
title.classList.toggle('test')

// Mas caso o elemento html já tenha tal classe, o método faz o efeito inverso
// ele remove a classe
title.classList.toggle('test')