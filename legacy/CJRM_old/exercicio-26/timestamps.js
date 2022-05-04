console.info(
    `
    \n###########################   Timestamps e comparações   ###########################
  
    `
  )

  
const present = new Date()

console.info("#### Example >> 01 - ToDateString  ####")
console.log(`\n      ${present.toDateString()}\n\n`)

console.info("#### Example >> 02 - ToTimeString  ####")
console.log(`\n      ${present.toTimeString()}\n\n`)

console.info("#### Example >> 03 - ToLocaleString ####")
console.log(`\n     ${present.toLocaleString()}    \n\n`)

console.info("#### Example >> 04 - TolocaleTimeString  ####")
console.log(`\n     ${present.toLocaleTimeString()}    \n\n`)

console.info("#### Example >> 05 - TolocaleDateString  ####")
console.log(`\n     ${present.toLocaleDateString()}\n\n`)

console.info("#### Example >> 06 - Comparando datas  ####\n\n")

const past = new Date('Jun 29 2021 8:49:00')

const difference = present.getTime() - past.getTime()

const seconds = Math.round(difference / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)

console.log({
    seconds,
    minutes,
    hours,
    days
})

const lastUpdate = `Publicação realizada há ${days} dias`

console.log(lastUpdate)
console.log(present.toDateString())

const timestamp = 1675938474990 * 1.001

const dateFromTimestamp = new Date(timestamp)
console.log(dateFromTimestamp)

const year = dateFromTimestamp.getFullYear()
console.log({ "Timestamp Year:": year })