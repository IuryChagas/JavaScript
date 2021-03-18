const article = document.querySelector('article')

console.log("article.children:", typeof article.children)
console.log(article.children)

console.log("article.children:", typeof Array.from(article.children))
console.log(Array.from(article.children))


Array.from(article.children).forEach( element => {
    element.classList.add('article-element')
})

const titleH2 = document.querySelector('h2')

console.log('Elemento Irmão do H2: ', titleH2.nextElementSibling)
console.log('Elemento Pai do H2: ', titleH2.parentElement.parentElement)
console.log('Elemento Irmão do Elemento pai do H2:', titleH2.parentElement.nextElementSibling)