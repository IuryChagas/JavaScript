// Example 01: sort() method with Strings

const names = ['Zenilda', 'Beatriz', 'Aleph', 'Melissa']

names.sort()
console.log(names.sort())

// Example 02: sort() method with Numbers

const scores = [10, 50, 20, 5, 35, 70, 45]

const ascendingOrdering = scores.sort( (score1, score2)=> score1 - score2)

console.log('\n#####################\nAscending Ordering\n#####################\n')
console.log(ascendingOrdering)

const descendingOrdering = scores.sort( (score1, score2)=> score2 - score1)

console.log('\n#####################\nDescending Ordering\n#####################\n')
console.log(descendingOrdering)

// Example 03: sort() method with Objects

const theBigFamilty = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]

const conventionalCondition = theBigFamilty.sort( (item1, item2) => {

    if(item2.score > item1.score) return 1
    if (item2.score == item1.score) return 0

    return -1
})

console.log(conventionalCondition)

const shorthandFunction = theBigFamilty.sort((item1, item2) => item2.score - item1.score)

console.log(shorthandFunction)

// Method chaining

const books = [
    {name: 'Código Limpo', price: 30 },
    {name: 'O milagre da manhã', price: 5 },
    {name: 'Alice no País das Maravilhas', price: 10 },
    {name: 'Quem Pensa Enriquece', price: 50 },
    {name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
    .filter( ({ price }) => price > 20)
    .map( ({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais`)

console.log(booksOnSale)
