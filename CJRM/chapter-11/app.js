console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 11   :::::::::::::::::::::::::::
    `
  )

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num } ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
01

- Utilize o array abaixo para exibir no console uma string com a seguinte formatação:

Segundo o site Omelete, os melhores filmes de 2019 são:
- NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
- NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
- NOME_DO_FILME, dirigido por DIRETOR_DO_FILME

- Todos os filmes e diretores do array devem constar na lista.
*/
section(1)

const best2019Movies = [
    { title: 'Parasita', directedBy: 'Bong Joon-ho' },
    { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
    { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
    { title: 'Entre Facas e Segredos', directedBy: 'Rian Johnson' },
    { title: 'Turma da Mônica: Laços', directedBy: 'Daniel Rezende' },
    { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
    { title: 'Klaus', directedBy: 'Sergio Pablos' },
    { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
    { title: 'Shazam', directedBy: 'David F. Sandberg' },
    { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
    { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
    { title: 'A Vida Invisível', directedBy: 'Karim Aïnouz' }
]

let message = `Segundo o site Omelete, os melhores filmes de 2019 são:`

best2019Movies.forEach(movie => {
    return message += `
    - ${movie.title}, dirigido por ${movie.directedBy}`
})

console.log(message)
/*
02

- No objeto abaixo, implemente um método que exibe a seguinte mensagem no console:

    Vídeos recentes de Roger Melo:
    Introdução ao TDD - Parte 02 | JavaScript | Jest
    Introdução ao TDD | JavaScript | Jest
    Higher-order Functions | JavaScript

- As 4 linhas da mensagem, podem ser exibidas separadamente.
*/
section(2)

const youtubeUser = {
    name: 'Roger Melo',
    chanelUrl: 'https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg',
    videos: {
        total: 111,
        recentVideos: [
            { title: 'Introdução ao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
            { title: 'Introdução ao TDD | JavaScript | Jest', length: '19:29' },
            { title: 'Higher-order Functions | JavaScript', length: '47:38' }
        ]
    },
    about: {
        description: '🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥',
        socialNetworks: {
            twitter: 'https://twitter.com/rogermelodev',
            gitHub: 'https://github.com/Roger-Melo'
        },
        country: 'Brasil'
    },
    getRecentVideos(){
        console.log(`Vídeos recentes de ${this.name}:`)

        const getVideoTitle = video => {
            const title = video.title
            console.log(title)
        }

        this.videos.recentVideos.forEach(getVideoTitle)
    }
}

youtubeUser.getRecentVideos()


/*
03

- Exiba o valor do PI no console.
*/
section(3)

result(Math.PI)

/*
04

- Arredonde o número que a constante abaixo armazena para 9 e exiba-o no console.
*/
section(4)
const firstNumber = 8.3

result(Math.ceil(firstNumber))
/*
05

- Arredonde o número que a constante abaixo armazena para 4, utilizando a forma padrão, e exiba-o no console.
*/
section(5)
const secondNumber = 3.5

result(Math.round(secondNumber))
/*
06

- Arredonde o número que a constante abaixo armazena para 8 e exiba-o no console.
*/
section(6)
const thirdNumber = 8.9

result(Math.floor(thirdNumber))
/*
07

- Exiba no console o número abaixo com a parte decimal removida.
*/
section(7)
const fourthNumber = 5.5

result(Math.trunc(fourthNumber))
/*
08

- A cada vez que o index.html for carregado, exiba no console um número aleatório de 0 à 10, incluindo 0 e 10.
*/
section(8)

result(Math.round(Math.random() * 10))
