const displayClocker = document.querySelector('.display-clocker')

setInterval( () => {
    const present = new Date()

    const hour = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const timer = `${String(hour).length === 1 
        ? `0${hour}` : hour}:${String(minutes).length === 1 
        ? `0${minutes}` : minutes}:${String(seconds).length === 1
        ? `0${seconds}` : seconds}`

    displayClocker.innerHTML = timer

}, 1000)