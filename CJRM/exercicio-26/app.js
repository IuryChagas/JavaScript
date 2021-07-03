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

const actualDate = date => {
  let day = String(date.getDate())
  let month = String(date.getMonth())
  let year = String(date.getFullYear())

  const concatenateDay = day.length === 1 ? `0${day}` : day
  const concatenateMonth = month.length === 1 ? `0${month}` : month

  const message = `${concatenateDay}/${concatenateMonth}/${year}`
  
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

const dataTime = date => {
  
  let hs = date.getHours()
  let min = date.getMinutes()
  let dayOfWeek = date.getDay()
  let dayOfMonth = date.getDate()
  let month   = date.getMonth() //`++`
  let year = date.getFullYear()

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
  const weekday = weekDays.filter( (day, index) => index === dayOfWeek ? day : undefined)

  const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
  const monthOfYear = months.filter( (actualMonth, index) => index === month ? actualMonth : undefined)

  const stringf = `${hs}:${min} - ${weekday}, ${dayOfMonth} de ${monthOfYear} de ${year}`
  return stringf
}

const present = new Date()

console.log(
  dataTime(present)
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

const nameA = { name } = robotA
const nameB = { name } = robotB

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

console.log({ a, b, c })

/*
  06

  - Refatore o código abaixo.
*/

console.info("## Exercise >> 06")

const useDataSomewhereElse = value => value

const updateSomething = ({target, property, willChange}) => {

  willChange === 'valor indesejado' ? willChange = 'valor desejado' : undefined

  useDataSomewhereElse({
    target,
    property,
    willChange
  })

}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/
console.info("## Exercise >> 06")

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)
