const form = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)

    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }

    IsDayTime ? timeImg.src  = './src/day.svg' : timeImg.src = './src/night.svg'

    const weatherIcon = WeatherIcon

    const imageIcon = document.createElement('img')
    imageIcon.setAttribute('src', `./src/icons/svg/${weatherIcon}.svg`)
    imageIcon.setAttribute('class', 'time-icon')
    timeIcon.insertAdjacentElement('afterend', imageIcon)

    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    form.reset()
})
