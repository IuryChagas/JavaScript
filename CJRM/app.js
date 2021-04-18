const past = new Date('May 1 2020 7:47:00')
const present = new Date()

console.log('Timestamp:', present.getTime(), past)
console.log('Timestamp:', present.getTime(), past.getTime())
const difference = present.getTime() - past.getTime()

console.log('Timestamp:', difference)


const seconds = Math.round(difference / 1000)

console.log({ seconds })

const minutes = Math.round(seconds / 60)

console.log({ minutes })

const hours = Math.round(minutes / 60)

console.log({ hours })

const days = Math.round(hours / 24)

console.log({ days })

console.log(`Vídeo criado há ${days} dias`)

const timestamp = 1618711221430

console.log(new Date(timestamp))