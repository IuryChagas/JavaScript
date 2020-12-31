// ### Calcular a quantidade do publico apenas dos filmes distribuidos pela Disney ###
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
// utilizando o filter() para selecionar apenas os distribuidos pela Disney.
const disneyMovies = topBrazilMovies
    .filter(({ distributedBy })=> distributedBy === 'Disney')

console.table(disneyMovies)

// utilizando o reduce() para calcular a quantidade do publico.
const totalAudience = topBrazilMovies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0)

console.log('Total Audience: ', totalAudience,'\n')


// ### Retornar a idade dos Cães convertida em idade humana ###

const pets = [
    { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
    { name: 'Jimy', age: 1, gender: 'Male', type: 'Cat' },
    { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
    { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
    { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' },
]
// retorna todos os atributos do tipo 'Dog'
const getDogs = ({ type }) => type === 'Dog';

const dogs = pets.filter(getDogs)

console.table(dogs)

// retorna os nomes e a conversão das idades
const convertToHumanAge = ({ name, age }) => ({
    name,
    convertedAge: age * 7 // 1 ano canino representa 7 em idade humana.
})
console.table(dogs.map(convertToHumanAge))