//
// .reduce() quando baseado no array original você precisar reduzir a algum outro tipo de dado.
// esses tipos podem ser: Object(), String(), Array(). etc..
// em resumo o .reduce() tem a versatilidade de gerar um output em outro tipo de dado.

console.info('############## .reduce() ##############')

console.info('## example 01')
const numberss = [21, 15, 60]

const sumResult = numberss.reduce( (accumulator, number) => {
    return accumulator + number
}, 0)

console.info(numberss)
console.info(`total: ${sumResult}`)


console.info('## example 02')

const phaseScores = [
    { name: 'Ivo Krik', score: 43 },
    { name: 'Marlon Ergon', score: 234 },
    { name: 'Iury Chagas', score: 137 },
    { name: 'Victor Hainosz', score: 209 },
    { name: 'Roger Junior', score: 16 },
    { name: 'Apoena Santana', score: 5 },
    { name: 'Vinicius Araujo', score: 195 },
    { name: 'Nicolas Plesant', score: 196 },
    { name: 'Iury Chagas', score: 59 },
    { name: 'Wendvan Gomes', score: 254 },
]

const iuryChagasScores = phaseScores.reduce((acc, player)=> {

    if (player.name === 'Iury Chagas') {
        acc += player.score
    }
    return acc

}, 0)

console.info('Total Scores: ', iuryChagasScores)
