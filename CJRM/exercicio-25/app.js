console.info(
  `
  \n###########################   EXERCISES CHAPTER 25   ###########################

  `
)

/*
01

- Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
array "months".
*/
console.info("## Exercise >> 01")

const months = [
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
const indexOfMonth = months.indexOf('Fevereiro')

console.log(indexOfMonth)
/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/
console.info("## Exercise >> 02")

const present = new Date()

console.log({ "present": typeof present, present })

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
console.info("## Exercise >> 03")

const currentyear = present.getFullYear()

console.log(currentyear)

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
console.info("## Exercise >> 04")

const past = new Date('Sun Aug 01 1982 20:02:18')

console.log(past)

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/
console.info("## Exercise >> 05")

const pastHour = past.getHours()
console.log(pastHour)


/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/
console.info("## Exercise >> 06")

const future = new Date('Wed Sep 28 2022 10:00:00')

console.log(future)
/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
console.info("## Exercise >> 07")

const diff = future.getTime() - past.getTime()

const seconds = Math.round(diff / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)
const years = Math.round(days / 365)

console.table({ diff, seconds, minutes, hours, days, years })
console.log(`A quantidade de dias entre o momento futuro '2022' e o momento passado '1982' é de ${days} de diferença, equivalente a ${years} anos.`)

/*
  08
  
  Assim como a 1ª aplicação que implementamos no curso (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
