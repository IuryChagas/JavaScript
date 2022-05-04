//
// .filter() gera um NOVO ARRAY apenas com os ITEMS SELECIONADOS mediante a condição.
//
console.info('############## .filter() ##############')

console.info('Only numbers  greater than 37')
const randomNumberss = [36, 99, 37, 63]
const numberssGreaterThan37 = randomNumberss.filter( num => num > 37)
console.info(randomNumberss)
console.info(numberssGreaterThan37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true },
]

const premiumUsers = users.filter( user => user.premium )

console.log('Premium User: ', premiumUsers)