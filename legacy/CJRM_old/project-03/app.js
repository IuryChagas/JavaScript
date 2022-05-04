const clockContainer = document.querySelector('.clock-container')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getClockHTML = (seconds, minutes, hours) => `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
`

const updateClock = () => {

    const present = new Date()
    const seconds = formatTimeUnit(present.getSeconds())
    const minutes = formatTimeUnit(present.getMinutes())
    const hours = formatTimeUnit(present.getHours())

    clockContainer.innerHTML = getClockHTML(seconds, minutes, hours)

}

setInterval(updateClock, 1000)