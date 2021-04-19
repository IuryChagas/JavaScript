/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
console.info('\n### Etapa 11 - Exercício: 01 ###\n ')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const userDate = 'Mon Apr 19 2021 14:47:21'

const date = new Date(userDate)

const formatDate = date => {
  const day = formatTimeUnit(date.getDate())
  const month = formatTimeUnit(date.getMonth() +1)
  const year = String(date.getFullYear())

  return `${day}/${month}/${year}`
}

console.log(formatDate(date))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
console.info('\n### Etapa 11 - Exercício: 02 ###\n ')

const weekDays = [
  `domingo`,
  `segunda-feira`,
  `terça-feira`,
  `quarta-feira`,
  `quinta-feira`,
  `sexta-feira`
]

const months = [
  `Janeiro`,
  `Fevereiro`,
  `Março`,
  `Abril`,
  `Maio`,
  `Junho`,
  `Julho`,
  `Agosto`,
  `Setembro`,
  `Outubro`,
  `Novembro`,
  `Dezembro`
]

const dataFormat = date => {

  const hours = formatTimeUnit(date.getHours())
  const minutes = formatTimeUnit(date.getMinutes())
  const weekDay = weekDays[date.getDay()]
  const monthDay = date.getDate()
  const month = months[date.getMonth()]
  const year = String(date.getFullYear())

  const timeStamps = `${hours}:${minutes} - ${monthDay}, ${weekDay} de ${month} de ${year}`

  return console.log(timeStamps)
}

dataFormat(new Date())
/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/
console.info('\n### Etapa 11 - Exercício: 03 ###\n ')

const user = { id: 42, isVerified: true }

const { id, isVerified } = user

console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/
console.info('\n### Etapa 11 - Exercício: 04 ###\n ')

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

console.info('\n### Etapa 11 - Exercício: 05 ###\n ')

const a = 'a'
const b = 'b'
const c = 'c'

console.log({ a, b, c })

/*
  06

  - Refatore o código abaixo.
*/
console.info('\n### Etapa 11 - Exercício: 0 ###\n ')

const useDataSomewhereElse = value => console.log(value)

const updateSomething = ( { target, property, willChange } ) => {

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({ target, property, willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/
console.info('\n### Etapa 11 - Exercício: 0 ###\n ')

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()

  const hours = formatTimeUnit(present.getHours())
  const minutes = formatTimeUnit(present.getMinutes())
  const seconds = formatTimeUnit(present.getSeconds())

  const setTimerUnit = (unit) => `<span>${unit}</span>`

  clockContainer.innerHTML = `${setTimerUnit(hours)} : ${setTimerUnit(minutes)} : ${setTimerUnit(seconds)}`
}

setInterval(updateClock, 1000)