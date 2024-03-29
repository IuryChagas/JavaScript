console.info(
    `
    \n:::::   EXERCISES CHAPTER 36   :::::
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
 - Descomente a let abaixo, descubra o que o código está tentando fazer e faça-o funcionar.
*/
section(1)

class Animal {
    constructor (name) {
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor (name) {
        super(name)
        this.created = new Date()
    }
}
  
let rabbit = new Rabbit('White Rabbit')
result(rabbit)

/*
02
- Descomente o código abaixo e implemente o que está faltando para que ele funcione.
*/
section(2)

class Counter {
    constructor(count) {
        this.count = 0
    }

    get value() {
        return this.count
    }

    increment() {
        return this.count++
    }
}
const counter = new Counter()

console.log(counter.value)
counter.increment()
console.log(counter.value)

/*
03

- A partir do array abaixo, gere um novo array com apenas os valores truthy;
- Utilize um construtor para resolver este exercício;
- Não invoque o construtor.
*/
section(3)

const values = [
    0,
    {},
    '',
    [],
    NaN,
    () => {}
]

const getOnlyTruthyValues = new Array(values.filter(Boolean))

console.table(getOnlyTruthyValues)

/*
04

- O código abaixo deveria exibir no console, à cada segundo, uma string com 
    as horas minutos e segundos, no seguinte formato: "h:m:s" onde "h" 
    representa as horas, "m" os minutos e "s" os segundos. Exemplo: "22:01:25";
- Descomente o código e conserte os erros que estão impedindo que ele funcione.
*/
section(4)

const getTime = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return [hours, minutes, seconds]
}
const formatTimeUnits = units => units.map( unit => unit < 10 ? `0${unit}` : unit )

const getFormattedTime = template => {

    const [hours, minutes, seconds] = getTime()
    const formattedTime = formatTimeUnits([ hours, minutes, seconds ])

    return template
     .split(':')
     .map( (_, index) => formattedTime[index] )
     .join(':')
}

class Clock {
    constructor ({ template }) {
        this.template = template
    }
    render () {
        const formattedTime = getFormattedTime(this.template)
        console.log(formattedTime)
    }

    start () {
        const oneSecond = 1000

        this.render()
        this.timer = setInterval(() => this.render(), oneSecond)
    }

    stop () {
        clearInterval(this.timer)
    }
}

class ExtendedClock extends Clock {
    constructor (options) {
        super(options)
        
        const { precision = 1000 } = options
        this.precision = precision
    }

    start () {
        this.render()
        this.timer = setInterval(() => this.render(), this.precision)
    }
}

const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 })

clock.start()

setTimeout( ()=> {
    clock.stop()
}, 2000)
  
/*
05

- No index.html há um elemento "textarea" e um parágrafo.
    A cada vez que um caractere for inserido no textarea, exiba no parágrafo a quantidade de 
    caracteres que o textarea contém.
*/
section(5)

const paragraph = document.querySelector('[data-js="paragraph"]')
const textarea = document.querySelector('[data-js="textarea"]')

const showCounterParagraph = event => {
    event.preventDefault()
    const currentLenght = event.target.value.length
    const maxLength = event.target.getAttribute('maxlength')

    paragraph.textContent = `${currentLenght}/${maxLength}` 
}

textarea.addEventListener('input', showCounterParagraph)

/*
06

- Já implementamos os métodos forEach, some, map e filter, do zero;
- Neste exercício, seu desafio será criar, do zero, o método reduce;
- Implemente uma função "reduce" que possui a mesma funcionalidade do método reduce original;
- Você não poderá utilizar o método reduce original, embutido na linguagem;
- A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6;
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9;
    - reduce(
        [1, 2],
        (acc, item) => {
        acc['number-' + item] = item
        return acc
        },
        {}
    ) // {"number-1": 1, "number-2": 2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1;
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3;
- Utilize os casos de uso acima para testar sua função;
- Se você não se lembra como o método reduce funciona, deixarei abaixo do 
    vídeo de correção dos exercícios um link para a aula de introdução ao 
    reduce e um link para a documentação do método no MDN.
*/
section(6)

const reduce = (arr, func, initAndType) => {
    let response = null

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const index = i
        const array = arr

        response = initAndType = func(initAndType, item, index, array)

    }

    return response
}

const createItemBasedProperties = (acc, item) => {
    acc['number-' + item] = item
    return acc
}

const sumItems = (acc, item) => acc + item
const sumItemsPlusIndex = (acc, _, index) => acc + index
const sumItemsUsingArrayParam = (acc, _, index, array) => acc + array[index]

result(reduce([1, 2, 3], sumItems, 0))
result(reduce([2, 3, 4], sumItems, 0))
result(reduce([1, 2], createItemBasedProperties, {}))
result(reduce([1, 2], sumItemsPlusIndex, 0))
result(reduce([1, 2], sumItemsUsingArrayParam, 0))
