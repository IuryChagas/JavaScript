console.info(
  `
  \n###########################     EXERCISES CHAPTER 22   ###########################

  `
)
const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre do manhã', price: 5 },
  { name: 'O futuro da Humanidade', price: 10 },
  { name: 'Quem pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 },
]

const booksOnSale = books
  .filter(( { price } )=> price > 20)
  .map(( {name, price} )=> `O preço do livro '${name}' caiu para ${price} reais`)

console.table(booksOnSale)

