console.info(
    `
    \n:::::   EXERCISES CHAPTER 27   :::::
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

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que a operação foi completada),
        exiba no console a mensagem 'Não foi possível obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
section(1)

const request = new XMLHttpRequest()
console.log(request)

const pokemon = 'pikachu'

request.addEventListener('readystatechange', () => {
    const readyStateChangeStatus = request.readyState
    const successfulRequest = readyStateChangeStatus === 4 && request.status === 200
    const unsuccessfullRequest = readyStateChangeStatus === 4
    if(successfulRequest){
        console.log(request.responseText)
        return
    }

    if (unsuccessfullRequest) {
        console.log(`http status: ${request.status} - Não foi possível obter os dados do pokémon`)
    }
})
// request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}s`)
request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
request.send()

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const personalInfo = {
    firstName: 'Stefany',
    lastName: 'Isadora Marina Gomes',
    gender: 'female',
    age: 18,
    height: 0,
    weight: 54,
    isWallking: false,
    distance: 1234
}

setTimeout( ()=> {
    section(2)
    console.log(personalInfo)
}, 999)
/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

personalInfo.incrementAge = () => {
    personalInfo.age++
}

for (let i = 0; i < 5; i++) personalInfo.incrementAge()

setTimeout( ()=> {
    section(3)
    console.log(personalInfo.age)
}, 1000)

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

personalInfo.walk = meter => {
    personalInfo.isWallking = true
    personalInfo.distance += meter
}

const meters = [1, 1000, 200, 1300]

meters.forEach( meters => personalInfo.walk(meters) )

setTimeout( ()=> {
    section(4)
    console.log(personalInfo.distance)
}, 1000)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const fixPluralOrSingularExpression = (date, optIn01, optIn02) => date > 1 ? optIn01 : optIn02

const gender = personalInfo.gender === 'female' ? 'a' : 'o' 
const { firstName, lastName, age, height, weight, distance } = personalInfo
const fullName = firstName+ ' '+ lastName
const ageDescription = fixPluralOrSingularExpression(age, 'anos', 'ano')
const heightDescription = fixPluralOrSingularExpression(height, 'metros', 'metro')
const weightDescription = fixPluralOrSingularExpression(weight, 'quilos', 'quilo')
const distanceDescription = fixPluralOrSingularExpression(distance, 'metros', 'metro')

const greetingMessage = `
Oi. Eu sou ${gender} ${fullName}, tenho ${age} ${ageDescription}, ${height} ${heightDescription} de altura, peso ${weight} ${weightDescription} e, só hoje, eu já caminhei ${distance} ${distanceDescription}.
`

setTimeout( ()=> {
    section(5)
    console.log(greetingMessage)
}, 1010)

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const booleanValidator = value => console.log(Boolean(value))

const falsyValues = ['', 0, -0, null, undefined, false, NaN]
const logFaltyValues = value => booleanValidator(value)

const truthyValues = [' ', -1, 1, Boolean, 'str', {}, ()=> {}, BigInt, [], true]
const logTruthyValues = value => booleanValidator(value)

setTimeout( ()=> {
    section(6)

    console.log('### falsy values ###')
    falsyValues.forEach( logFaltyValues )

    console.log('### truthy values ###') 
    truthyValues.forEach( logTruthyValues )
}, 1015)

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
const getBook = bookTitle => {
    const books = {
        "The Echo Wife": {
            totalPages: 256,
            author: 'Sarah Gailey',
            publisher: 'Tor books'
        },
        "Snow Crash": {
            totalPages: 440,
            author: 'Neal Stephenson',
            publisher: 'Random House Worlds'
        },
        "Solaris": {
            totalPages: 224,
            author: 'Stanislaw Lem',
            publisher: 'Mariner'
        }
    }

    return books[bookTitle] || books
}

setTimeout( ()=> {
    section(7)
    console.log(getBook())
    console.log(getBook('Solaris'))
    console.log(getBook('Snow Crash'))
}, 1020)
