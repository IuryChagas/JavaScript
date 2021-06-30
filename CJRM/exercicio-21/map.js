//
// .map() gera um NOVO ARRAY à partir do original com a 
//    MESMA QUANTIDADE DE ITEMS porem TRANSFORMADOS.
//
console.info('############## .map() ##############')

console.info(`
  ##### Quando utilizar o .map() ? ##### 
  > Quando é necessário obter um novo array porém com todos os itens transformados sem alterar o array original.
    
  console.info('## example 01')

      const arrayOfNums = [1, 2, 3, 4]
      const doubleNumbers = arrayOfNums.map( number => number * 2)
      console.log(doubleNumbers)

`)
const arrayOfNums = [1, 2, 3, 4]
const doubleNumbers = arrayOfNums.map( number => number * 2)
console.log(doubleNumbers)

console.info(' SALE! 50% off all items')
const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salesPrices = prices.map( price => {
  return {price: price / 2}
})
console.info(`Original prices: ${prices}`)
console.table(salesPrices)

console.info('## example 02')

const products = [
  { name: 'Mouse sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Teclado Bluetooth', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map( product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 }
  }
  return product
})

console.info('Original Price: ', products)
console.info('50% off: ', saleProducts)