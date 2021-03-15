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