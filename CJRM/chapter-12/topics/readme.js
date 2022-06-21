console.info(
    `
    \n:::::::::::::::::::::::::::   TOPICS CHAPTER 12   :::::::::::::::::::::::::::

    `
)
console.info(`\n::: querySelector & querySelectorAll | NodeList[]\n
`)

const paragraph = document.querySelector('p.error')
const getErrorDiv = document.querySelector('div.error')
const documentTitle = document.querySelector("body > h1")
const paragraphs = document.querySelectorAll('p')
console.log(paragraph)
console.log(getErrorDiv)
console.log(documentTitle)
console.log(paragraphs)

console.log('::: NodeList.index[0] >> ', paragraphs[0])
const urlNodeListDocument = `https://developer.mozilla.org/en-US/docs/Web/API/NodeList`
console.log(`Node List Document: `, urlNodeListDocument)

console.log(`::: Using forEach Statement on NodeList object :::`)
paragraphs.forEach( p => console.log(p))

console.log(`::: Selecting by css class :::`)
const errors = document.querySelectorAll('.error')

console.log(errors)

console.info(`\n::: getElementById & getElementsByClassName | HTMLCollection<>\n
`)

const urlHTMLCollectionDocument = `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection`
console.log(`HTML Collection Document: `, urlHTMLCollectionDocument)

console.info(`\n::: getElementsByTagName | HTMLCollection<>\n
`)