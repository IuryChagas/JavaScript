console.info(
  `
  \n########################### EXPLANATION: Event bubbling and Event delegation ###########################
  
  `
)

console.info(
  `
  \n###########################     EXERCISES CHAPTER 16    ###########################

  `
)

/*
  01

  - Faça com que ao clicar em um dos elementos dentro da div, a mensagem  
    'Clicou na div.' não seja exibida no console.
*/
console.info("## Exercise >> 01")

const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)

elementsInsideDiv.forEach(element => {

  element.addEventListener('click', event => {
    event.stopPropagation()
    logMessage('Clicou no filho da div.')
  })

})

div.addEventListener('click', () => {
  logMessage('Clicou na div.')
})

/*
  02

  - No código acima, faça com que quando um filho da div for clicado, a mensagem  
    exibida no console seja "Clicou no NOME_DA_TAG_COM_LETRAS_MINÚSCULAS, filho
    da div.".
*/
console.info("## Exercise >> 02")

elementsInsideDiv.forEach(element => {
  element.addEventListener('click', event => {
    console.log(event.target.tagName.toLowerCase())
  })
})
/*
  03

  - No index.html, abaixo da div sem classe, insira um h2;
  - Faça com que a mensagem de clique na div e a mensagem de clique em algum
    filho da div, ao invés de ser exibida no console, seja inserida neste h2.
*/
console.info("## Exercise >> 03")

const container = document.querySelector('div')
const h2 = document.createElement('h2')
container.insertAdjacentElement('afterend', h2)

function logMessage(msg){
  return h2.textContent = msg
}

/*
  04

  - Faça com que quando o texto do h2 for copiado, a mensagem "Texto copiado!"  
    seja exibida no console.
*/
console.info("## Exercise >> 04")

h2.addEventListener('copy', event => {
  console.log("Texto copiado!")
})

/*
  05

  - Faça com que o movimento do mouse dentro da div com a classe "egg" substitua
    o texto que ela tem por 
    "Eixo X: COORDENADA_EIXO_X | Eixo Y: COORDENADA_EIXO_Y".
*/
console.info("## Exercise >> 05")

const egg = document.querySelector('.egg')

egg.addEventListener('mousemove', event => {
  egg.textContent =  `Eixo X: ${event.offsetX} | Eixo Y: ${event.offsetY}`
})

/*
  06

  - Modifique a cor do ovo para "lightgoldenrodyellow" quando o botão for 
    clicado.
*/

console.info("## Exercise >> 06")

const button = document.querySelector('button')

const changeEggColor = () => {
  egg.style.backgroundColor =  'lightgoldenrodyellow'
}

button.addEventListener('click', changeEggColor)

/*
  07

  - Se o array de pessoas abaixo conter, no mínimo, um(a) Front-end developer,
    exiba a mensagem abaixo no console.

    "O array people contém, no mínimo, um(a) Front-end developer."
*/
console.info("## Exercise >> 07")

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

people.some( ( { profession } )=> {
  const isSomePersonFrontendDeveloper = profession === 'Front-end developer'

  if (isSomePersonFrontendDeveloper) {
    console.log(`"O array people contém, no mínimo, um(a) ${profession}."`)
  }

})

