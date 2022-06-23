console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 15   :::::::::::::::::::::::::::
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
  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/
section(1)

const div = document.querySelector('div')

div.addEventListener('click', ()=> {
    result('Clicou na div!')
})

/*
  02
  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/
section(2)

div.addEventListener('click', event => {
    const tag = event.target.nodeName
    console.log(tag)
    result(`Clicou no <${tag}>, filho da div.`)
})

/*
  03
  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/
section(3)
const h2 = document.querySelector('h2')

div.addEventListener('click', event => {
    const tag = event.target.nodeName
    h2.textContent = `Clicou no <${tag}>, filho da div.`
})

/*
  04
  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/
section(4)

h2.addEventListener('copy', () => {
    result(`Texto copiado!`)
})

/*
  05
  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/
section(5)

const eggTag = document.querySelector('.egg')

eggTag.addEventListener('mousemove', event => {
    eggTag.textContent = `Eixo X: ${event.offsetX} | Eixo Y: ${event.offsetY}`
    result(`Eixo X: ${event.offsetX} | Eixo Y: ${event.offsetY}`)
})

/*
  06
  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/
section(6)

const button = document.querySelector('button')

button.addEventListener('click', () => {
    eggTag.style.backgroundColor = `lightgoldenrodyellow`
    result(eggTag)
})

/*
  07
  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/
section(7)

const people = [
  { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
  { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
  { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
  { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
  { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
  { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
  { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
  { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
  { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
]

let message = ``

people.some( employee => {
  const hasFrontEndDeveloper = employee.profession === `Front-end developer`

  if (hasFrontEndDeveloper) {
    message = `O array people contém, no mínimo, um(a) Front-end developer.`
  }
})

result(message)
