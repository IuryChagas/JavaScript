console.info(
    `
    \n:::::   EXERCISES CHAPTER 28   :::::
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

- Faça requests para a https://pokeapi.co/, da seguinte forma:
- Encapsule o código do request em uma função que recebe os parâmetros "url" e "callback";
- Se o request estiver ok, exiba no console 'Pokémon obtido: NOME_DO_POKEMON';
- Se o request não estiver ok, exiba no console 'Não foi possível obter o Pokémon';
- Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
- Os requests devem ser sequenciais. Ou seja, um request só deve ser executado quando o request anterior for finalizado.
*/
section(1)

const getPokemon = (url, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=> {
        const success = request.readyState === 4 && request.status === 200
        const unsuccess = request.readyState === 4

        if(success) {
            callback(null, request.responseText)
            return
        }
        if (unsuccess) {
            callback(request, null)
            return
        }
    })

    request.open('GET', url)
    request.send()
}

const logPokemonData = (error, data) => {
    if(error){
        const errorData     = {
            statusCode: error.status,
            errorDetail: error.responseText,
            description: "Não foi possível obter o Pokémon"
        }
        console.log(errorData)
        return
    }

    const response = JSON.parse(data)
    const { name } = response
    console.log(`Pokémon obtido: ${name.toUpperCase()}`)
}

const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const bulbasaur = getPokemonURL(1)
const charmander = getPokemonURL(4)
const squirtle = getPokemonURL(7)

getPokemon(bulbasaur, (error, data)=>{
    logPokemonData(error, data)
    getPokemon(charmander, (error, data)=>{
        logPokemonData(error, data)
        getPokemon(squirtle, logPokemonData)
    })
})

/*
02

- Há algumas etapas, implementamos o método some, do zero;
- Neste exercício, seu desafio será criar o método map, do zero;
- Implemente uma função "map" que possui a mesma funcionalidade do método map original;
- Você não poderá utilizar o método map de array, embutido na linguagem;
- A assinatura da invocação desta função deve ser:
- map([1, 2, 3], number => number * 2) // [2, 4, 6];
- map([1, 2, 3], number => number * 3) // [3, 6, 9];
- Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
        - "O método map" - Aula 01-02 da etapa 08;
        - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 08;
    2) Pesquisar no MDN.
*/

const map = (arr, func) => {
    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        newArray.push(func(item))
    }
    return newArray
}
const multiplyBy2 = map([1, 2, 3], number => number * 2) // [2, 4, 6]
const multiplyBy3 = map([1, 2, 3], number => number * 3) // [3, 6, 9]

setTimeout(()=>{
    section(2)
    result(multiplyBy2)
    result(multiplyBy3)
},1000)


/*
03

- Descomente o console.log abaixo e faça o this do método referenciar o objeto person.
*/

const person = {
    name: 'MitiS Hafan',
    getName: function () {
        return this.name
    }
}

setTimeout(()=>{
    section(3)
    result(person.getName())
},1100)

/*
04

- Descomente a 2ª const abaixo e salve este arquivo;
- Um erro será exibido no console;
- Faça as duas const x coexistirem, sem modificar o nome de qualquer uma delas.
*/

const x = 'x'

const getX = () => {
    const x = 'y'
    return x
}

setTimeout(()=>{
    section(4)
    console.log('result >>', x, getX())
}, 1150)
/*
05

- O código abaixo está funcionando. Refatore-o da forma mais concisa que você conseguir.
*/

const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`

setTimeout(()=>{
    section(5)
    result(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))
},1200)

/*
06

- Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por parâmetro. Exemplo: 'red';
- Escolha 5 cores que serão convertidas do nome da cor para o seu equivalente hexadecimal (pode ser qualquer tom);
- Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for, retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre a mensagem 'Não temos o equivalente hexadecimal para COR';
- Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
const convertToHex = colourName => {
    const colourOptions = {
        "white": '#fff',
        "black": '#000',
        "red": '#ff0000',
        "blue": '#0000ff',
        "green": '#008000',
        "yellow": '#ffff00',
        "orange": '#ffa500',
        "pink": '#800080'
    }

    const logHexadecimalColourMessage = `O hexadecimal para a cor ${colourName} é ${colourOptions[colourName]}`
    const logFeedbackMessage = `Não temos o equivalente hexadecimal para ${colourName.toUpperCase()}`

    return colourOptions[colourName] ? logHexadecimalColourMessage : logFeedbackMessage
}

const colors = ['green', 'pink', 'orange', 'redd', 'wite', 'blue', 'purple', 'seila']
setTimeout(()=>{
    section(6)
    colors.forEach( color => result(convertToHex(color)))
}, 1200)

/*
07

- Através do array abaixo, gere um objeto com a frequência de idades das pessoas;
- Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por diante.

Resultado desejado: { 18: 3, 19: 2, 20: 1 }

Dica: pesquise por Computed Property Names.
*/

const people = [
    { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]

const getAverageAges = (acc, { age }) => {
    acc[age] = acc[age] + 1 || 1
    return acc
}

const agesFrequency = people.reduce(getAverageAges, {})
 
setTimeout(()=>{
    section(7)
    console.log(agesFrequency)
},1250)