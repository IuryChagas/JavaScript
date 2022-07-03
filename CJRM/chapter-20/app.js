console.info(
    `
    \n:::::   EXERCISES CHAPTER 20   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/
section(01)

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumbers = randomNumbers.filter(number => number % 2 !== 0)

result(getOddNumbers)
/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/
section(02)

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersLowerThan501 = crazyNumbers.reduce((acc, item)=>{
    acc += item < 501
    return acc
}, 0)

result(numbersLowerThan501)
/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/
section(03)

const numbers = [5, 7, 3]

result(numbers.map( number => number * 4))
/*
  04

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/
section(04)

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

const getGameTitles = cart.map(({ name }) => {
    console.log(` - ${name}`)
})

/*
  05

  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/
section(05)

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const moviesEarlierThan2000 = tarantinoMovies.filter(({ name, release })=> {
    if (release < 2000) {
        return console.log(`- Movie: ${name}, release year: ${release}`)
    }
})

/*
  06

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/
section(06)

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const tvShowsTitle = tvShows.map(({ name })=> {
    return name
})

result(tvShowsTitle)
/*
  07

  - Observe os loops da sua versão do quiz e considere se, baseado no que foi visto nessa aula, você deve refatorá-los.
*/
section(07)

result(`- [x] atividade já realizada no quiz.`)
