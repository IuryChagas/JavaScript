const APIKey = 'MjzrtGtGJxZm33v4B4uFAmAKG7znW1KX'
const languageAcronym = 'pt-br'
const baseURL = `http://dataservice.accuweather.com/`

const getCityURL = cityName => `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`
const getWeatherURL = cityId => `${baseURL}currentconditions/v1/${cityId}?apikey=${APIKey}&language=${languageAcronym}`

const fetchData = async endPoint => {
    try{
        const response = await fetch(endPoint)

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        return await response.json()

    }catch ({ name, message}) {
        alert(`${name}: ${message}`)
        console.erro(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData( getCityURL(cityName) )
const getCityWeather = cityId => fetchData( getWeatherURL(cityId) )
