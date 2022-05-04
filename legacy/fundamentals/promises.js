// As promises são ações assíncronas que podem produzir um valor em algum momento no código.
// Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código.

// O objeto das promises é o 'Promise', 'resolve' é o método que resolve uma promise.
// O then é o que faz ela poder ser executada em um ponto futuro.

let promise = Promise.resolve(4 + 8)

console.log('...\n algum outro código ...\n')

promise.then((value)=> console.log(`A soma é ${value}`))