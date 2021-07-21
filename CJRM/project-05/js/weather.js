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

        return await console.log(cityData.Key)

    } catch ({ name, message }) {

        alert(`${name}: ${message}`)

    }
}

getCityKey('Curitiba')
