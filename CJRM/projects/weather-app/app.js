const form = document.querySelector('[data-js="change-location"]')
const dashboard = document.querySelector('[data-js="weather-dashboard"')
const timeIMG = document.querySelector('[data-js="time"]')
let timeIcon = document.querySelector('[data-js="time-icon"]')
const weatherDescription = document.querySelector('[data-js="weather-details"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityClimate = document.querySelector('[data-js="city-climate"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')

const showWeatherDashboard = booflag => booflag ? dashboard.classList.remove('d-none') : undefined
const getWeatherIcon = id => {
    let numberId = id <= 9 ? `0${id}` : id
    timeIcon += timeIcon.innerHTML = `<img src="./src/icons/${numberId}-s.png" />`
}

form.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()

    try {
        const [{ Key, LocalizedName }] = await getCityData(inputValue)
        const [{ IsDayTime, Temperature, WeatherIcon, WeatherText }] = await getWeatherData(Key)

        if (!Key || !IsDayTime) {
            throw new Error(`Não foi possível obter os dados da Cidade`)
        }

        IsDayTime ? timeIMG.setAttribute('src', `./src/day.svg`) : timeIMG.setAttribute('src', `./src/night.svg`)
        getWeatherIcon(WeatherIcon)
        cityName.textContent = LocalizedName
        cityClimate.textContent = WeatherText
        cityTemperature.textContent = Temperature.Metric.Value
        showWeatherDashboard(true)

    } catch (error) {
        alert(error)
    }

    form.reset()
})