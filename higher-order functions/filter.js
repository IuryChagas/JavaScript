// EX1
const topBrazilMovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount / 20th Century' },
    { title: 'Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney' },
    { title: 'Vingadores: Guerra infinita', peopleAmount: 14_572_181, distributedBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal' },
    { title: 'Nada a Perder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes' },
    { title: 'Dez Mandamentos', peopleAmount: 11_259_536, distributedBy: 'Paris / Downtown Filmes' },
    { title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distributedBy: 'Zazen' },
    { title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney' },
    { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10_735_524, distributedBy: 'Embrafilme' }
]

console.log(topBrazilMovies.filter(function extractSpecifyItems({distributedBy}){
    if (distributedBy === 'Disney') {
        return distributedBy;
    }
}))

// ES06 with arrow function()=> and Destructuring assignment({ })
const disneyMovies = topBrazilMovies.filter(({ distributedBy })=> distributedBy === 'Disney')

console.table(disneyMovies)

// EX2
const randomNumbers = [03,15,36,25,99,37,7,63];

const selectedNumbersES05 = randomNumbers.filter(
    function filterNumber(randomNumbers){
        return randomNumbers > 30;
    }
);
console.log(selectedNumbersES05)

const selectedNumbersES06 = randomNumbers.filter(selectedNumbers => selectedNumbers < 30)
console.table(selectedNumbersES06)