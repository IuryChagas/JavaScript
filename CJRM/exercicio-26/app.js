/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
console.info('\n### Etapa 11 - Exercício: 01 ###\n ')

const userDate = 'Mon Apr 19 2021 14:47:21'

const date = new Date(userDate)

const formatDate = date => {
  const day = String(date.getDate()).length === 1 ? `0${String(date.getDate() +1)}` : String(date.getDate())
  const month = String(date.getMonth()).length === 1 ? `0${String(date.getMonth() +1)}` : String(date.getMonth())
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

const dataFormat = date => {

  const hours = String(date.getHours()).length === 1 ? `0${String(date.getHours())}` : String(date.getHours())
  const minutes = String(date.getMinutes()).length === 1 ? `0${String(date.getMinutes())}` : String(date.getMinutes())
  const weekDay = String(date.getDate())
  let dayMonth = date.getDay() +1
  let month = date.getMonth() +1
  const year = String(date.getFullYear())

  switch (dayMonth) {
    case 1:
      dayMonth = `Domingo`
      break;
    case 2:
      dayMonth = `Segunda`
      break;
    case 3:
      dayMonth = `Terça`
      break;
    case 4:
      dayMonth = `Quarta`
      break;
    case 5:
      dayMonth = `Quinta`
      break;
    case 6:
      dayMonth = `Sexta`
      break;
    default:
      dayMonth = `Oops!`
      break;
  }
  switch (month) {
    case 1:
      month = `Janeiro`
      break;
    case 2:
      month = `Fevereiro`
      break;
    case 3:
      month = `Março`
      break;
    case 4:
      month = `Abril`
      break;
    case 5:
      month = `Maio`
      break;
    case 6:
      month = `Junho`
      break;
    case 7:
      month = `Julho`
      break;
    case 8:
      month = `Agosto`
      break;
    case 9:
      month = `Setembro`
      break;
    case 10:
      month = `Outubro`
      break;
    case 11:
      month = `Novembro`
      break;
    case 12:
      month = `Dezembro`
      break;
    default:
      month = `Oops!`
      break;
  }

  const timeStamps = `${hours}:${minutes} - ${dayMonth}, ${weekDay} de ${month} de ${year}`

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

const {id, isVerified} = user

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

console.log({a, b, c})

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
console.info('\n### Etapa 11 - Exercício: 0 ###\n ')

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clocker = (hours, minutes, seconds) => {
    const arr = []
    arr.push(hours)
    arr.push(minutes)
    arr.push(seconds)

    return arr.map(item => `<span>${String(item).length === 1 ? `0${item}` : item}</span> :`)
  }

  const clockHTML = clocker(hours, minutes, seconds)
  
  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)
