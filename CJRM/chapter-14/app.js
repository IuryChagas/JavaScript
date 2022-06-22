console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 14   :::::::::::::::::::::::::::
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
- Obtenha a ul do index.html e adicione em todos os elementos filhos dela, uma classe 'video';
- Exiba no console os elementos filhos da ul com a classe já inserida.
*/
section(1)

const li = document.querySelectorAll('li')
const addClassVideo = li => {
    // li.setAttribute('class', 'video')
    li.classList.add('video')
}

li.forEach(addClassVideo)

result(li[0].getAttribute('class'))

/*
02
- Usando a propriedade adequada, descubra quem é o elemento pai do h2 e exiba-o no console;
*/
section(2)

const h2 = document.querySelector('h2')

result(h2.parentElement)

/*
03
- Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
section(3)

const h1 = document.querySelector('h1')

result(h1.nextElementSibling)

/*
04
- Descubra quem é o irmão anterior da ul e exiba-o no console;
*/
section(4)

const ul = document.querySelector('ul')

result(ul.previousElementSibling)

/*
05
- Quando um clique acontecer em alguma das lis, faça com que a li clicada seja exibida no console.
*/
section(5)

li.forEach( li => {
    li.addEventListener( 'click', event => {
        // event.target
        // event.target.textContent
        // li.textContent
        console.log(event.target.textContent)
    })
})

/*
06
- Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
- Cada nome deve estar dentro de uma li.
*/
section(6)

const videos = [
    {
        name: 'Como o promise all funciona | JavaScript',
        length: '00:01:52'
    },
    {
        name: 'Como refatorar um for loop | JavaScript',
        length: '00:04:18'
    },
    {
        name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
        length: '00:02:55'
    }
]

const button = document.querySelector('button')

button.addEventListener('click', event => {
    
    videos.forEach(video => {
        const title = video.name
        const newLI = document.createElement('li')
        newLI.textContent += title
        ul.append(newLI)
    })
})

/*
07
- Se um clique no h1 acontecer, faça com que todos os elementos dentro do body sejam removidos.
*/
section(7)

let body = document.querySelector('body')

h1.addEventListener('click', event => {
    while(body.hasChildNodes()) {
        //...
    }
})