const present = new Date()

console.log(present)
console.log('Year: ', present.getFullYear())
console.log('Month: ', present.getMonth(), '<-- Zer0 base')
console.log('Day of Month: ', present.getDate())
console.log('Day of Week: ', present.getDay(), ' "Sabado" <-- Zer0 base')
console.log('Hour:', present.getHours())
console.log('Minutes:', present.getMinutes())
console.log('Seconds:', present.getSeconds())
console.log('Milliseconds:', present.getMilliseconds())


console.log(typeof present, present)

const concatedDate = `${present.getDate()}/0${present.getMonth()}/${present.getFullYear()}`

console.log('Concated Date: ', concatedDate)

console.log('Timestamp:', present.getTime(), 'Milliseconds since 1970')

console.log('toDateString: ', present.toDateString())
console.log('toTimeString: ', present.toTimeString())
console.log('toLocaleString: ', present.toLocaleString())