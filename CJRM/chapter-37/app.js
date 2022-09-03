console.info(
    `
    \n:::::   EXERCISES CHAPTER 37   :::::
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

  - Crie um objeto com um método getColor. Este método deve retornar o valor da propriedade 'color' dos objetos descritos abaixo;
  - Crie 2 novos objetos que representem dois carros. Na criação dos objetos, 
    faça o objeto com o método getColor ser prototype desses dois carros;
  - Após criar os carros, crie neles as propriedades 'color'. Atribua valores 
    diferentes para a propriedade color de cada carro;
  - Teste o método getColor do prototype dos carros.
*/
section(1)

const bluePrint = {
    getColor () {
        return this.color
    }
}

const phantom = Object.create(bluePrint)
const modelX = Object.create(bluePrint)

phantom.name = 'Phantom'
phantom.color = 'nepturn'

modelX.name = 'Model X'
modelX.color = 'silver'

console.log(phantom, modelX)
console.log(`${phantom.name} color: ` ,phantom.getColor())
console.log(`${modelX.name} color: ` ,modelX.getColor())

console.log(`BluePrint object is prototype of ${phantom.name}:`, bluePrint.isPrototypeOf(phantom))
console.log(`BluePrint object is prototype of ${modelX.name}:`, bluePrint.isPrototypeOf(modelX))

console.log(Object.getPrototypeOf(phantom))
console.log(Object.getPrototypeOf(modelX))
console.log(Object.getPrototypeOf(modelX) === Object.getPrototypeOf(phantom))

/*
  02

  - No código abaixo, a invocação da função 'getSummary' está retornando 
    "undefined foi dirigido por undefined e tem undefined no papel principal.";
  - Faça a invocação da função retornar a string com os valores esperados 
    (ao invés de undefined's);
  - Não modifique o objeto 'movie' e a declaração da função 'getSummary';
  - Após fazer o código funcionar, você pode refatorar a declaração da função, 
    se necessário.
*/
section(2)

const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    starringRole: 'Tom Hanks'
}
  
function getSummary () {
    const { title, director, starringRole } = this
    return `${title} foi dirigido por ${director} e tem ${starringRole} no papel principal.`
}

// result(getSummary.call(movie)) // como parametro item a item
result(getSummary.apply (movie)) // como parametro array
  
/* 
03

- A invocação da função abaixo deve retornar este objeto:
    {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3' 
    }
- Descomente o código e crie a função.
*/
section(3)

// const arrayToObj = arr => {
//     return arr.reduce((callback, item) => {
//         callback[item[0]] = item[1]
        
//            return callback
//     }, {})
// }

const createObject = (callback, [key, value]) => {
    callback[key] = value

    return callback
}

const arrayToObj = arr => {
    return arr.reduce(createObject, {})
}

console.log(
    arrayToObj([
        ['prop1', 'value1'], 
        ['prop2', 'value2'],
        ['prop3', 'value3']
    ])
)

/*
04

- Refatore as classes abaixo para factory functions.
*/
section(4)

const concatenateZero = unit => unit < 10 ? `0${unit}` : unit

const formatTimeUnits = units => units.map(concatenateZero)

const getTime = () => {
const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

return [hours, minutes, seconds]
}

const getFormattedTime = template => {
    const [hours, minutes, seconds] = getTime()
    const formattedTime = formatTimeUnits([hours, minutes, seconds])
    const getTimeAsArray = (_, index) => formattedTime[index]

    return template.split(':').map(getTimeAsArray).join(':')

}

const getClock = ({ template }) => ({
    template,

    render () {
        const formattedTime = getFormattedTime(this.template)
        console.log(formattedTime)
    },
    start() {
        const oneSecond = 1000

        this.render()
        this.timer = setInterval(() => this.render(), oneSecond)
    },
    stop () {
        clearInterval(this.timer)
    }
})

const getExtendedClock = ({ template, precision = 1000 }) => ({
    precision,
    ...getClock({ template }),
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), this.precision)
    }
})

const makeClock = getExtendedClock(({ template: 'h:m:s', precision: 1000 }))

makeClock.start()
makeClock.stop()

/*
05

- No index.html, descomente: 
    - A div com a classe "container" que contém uma tabela e um botão;
    - A tag link (no head) que carrega os estilos CSS do Bootstrap.
- Seu desafio neste exercício é exportar as células da tabela HTML para um 
    arquivo CSV que pode ser aberto no Excel ou Google Planilhas;

Passo a passo para alcançar este resultado
    - Quando um click no botão "Exportar para CSV" acontecer, faça o seguinte:
    - Gere um array com todas as referências dos elementos <tr> da tabela;
    - À partir do array de referências das <tr>, gere uma string CSV:
        - Uma string CSV contém, em cada linha, separados por vírgula, o 
        conteúdo textual de uma célula da <tr> (seja a célula um <th> ou 
        <td>). Ou seja, a string CSV deve ter a formatação abaixo, incluindo 
        as quebras de linha:
        
        #,Jogo do Ano,Desenvolvedora,Data da premiação
        1,The Last of Us Part II,Naughty Dog,10 de dezembro de 2020
        2,Sekiro: Shadows Die Twice,FromSoftware,12 de dezembro de 2019
        3,God of War,SIE Santa Monica Studio,6 de dezembro de 2018
        4,The Legend of Zelda: Breath...,Nintendo...,7 de dezembro de 2017
        5,Overwatch,Blizzard Entertainment,1 de dezembro de 2016
        
        - Dicas:
        - O elemento <tr> contém uma propriedade 'cells'.
        - Para quebrar linha, você pode usar dentro da string o caractere 
            especial '\n';
        - É possível gerar a string usando o método reduce. Porém, neste caso,
            o código fica mais legível (e menos complicado) com o map.
    - Após gerar a string CSV, insira 2 atributos no botão:
        - href, com o valor 
        `data:text/csvcharset=utf-8,${encodeURIComponent(SUA_STRING_CSV)}`. 
        encodeURIComponent é um método do window que precisa receber a string 
        CSV que você criou;
        - download, com o valor 'table.csv'.
*/
section(5)

const exportButton = document.querySelector('[data-js="export-table-btn"]')
const tableRows = document.querySelectorAll('tr')

const getCellsContent = cell => cell.textContent

const getStringWithCommas = ({ cells }) => Array.from(cells).map( getCellsContent )
const createCSVString = () => Array.from(tableRows).map( getStringWithCommas ).join(',\n')
const setCSVDownload = CSVString => {
    const CSVURI =  `data:text/csvcharset=utf-8,${encodeURIComponent(CSVString)}`
    const CSVFileName = 'tabela-lista-de-jogos'

    exportButton.setAttribute('href', CSVURI)
    exportButton.setAttribute('download', `${CSVFileName}.csv`)
}

const exportTable = () => {
    const CSVString = createCSVString()
    setCSVDownload(CSVString)
}

exportButton.addEventListener('click', exportTable)

/*
06

- Na Weather Application, refatore para uma factory function o código que 
    executa os requests e obtém as informações do clima da cidade;
- Se ao fazer o request, uma mensagem "Access to fetch at 'http://...' from 
    origin 'http://...'"... for exibida no console, crie uma nova app na 
    plataforma da accuweather e pegue uma nova chave: 
    https://developer.accuweather.com/;
- O procedimento é o mesmo mostrado nas aulas da etapa em que construímos 
    essa aplicação.
*/
section(6)

/*
07

- No index.html, comente a div com a classe "container" que contém a tabela;
- Descomente: 
    - A <div> com a classe "container" abaixo da div que você acabou de comentar;
    - A <link> que importa o style.css;
- Construa uma aplicação de conversão de moedas. O HTML e CSS são os que você está vendo no browser (após salvar os arquivos);
- Você poderá modificar a marcação e estilos da aplicação depois. No momento, concentre-se em executar o que descreverei abaixo;
    - Quando a página for carregada: 
    - Popule os <select> com tags <option> que contém as moedas que podem ser convertidas. 
        "BRL" para real brasileiro, "EUR" para euro, USD" para dollar dos Estados Unidos, etc. 
         Use os dados da API para popular os selects.
    - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
    - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;
    - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar seu valor;
    - O parágrafo com data-js="conversion-precision" deve conter a conversão apenas x1. Exemplo: 1 USD = 5.0615 BRL;
    - O conteúdo do parágrafo do item acima deve ser atualizado à cada mudança nos selects;
    - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à cada mudança nos selects e/ou no input com data-js="currency-one-times";
    - Para que o valor contido no parágrafo do item acima não tenha mais de dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate API: https://www.exchangerate-api.com/;
    - Para obter a key e fazer requests, você terá que fazer login e escolher o plano free.
      Seus dados de cartão de crédito não serão solicitados.

PS: o desafio aqui é você implementar essa aplicação sozinho(a), antes de ver as próximas aulas, ok? =)
*/