console.info(
    `
    \n:::::   TOPICS CHAPTER 20   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Topic ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

// Boilerplate para um caso de uso do map()
result('map(): ')

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

section(1)

const salePrices = products.map( ({ name, price }) => {
    if (price >= 30) {
        price = price / 2
        return { name, price }
    }

    return { name, price }

})

console.log(products, salePrices)

// Boilerplate para um caso de uso do filter()
result('filter(): ')

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

section(2)

const getUsersPremium = users.filter( user => user.premium )

result(getUsersPremium)

// Boilerplate para um caso de uso do reduce()
result('reduce(): ')

const phaseScores = [
    { name: 'Melanie Scarlet', score: 337 },
    { name: 'Iury Chagas', score: 43 },
    { name: 'Arthur Silva', score: 234 },
    { name: 'Wellington Castro', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Melanie Scarlet', score: 167 },
    { name: 'Iury Chagas', score: 137 },
    { name: 'Arthur Silva', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Wellington Castro', score: 133 }
]

section(3)

const iuryScore = phaseScores.reduce( (accumulator, phaseScore) => {
    if (phaseScore.name === 'Iury Chagas') {
        return accumulator += phaseScore.score
    }
    return accumulator
}, 0)

result(iuryScore)
