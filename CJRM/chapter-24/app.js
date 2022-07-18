console.info(
    `
    \n:::::   EXERCISES CHAPTER 24   :::::
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
    - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do array "months".
*/
section(1)

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

let monthFebruaryExist = null
months.some(month =>  month === 'Fevereiro' ? monthFebruaryExist = month : monthFebruaryExist)

result(monthFebruaryExist)

/*
02
    - Crie um objeto de data que represente o momento presente;
    - Exiba o objeto no console.
*/
section(2)

const present = new Date()

result(present)
/*
03
    - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/
section(3)

const currentYear = present.getFullYear()

result(currentYear)
/*
04
    - Crie um objeto de data que represente um momento passado;
    - Exiba o objeto no console.
*/
section(4)

const past = new Date('2121-05-13T23:50:21.817Z')

result(past)
/*
05
    - Exiba, no console, a hora do objeto que você acabou de criar.
*/
section(5)

const hourOfPast = past.getHours()

result(hourOfPast)
/*
06
    - Crie um objeto de data que represente um momento futuro;
    - Exiba o objeto no console.
*/
section(6)

const future = new Date('Jul 30 2022 20:18:32')

result(future)
/*
07
    - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/
section(7)

const difference = future.getTime() - present.getTime()

const seconds = Math.round(difference / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)

result({ days })
/*
08
    Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
    da aplicação To-do List uma peça do seu portfólio.

    Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
    por conta própria, considere inserí-la como parte de seu portfólio.

    Caso contrário, reveja as aulas e treine novamente até que você consiga desenvolver a aplicação sozinho(a).

    Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na aplicação do Quiz: 
    https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
