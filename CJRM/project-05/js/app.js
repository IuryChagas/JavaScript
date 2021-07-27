const form = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')

const showCityCard = () => {
    return cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : false
}
const showPeriodDay = IsDayTime => {
    return timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
}
const showCityWeatherInfo = async cityName => {

    const [{ Key, LocalizedName }] = await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)

    showPeriodDay(IsDayTime)

    const imageIcon = document.createElement('img')
    imageIcon.setAttribute('src', `./src/icons/svg/${WeatherIcon}.svg`)
    imageIcon.setAttribute('class', 'time-icon')
    timeIcon.insertAdjacentElement('afterend', imageIcon)

    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    showCityCard()
}

const showLocalStorageCity = () => {
    const city = localStorage.getItem('city')

    if (city) {
        showCityWeatherInfo(city)
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    localStorage.setItem('city', inputValue)

    showCityWeatherInfo(inputValue)

    form.reset()
})

showLocalStorageCity()