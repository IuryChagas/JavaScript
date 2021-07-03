console.info(
  `
  \n###########################   EXERCISES CHAPTER 26   ###########################

  `
)

/*
01

- Crie uma função que recebe uma data por parâmetro e retorna a data na 
formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
- Não utilize a date-fns.
*/
console.info("## Exercise >> 01")

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const actualDate = date => {
  let day = formatTimeUnit(date.getDate())
  let month = formatTimeUnit(date.getMonth() + 1)
  let year = date.getFullYear()

  const message = `${day}/${month}/${year}`

  return message
}

const data = new Date()

console.log(
  actualDate(data)
)
/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

console.info("## Exercise >> 02")

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabado'
]

const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const formatDateInfo = date => {
  
  let hours = formatTimeUnit(date.getHours())
  let minutes = formatTimeUnit(date.getMinutes())
  let weekDay = weekDays[date.getDay()]
  let monthDay = formatTimeUnit(date.getDate())
  let month   = monthNames[date.getMonth()]
  let year = date.getFullYear()

  const stringf = `${hours}:${minutes} - ${weekDay}, ${monthDay} de ${month} de ${year}`
  return stringf
}

const present = new Date()

console.log(
  formatDateInfo(present)
)


/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/
console.info("## Exercise >> 03")

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
console.info("## Exercise >> 04")

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

console.info("## Exercise >> 05")

const a = 'a'
const b = 'b'
const c = 'c'

const alphabet = { a, b, c }
console.log(alphabet)

/*
  06

  - Refatore o código abaixo.
*/

console.info("## Exercise >> 06")

const useDataSomewhereElse = value => value

const updateSomething = ({target, property, willChange} = {}) => {

  willChange === 'valor indesejado' ? willChange = 'valor desejado' : undefined
  return useDataSomewhereElse({ target, property, willChange })

}

console.log(
  updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })
)

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/
console.info("## Exercise >> 06")

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => `
  <span>${formatTimeUnit(hours)}</span> :
  <span>${formatTimeUnit(minutes)}</span> :
  <span>${formatTimeUnit(seconds)}</span>
`

const updateClock = () => {
  const present = new Date()
  const hours = formatTimeUnit(present.getHours())
  const minutes = formatTimeUnit(present.getMinutes())
  const seconds = formatTimeUnit(present.getSeconds())

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)

}

setInterval(updateClock, 1000)
