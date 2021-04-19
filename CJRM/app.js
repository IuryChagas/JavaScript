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


const present = new Date()

// console.log(dateFns.isToday(present))

console.log(dateFns.format(present, 'MMMM'))
console.log(dateFns.format(present, 'YY'))
console.log(dateFns.format(present, 'DD'))
console.log(dateFns.format(present, 'Do'), `<-- Dia do mês!`)
console.log(dateFns.format(present, 'DD-MMM-YYYY'))
console.log(dateFns.format(present, 'DD/MM/YYYY'))


const past = new Date('April 7 2019 17:00:00')

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))