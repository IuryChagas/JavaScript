/*
  01

  - Utilize o array abaixo para exibir no console uma string com a seguinte  
    formatação:
  
  Segundo o site Omelete, os melhores filmes de 2019 são:
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
  
  - Todos os filmes e diretores do array devem constar na lista.
*/
console.info('\n### Etapa 05 - Exercício: 01 ###\n ')

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

console.log(`\n## version 00\n\n`)
function paragraph(title, director){
  return `    - ${title}, dirigido por ${director}`
}

console.log(`Segundo o site Omelete, os melhores filmes de 2019 são:`)
for (let index = 0; index < best2019Movies.length; index++) {
  best2019Movies[index]

  let movieTitle = best2019Movies[index].title
  let moviesDirector = best2019Movies[index].directedBy

  let message = paragraph(`${movieTitle}`, `${moviesDirector}`).toString()

  console.log(message)

}

console.log(`\n## Refactoring 01 \n\n`)
console.log(`Segundo o site Omelete, os melhores filmes de 2019 são:`)
for (let iterator = 0; iterator < best2019Movies.length; iterator++) {
  let object = iterator

  let movie = best2019Movies[object].title
  let director = best2019Movies[object].directedBy

  console.log(`   - ${movie}, dirigido por ${director}`)
}

console.log(`\n## Refactoring 02 \n\n`)

console.log(`Segundo o site Omelete, os melhores filmes de 2019 são:`)

best2019Movies.forEach((movie) => {
  let title = movie.title
  let director = movie.directedBy

  console.log(`   - ${title}, dirigido por ${director}`)
})

console.log(`\n## Exercise correction:\n\n`)

let msg = `Segundo o site Omelete, os melhores filmes de 2019 são:`
let generateMsg = movie => {
  msg += `
    - ${movie.title}, dirigido por ${movie.directedBy}`
}

best2019Movies.forEach(generateMsg)

console.log(msg)

/*
  02

  - No objeto abaixo, implemente um método que exibe a seguinte mensagem no 
    console:

    Vídeos recentes de Roger Melo:
    Introdução ao TDD - Parte 02 | JavaScript | Jest
    Introdução ao TDD | JavaScript | Jest
    Higher-order Functions | JavaScript
  
  - As 4 linhas da mensagem, podem ser exibidas separadamente.
*/
console.info('\n### Etapa 05 - Exercício: 02 ###\n ')

const youtubeUser = {
  name: 'Roger Melo',
  chanelUrl: 'https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg',
  videos: {
    total: 111,
    recentVideos: [
        { title: 'Introdução ao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
        { title: 'Introdução ao TDD | JavaScript | Jest', length: '19:29' },
        { title: 'Higher-order Functions | JavaScript', length: '47:38' }
      ],
      showRecentVideos (){
        console.log(`\n## version 00\n\n`)
          console.log(`Vídeos recentes de Roger Melo:`)
          for (let i = 0; i < this.recentVideos.length; i++) {
            const videoTitle = this.recentVideos[i].title;
            console.log(videoTitle)    
          }

        console.log(`\n## Refactoring 01 \n\n`)
          console.log(`Vídeos recentes de Roger Melo:`)
          this.recentVideos.forEach(video => {
            console.log(video.title)
          })
      }
  },
  about: {
    description: '🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥',
    socialNetworks: {
      twitter: 'https://twitter.com/rogermelodev',
      gitHub: 'https://github.com/Roger-Melo' 
    },
  country: 'Brasil'
  },
  getRecentVideo(){
    console.log(`\n## Exercise correction:\n\n`)
    console.log(`Vídeos recentes de ${this.name}:`)
    let getTitleVideo = video => {
      console.log(video.title)
    }
    this.videos.recentVideos.forEach(getTitleVideo)
  }
}

youtubeUser.videos.showRecentVideos()
youtubeUser.getRecentVideo()

/*
  03

  - Exiba o valor do PI no console.
*/
console.info('\n### Etapa 05 - Exercício: 03 ###\n ')

console.log(Math.PI)


/*
  04

  - Arredonde o número que a constante abaixo armazena para 9 e exiba-o no  
    console.
*/
console.info('\n### Etapa 05 - Exercício: 04 ###\n ')

const firstNumber = 8.3

console.log(Math.ceil(firstNumber))
/*
  05

  - Arredonde o número que a constante abaixo armazena para 4, utilizando a  
    forma padrão, e exiba-o no console.
*/
console.info('\n### Etapa 05 - Exercício: 05 ###\n ')

const secondNumber = 3.5

console.log(Math.round(secondNumber))
/*
  06

  - Arredonde o número que a constante abaixo armazena para 8 e exiba-o no  
    console.
*/
console.info('\n### Etapa 05 - Exercício: 06 ###\n ')

const thirdNumber = 8.9

console.log(Math.floor(thirdNumber))
/*
  07

  - Exiba no console o número abaixo com a parte decimal removida.
*/
console.info('\n### Etapa 05 - Exercício: 07 ###\n ')

const fourthNumber = 5.5

console.log(Math.trunc(fourthNumber))

/*
  08

  - A cada vez que o index.html for carregado, exiba no console um número  
    aleatório de 0 à 10, incluindo 0 e 10.
*/
console.info('\n### Etapa 05 - Exercício: 08 ###\n ')

let randomNumber = Math.random()

console.log(Math.round(randomNumber * 10))