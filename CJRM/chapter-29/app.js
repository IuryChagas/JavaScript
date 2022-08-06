console.info(
    `
    \n:::::   EXERCISES CHAPTER 29   :::::
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

  - Usando promises, faça um request para este endpoint: https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os dados dos usuários."
*/

const getUsers = url => new Promise( (resolve, reject)=> {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=> {
        const success = request.readyState === 4 && request.status === 200
        const unsucce = request.readyState === 4

        if(success) { resolve(JSON.parse(request.responseText)) }
        if(unsucce) { reject({ status: request.status, description: "Não foi possível obter os dados dos usuários." }) }
    })
    request.open('GET', url)
    request.send()
})

const endpoint = `https://jsonplaceholder.typicode.com/todos`

const user = getUsers(endpoint)


setTimeout(()=>{

    section(1)
    user
        .then( value => result(value) )
        .catch( result )

}, 0)

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const getOperationMessage = (operator, num1, num2, operation) => `Resultado da operação: ${num1} ${operator} ${num2} = ${operation}.`

const calculator = operator => (num1, num2) => ({
    "+": getOperationMessage(operator, num1, num2, num1 + num2),
    "-": getOperationMessage(operator, num1, num2, num1 - num2),
    "*": getOperationMessage(operator, num1, num2, num1 * num2),
    "/": getOperationMessage(operator, num1, num2, num1 / num2),
    "%": getOperationMessage(operator, num1, num2, num1 % num2)
})[operator] || "Operação inválida."
 
const sum = calculator('+')
const subtraction = calculator('-')
const multiplication = calculator('*')
const division = calculator('/')
const mod = calculator('%')
const invalidTest = calculator('Z')

setTimeout( ()=> {
    section(2)
    result(sum(2, 2))
    result(subtraction(2, 2))
    result(multiplication(2, 2))
    result(division(2, 2))
    result(mod(2, 2))
    result(invalidTest(2, null))
}, 100)


/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul, pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul']
const sudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo']
const norte = ['Acre', 'Amapá', 'Amazonas']

let brasil = sudeste.concat(sul)

const insertNorthernRegionsIntoBrazil = region => brasil.unshift(region)
norte.forEach( insertNorthernRegionsIntoBrazil )
const newSul = brasil.slice(6, 9)
const removeFirstRegion = brasil.shift()

setTimeout(()=> {
    section(3)
    console.log('## sul & suldeste ## ', brasil)
    console.log('## sul, suldeste & Norte ##', brasil)
    console.log('remove just the First Region: ', removeFirstRegion)
    console.log('newSul:', newSul)
}, 150)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/
const nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']

const newSudeste = brasil.splice(2, 4)

brasil = brasil.concat(nordeste)

const newBrasil = brasil.map( (region, index) => {
    return { id: index, estado: region }
})

setTimeout(()=> {
    section(4)
    
    console.log('newSudeste: ', newSudeste)
    console.log('brasil: ', brasil)

    console.log('brasil com regiões nordeste: ', brasil)

    console.log('newBrasil: ', newBrasil)

    const getWordLength = region => region.length > 7
    const hasMoreThan7Letters = () => brasil.every(getWordLength) 
        ? "Sim, todos os estados tem mais de 7 letras." 
        : "Nem todos os estados tem mais de 7 letras."

    console.log('regiões com mais de 7 letras: ',hasMoreThan7Letters())
}, 160)

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const regionExist = brasil.includes('Ceará')
const customizedMessage = newBrasil.map( ({ id, estado }) => {
    return {id: id += 1, estado, description: `${estado.toUpperCase()} pertence ao Brasil`}
} )

const getOnlyEvenIds = customizedMessage.filter( ({ id }) => id % 2 === 0)

setTimeout(()=> {
    section(5)

    console.log(regionExist ? "Ceará está incluído." : "Ceará não foi incluído =/")
    console.log("customizedMessage:", customizedMessage)
    console.log("returno only Even ids: ", getOnlyEvenIds)
}, 170)

