console.info(
    `
    \n:::::   EXERCISES CHAPTER 25   :::::
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

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
section(1)


const dateFormatter = date => {
  const day = String(date.getUTCDate()).length === 1 ? `0${date.getUTCDate()}` : date.getUTCDate()
  const month = String(date.getMonth()).length === 1 ? `0${date.getMonth()}` : date.getMonth()
  const year = date.getFullYear()
  
  return `${day}/${month}/${year}`
}

const date = new Date()

result(dateFormatter(date))
/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
section(2)

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'desembro'
]

const weekDays = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sabado',
]

const currentDate = new Date()

const getDateAndHours = date => {
  const monthDay = date.getUTCDate()
  const weekDay = weekDays.includes(weekDays[date.getDay()]) ? weekDays[date.getDay()] : undefined
  const month = months.includes(months[date.getMonth()]) ? months[date.getMonth()] : undefined
  const year = date.getFullYear()
  
  const currentDate = `${weekDay}, ${monthDay} de ${month} de ${year}`
  const currentHour = `${date.getHours()}:${date.getMinutes()}`

  return `${currentHour} - ${currentDate}`
}

result(getDateAndHours(currentDate))
/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/
section(3)

const user = { id: 42, isVerified: true }

const { id, isVerified } = user

result({ id, isVerified })
/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/
section(4)

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const nameA = { ...robotA }
const nameB = { ...robotB } 

result({ nameA, nameB })

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/
section(5)

const a = 'a'
const b = 'b'
const c = 'c'

result({ a, b, c })

/*
  06

  - Refatore o código abaixo.
*/
section(6)

const useDataSomewhereElse = value => result(value)

const updateSomething = ({ target, property, willChange }) => {

  if (willChange === 'valor indesejado') { willChange = 'valor desejado' }

  useDataSomewhereElse({
    target,
    property,
    willChange
  })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const numberDisplay = number => `<span>${String(number).length === 1 ? `0${number}` : number}</span>`

  const clockHTML = `
    ${numberDisplay(hours)} : ${numberDisplay(minutes)} : ${numberDisplay(seconds)}
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)