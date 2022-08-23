const fetchData = async url => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados!')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const apikey = "mtpIrVucJyRtnXFAnaHBSA2iL6iL0rtc"
const baseURL = `http://dataservice.accuweather.com`

const getCityInfoEndpoint = cityName => `${baseURL}/locations/v1/cities/search?apikey=${apikey}&q=${cityName}&language=pt-br`
const getCityWeatherEndpoint = locationKey => `${baseURL}/currentconditions/v1/${locationKey}?apikey=${apikey}&language=pt-br`

const getCityData = async cityName => {
    try {
        const response = await fetchData(getCityInfoEndpoint(cityName))
        
        if (!response) {
            throw new Error(`Não foi possível obter os dados da cidade`)
        }
        return response

    } catch (error) {
        return error
    }
}

const getWeatherData = async locationKey => {
    try {
        const response = await fetchData(getCityWeatherEndpoint(locationKey))

        if (!response) {
            throw new Error(`Não foi possível obter os dados climaticos da API`)
        }
        return response

    } catch (error) {
        return error
    }
}
