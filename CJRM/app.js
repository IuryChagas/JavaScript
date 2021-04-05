const numbers = [1, 2, 3]


const sumNumbers = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.info("## Soma dos números de um Array ##")
console.log(sumNumbers)

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerTotalScores = phaseScores.reduce((accumulator, phaseScores) => {
    if (phaseScores.name === 'Roger Melo') {
        accumulator += phaseScores.score
    }

    return accumulator
}, 0)


console.info("## Soma da pontuação apenas de um Jogador ##")
console.log(rogerTotalScores)