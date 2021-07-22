const form = document.querySelector('[data-js="change-location"]')
const imgTime = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')
const climate = document.querySelector('.my-3')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const weatherText = document.querySelector('[data-js="weather-text"')
const temperature = document.querySelector('[data-js="temperature"]')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    const response = await getCityWeather(inputValue)
    const isDay = response[0].IsDayTime
    if (isDay) {
        imgTime.setAttribute('src', './src/day.svg')
    }else {
        imgTime.setAttribute('src', './src/night.svg')
    }

    const weatherIcon = response[0].WeatherIcon

    const imageIcon = document.createElement('img')
    imageIcon.setAttribute('src', `./src/icons/${weatherIcon}-s.png`)
    timeIcon.insertAdjacentElement('afterend', imageIcon)

    cityNameContainer.textContent = inputValue
    weatherText.textContent = response[0].WeatherText
    temperature.textContent = response[0].Temperature.Metric.Value

    form.reset()
})
