const APIKey = 'MjzrtGtGJxZm33v4B4uFAmAKG7znW1KX'
const languageAcronym = 'pt-br'
const baseURL = `http://dataservice.accuweather.com/`

const getCityUrl = cityName => `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`
const getCityWeatherURL = ({ Key }) => `${baseURL}currentconditions/v1/${Key}?apikey=${APIKey}&language=${languageAcronym}`

const fetchData = async endPoint => {
    try{
        const response = await fetch(endPoint)

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        return await response.json()

    }catch (error) {
        return console.erro(error)
    }
}

const getCityData = cityName => fetchData( getCityUrl(cityName) )

const getCityWeather = async cityName => {
    const [ cityData ] = await getCityData(cityName)

    const endPoint = getCityWeatherURL(cityData)

    return fetchData(endPoint)
}

getCityWeather('Curitiba').then( console.log )