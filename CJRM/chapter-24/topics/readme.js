const present = new Date()

console.log(present)

console.log('getFullYear: ', present.getFullYear())
console.log('getMonth: ', present.getMonth())
console.log('getDay: ', present.getDay())
console.log('getHours: ', present.getHours())
console.log('getMinutes: ', present.getMinutes())
console.log('getSeconds: ', present.getSeconds())
console.log('getDate: ', present.getDate())
console.log('getTime: ', present.getTime())
console.log('getTimezoneOffset: ', present.getTimezoneOffset())
console.log('getUTCDay: ', present.getUTCDay())

console.log('\n\n\n')

console.log('timeStamp: ',present.getTime())
console.log('toDateString: ',present.toDateString())
console.log('toTimeString: ',present.toTimeString())
console.log('toLocaleString: ',present.toLocaleString())


const past = new Date('Sep 06 1983 20:18:32')

console.log(past)

const difference = present.getTime() - past.getTime()
console.log('Difference: ', difference)


console.log('\n\n\n')


const seconds = Math.round(difference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

console.log('\n')
console.log(`Nascido(a) há ${days} dias`)
console.log('\n\n')

const past2 = new Date('Aug 01 1992 20:23:15')
const difference2 = present.getTime() - past2.getTime()

const seconds2 = Math.round(difference2 / 1000)
console.log({ seconds })

const minutes2 = Math.round(seconds2 / 60)
console.log({ minutes })

const hours2 = Math.round(minutes2 / 60)
console.log({ hours })

const days2 = Math.round(hours2 / 24)
console.log({ days2 })

console.log('\n')
console.log(`Nascido(a) há ${days2} dias`)

const timeStamp = 7010431711345

console.log('\n')
console.log(new Date(timeStamp))