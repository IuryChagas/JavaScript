console.info(
  `
  \n###########################   EXERCISES CHAPTER 29   ###########################

  `
)

/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/
console.info("## Exercise >> 01")

const getPokemon = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
    if (request.readyState === 4 && request.status === 404) {
      const error = JSON.parse(request.status)
      callback(error, null)
      return
    }
  })

  request.open('GET', url)
  request.send()
}
let pokemonName = 'bulbasaur'

getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, (error, data)=>{
  if (data) {
    const pokemon = data["name"].toUpperCase()
    console.log('Pokemon obtido: ', pokemon)
    pokemonName = 'charmander'
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, (error, data)=>{
      if (data) {
        const pokemon = data["name"].toUpperCase()
        console.log('Pokemon obtido: ', pokemon)
        pokemonName = 'squirtle'
        getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, (error, data)=>{
          if (data) {
            const pokemon = data["name"].toUpperCase()
            console.log('Pokemon obtido: ', pokemon)
            return
          }
          console.log('status: ', error, " - Não foi possível obter o Pokémon")
        })
        return
      }
      console.log('status: ', error, " - Não foi possível obter o Pokémon")
    })
    return
  }
  console.log('status: ', error, " - Não foi possível obter o Pokémon")
})

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa
        08;
    2) Pesquisar no MDN.

  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/
setTimeout(()=> console.info("## Exercise >> 02"), 500)

const map = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    return func(number)
  }
}

setTimeout(()=> {
  console.log(map([1, 2, 3], number => number * 2))
  console.log(map([1, 2, 3], number => number * 3))
}, 500)

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/
setTimeout(()=> console.info("## Exercise >> 03"), 510)

const person = {
  name: 'Iury',
  getName(){ return this.name }
}

setTimeout(()=> {
  console.log(person.getName())
}, 510)


/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/
setTimeout(()=> console.info("## Exercise >> 04"), 520)

{const x = 'x'}
const x = 'y'

/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/
setTimeout(()=> console.info("## Exercise >> 05"), 520)

const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`

setTimeout(()=> {
  console.log(
    getFullName({ firstName: 'Iury', lastName: 'Chagas' })
  )
}, 520)

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
setTimeout(()=> console.info("## Exercise >> 06"), 530)

const convertToHex = (color) => {
  
  const hexadecimalColors = {
    "black": '#000',
    "blue": '#0000FF',
    "green": '#008000',
    "violet": '#EE82EE',
    "pink": '#FFC0CB',
    "brown": '#A52A2A',
    "red": '#FF0000',
    "orange": '#FFA500',
    "yellow": '#FFFF00',
    "white": '#ffffff'
  }
  const hexadecimalColorMessage = `O hexadecimal para a cor ${color.toUpperCase()} é ${hexadecimalColors[color]}`
  const parameterNotFound = `Não temos o equivalente hexadecimal para ${color.toUpperCase()}`

  return hexadecimalColors[color] ? hexadecimalColorMessage : parameterNotFound
}

setTimeout(()=> {
  console.log(
    convertToHex("yellofw")
  )
}, 530)
/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/
setTimeout(()=> console.info("## Exercise >> 07"), 540)

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]

setTimeout(()=> {
  console.log(
    `:(`
  )
}, 540)