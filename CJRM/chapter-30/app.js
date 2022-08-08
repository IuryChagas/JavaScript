console.info(
    `
    \n:::::   EXERCISES CHAPTER 30   :::::
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

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário do GitHub.
*/
section(1)

const githubUserName = 'iurychagas'

fetch(`https://api.github.com/users/${githubUserName}`)
    .then( response => response.json() )
    .then( userData => console.log(userData))
    .catch(result)
/*
  02

  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersDivisibleBy2Or3 = numbers.filter( number => (number % 2 === 0) || (number / 3 === 3) )

setTimeout( ()=> {
    section(2)
    result(numbersDivisibleBy2Or3)
}, 1000)

/*
  03

  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de  cada sílaba de uma palavra falada, como se você estivesse falando em  código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

const natalia = ['Na', 'tá', 'lia']
const roger = ['Ro','ger']
const iury = ['I','u','ry']
const rafaela = ['Ra', 'fa', 'e', 'la']

const namesInSylables = [natalia, roger, iury, rafaela]

const getPNames = namesInSylables.map( namesInSylables => {
    const pName = namesInSylables.reduce((acc, syllable) => {
        acc += 'P' + syllable
        return acc
    }, "")

    return pName
})
const pName = iury.reduce((acc, syllable) => {
    acc += 'P' + syllable
    return acc
}, "")


setTimeout( ()=> {
    section(3)
    getPNames.forEach( pName => result(pName))
}, 1010)

/*
  04

  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.

  Dica: pesquise pelo método split.
*/
const mainName = 'Roger'
const logMessageName = mainName.split('').reduce( (acc, char, index)=> {
    acc += `- ${char} é a ${index +1}ª do nome\n`
    return acc
}, "")

setTimeout( ()=> {
    section(4)
    console.log(logMessageName)
}, 1020)
/*
  05

  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.

  Dica: pesquise pelo método Object.keys().
*/
const obj = {
    name: String,
    lastname: String,
    age: Number
}

setTimeout( ()=> {
    section(5)
    console.log(Object.keys(obj))
}, 1040)
/*
  06

  - Implemente uma função que retorna as ocorrências de um determinado valor em um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º argumento e o número 1 é passado como 2º argumento,
    a função deve retornar 2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60]

const getOccurrance = (arr, value) =>  arr.reduce( (totalOccurance, arrayNumber) =>  {
    if(arrayNumber === value){
        totalOccurance++
    }
    return totalOccurance
}, 0)

setTimeout( ()=> {
    section(6)
    console.log(getOccurrance(scores, 100))
}, 1060)

/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.

  Dica: lembre-se que o método filter inclui o item em questão no novo array que está sendo gerado **apenas** se a função retorna um valor truthy.
*/
const nativeFilter = [1, 2, 3].filter(item => item < 2)

const filter = (arr, func) => {
    let newArray = []

    for (let i = 0; i < arr.length; i++) {

        let index = i
        let item = arr[i]
        let array = arr

        func(item, index, array) ? newArray.push(arr[i]) : false   
    }
    return newArray
}

setTimeout( ()=> {
    section(6)
    console.log(filter([1, 2, 3], item => item), " === [1, 2, 3]") // [1, 2, 3];
    console.log(filter([0, 1, 2], item => item), " === [1, 2]") // [1, 2];
    console.log(filter([1, 2, 3], item => item < 2), " === [1]") // [1];
    console.log(filter([1, 2, 3, 5], (item, index) => item === index + 1), " === [1, 2, 3]") // [1, 2, 3];
    console.log(filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)), " === [1, 2, 3, 5]") // [1, 2, 3, 5];
}, 1080)
