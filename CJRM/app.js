const link = document.querySelector('a')

console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://br.linkedin.com/in/iurychagas')

console.log(link.getAttribute('href'))

const paragraphAttr = document.querySelector('p')

console.log("Elemento HTML:", paragraphAttr)
console.log("Valor do elemento:", paragraphAttr.innerText)
console.log("Classe CSS:", paragraphAttr.getAttribute('class'))

console.log('\n::: Alterando o atributo do element HTML :::')
paragraphAttr.setAttribute('class', 'success')

console.log("\nparagraphAttr.setAttribute('class', 'success')")

console.log('\nAntiga classe: .error | Nova classe .'+paragraphAttr.getAttribute('class'))

let title = document.querySelector('h1')

console.log(title)

title.style.color = 'blue'
title.style.fontSize = '4.5em'
title.style.textAlign = 'center'
title.style.fontFamily = 'sans-serif'
title.style.textShadow = '15px 2px 12px grey'