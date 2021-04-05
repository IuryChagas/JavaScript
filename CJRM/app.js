const numbers = [1, 2, 3]

console.info('## Array original ##')
console.log(numbers)

console.info('## Array Modificado por .map() ##')
const doubleNumbers = numbers.map( item => item * 2)
console.log(doubleNumbers)

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProduct = products.map(product => {
    if (product.price >= 30) {
        return {
            name: product.name,
            price: product.price / 2
        }
    }
    return product
})

console.info("## Original Object ##")
console.log(products)

console.info("## New Object wth .map() ##")
console.log(saleProduct)