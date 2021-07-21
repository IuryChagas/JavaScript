const APIKey = 'MjzrtGtGJxZm33v4B4uFAmAKG7znW1KX'
const languageAcronym = 'pt-br'

const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityKey = async cityName => {

    const endPoint = getCityUrl(cityName)

    try {
        const response = await fetch(endPoint)

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        const [ cityData ] = await response.json()
        console.log(cityData)
        return cityData

    } catch ({ name, message }) {

        alert(`${name}: ${message}`)

    }
}

const getCityWeather = async cityId  => {

    const { Key } = await getCityKey(cityId)

    const endPoint = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=${languageAcronym}`

    try{
        const response = await fetch(endPoint)

        if (!response.ok) {

            throw new Error('Não foi possível obter os dados')
        }

        const  [ cityWeatherData ] = await response.json()
        return console.log(cityWeatherData)

    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

getCityWeather('Curitiba')