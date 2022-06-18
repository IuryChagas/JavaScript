console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 08   :::::::::::::::::::::::::::
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

- Converta a função abaixo em uma arrow function e utilize-a para exibir um valor no console.
*/
section(1)

function convertToString (value = 11) {
    return String(value)
  }

const convertInString = value => {
    return String(value)
}

const arrowFunction = convertInString(42)

result(arrowFunction)

/*
02

- Crie uma função que retorne a quantidade de caracteres que uma string recebida por parâmetro possui.
*/
section(2)

const charsCounter = string => {
    const getStringLength = string.length
    return `"${string}" contains ${getStringLength} characters`
}

result(charsCounter(`javaScript`))

/*
03

- Crie uma função que retorne todos os caracteres de uma string em letras minúsculas;
- Utilize a função para exibir a string abaixo no console.

"CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/
section(3)

const transformToLowerCase = sentence => {
    return sentence.toLowerCase()
}

const convertToLowerCase = string => string.toLowerCase()

result(convertToLowerCase('STRING'))

const lowerCaseSentence = transformToLowerCase("CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO")

result(lowerCaseSentence)

/*
04

- Crie uma função que recebe 2 parâmetros: um caractere e uma string;
- Ao ser invocada, a função deve retornar o index do caractere na string.
*/
section(4)

const getCharPosition = (char, string) => {
    return string.indexOf(char)
}

const charPositionOf = getCharPosition('y', 'iury')

result(charPositionOf)

/*
05

- Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
 passado por argumento existe no array (também passado por argumento).
*/
section(5)

const findItem = (item, array) => {
    let arrayHasItem = false

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const itemExist = element === item

        if (itemExist) {
            return !arrayHasItem
        }

    }
    return arrayHasItem
}

const findItemInArray = (item, array) => array.includes(item)

const fruits = ['lemon', 'orange', 'banana', 'apple', 'strawberry']

result(findItem('apple', fruits))
result(findItemInArray('coconut', fruits))

/*
06

- Crie uma função que retorna a concatenação de 2 arrays, passados como argumentos em sua invocação;
*/
section(6)

const getArrayFusion = (firstArray = [], secondArray = []) => {
    return firstArray.concat(secondArray)
}
const vegetables = ['potato', 'eggplant', 'carrot', 'broccoli']
const arrayFusion = getArrayFusion(fruits, vegetables) 

result(arrayFusion)
console.table(arrayFusion)

/*
07

- Crie uma função que retorna o array passado como argumento em sua invocação, mas com o último item removido.
*/
section(7)

const removeLastItem = (array, item) => {
    array.pop(item)
    return array
}

result(removeLastItem(vegetables, 'broccoli'))

/*
08

- Crie uma função que retorna se o valor passado como argumento em sua invocação é null.
*/
section(8)

const isANullValue = value => {
    if (value === null) {
        return true
    }else {
        return false
    }
}

const isNull = value => value === null

const testANullValue = 'null'

result(isNull(testANullValue))

const fullName = null
result(isANullValue(fullName))

/*
09

- Crie uma função que apenas invoca uma função de callback recebida por parâmetro;
- Crie outra função que apenas exibe seu nome no console;
- Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/
section(9)

const getCallbackFunction = callback => {
    return callback()
}

const logName = name => {
    name = 'iury chagas'
    return name
}

result(getCallbackFunction(logName))

/*
10

- Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como argumento;
- Crie uma função que retorna o triplo de um número recebido por parâmetro;
- Faça com que a invocação da função descrita no 1º item deste exercício (10) resulte no triplo de 33.
*/

section(10)

const invokCallback = (callback, value = 0) => {
    return callback(value * 3)
}

const triplify = expression =>{
    return expression
}

result(invokCallback(triplify, 33))

/*
11

- Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;

"O Xº item do array [X, X, X] é X."
*/
section(11)

const numbers = [1, 2, 3]

const showNumbersInfo = (number, index, array) => {
    const numberPosition = index+1
    const numbers = array.join(', ')
    let message = `O ${numberPosition}º item do array [${numbers}] é ${number}.`

    return console.log(message)
}

const showMessage = numbers.forEach(showNumbersInfo)

/*
12

- Converta o for loop abaixo em um forEach;
- Após a conversão, verifique se a cópia do array lettersCopy realmente foi criada.
*/
section(12)

const letters = ['v', 'e', 'p']
let lettersCopy = []

for (let i = 0; i < letters.length; i++) {
    lettersCopy.push(letters[i])
}

letters.forEach(item => {
    lettersCopy.push(item)
})

result(lettersCopy)

/*
13

- Inclua o markup abaixo em seu index.html;
- Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do array "review";
- Ao gerar o template, verifique no browser se os parágrafos foram incluídos dentro da section vazia do markup abaixo.

<article>
    <header>
    <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
</article>
*/
section(13)

// const htmlSection = document.querySelector('[data-js="section"]')
  
const review = [
'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \\o/.',
'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

// let paragraphs = review.forEach( paragraph => {
//     return htmlSection.innerHTML += `<p>${paragraph}</p>`
// })

// result(htmlSection)

/*
14

- Implemente uma função que retorna uma string com a quantidade de pessoas que curtiram um post, conforme descrito a seguir;
- A função deve receber por parâmetro um array com os nomes das pessoas que curtiram o post/vídeo/foto;
- Se o array recebido estiver vazio, a mensagem que a função deve retornar é "Ninguém curtiu isso";  
- Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem retornada deve ser "Rafael curtiu isso";
- Se o array conter 2 nomes, a mensagem retornada deve ser "NOME_1 e NOME_2 curtiram isso";  
- Se o array conter 3 nomes, a mensagem retornada deve ser "NOME_1, NOME_2 e NOME_3 curtiram isso";  
- Se o array conter 4 ou mais nomes, a mensagem retornada deve ser
    "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
    pelo restante da quantidade de pessoas que curtiram o post (além das duas  
    pessoas já mencionadas no início da mensagem).
*/
section(14)
const followers = ['Rigoni', 'Keroline', 'Douglas', 'Melanie']

const followersReaction = (followersList = []) => {
    firstName = followersList[0]
    secondName = followersList[1]
    thirdName = followersList[2]
    totalReactions = followers.length

    switch (followersList.length) {
        case 0:
            return `Ninguém curtiu isso`
        case 1:
            return `${firstName} curtiu isso`
        case 2:
            return `${firstName} e ${secondName} curtiram isso`
        case 3:
            return `${firstName}, ${secondName} e ${thirdName} curtiram isso`
        default:
            return `${firstName}, ${secondName} e mais ${totalReactions -2} pessoas curtiram isso`;
    }

}

result(followersReaction(followers))