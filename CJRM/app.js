// Exemplo 1: Ordenando por strings
const names = ['Christian','Alfredo', 'Beatriz', 'Edson']

names.sort()

console.log(names)

// Exemplo 2: Ordenando Objetos

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => {
    if (item1.score > item2.score) {
        return -1
    }else if (item2.score > item1.score) {
        return 1
    }
    return 0
})

console.log(theBigFamily)


// Exemplo 3: Ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((score1, score2) => score1 - score2)

console.log(scores)