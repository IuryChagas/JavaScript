//
// .sort() MODIFICA o ARRAY original tendo como efeito colateral
//   a ordenação dos dados conforme condição.
//
console.info('############## .sort() ##############')


console.info(`\nexample 01: String()\n`)

const names = ['Chris', 'Bianca', 'Antony']

names.sort()
console.log(names)


console.info(`\nexample 02: Number()\n`)

const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort( (number01, number02)=> number02 - number01)
console.log(scores)


console.info(`\nexample 03: Object()\n`)

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 },
]

// theBigFamily.sort((item1, item2)=> {
//     if(item1.score > item2.score){
//         return -1
//     }else if(item2.score > item1.score){
//         return 1
//     } 
//     return 0
// })

theBigFamily.sort((player1, player2) => {
    return player2.score - player1.score
})

console.log(theBigFamily)