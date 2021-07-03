const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {

    const present = new Date()
    const seconds = present.getSeconds()
    const minutes = present.getMinutes()
    const hours = present.getHours()

    const clockFormatter = (hours, minutes, seconds) => {
            const time = [hours, minutes, seconds]
                .map( time =>
                    `<span>${String(time).length === 1 ? `0${String(time)}` : String(time)}</span>`)
                .join(' : ')

            return time
    }
    clockContainer.innerHTML = clockFormatter(hours, minutes, seconds)
}

setInterval(updateClock, 1000)