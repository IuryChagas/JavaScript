console.info(
    `
    \n:::::   EXERCISES CHAPTER 32   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}

const result = result => {
    return console.log(' result >> ', result)
}

/*
  01

  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/
section(1)

console.log(book)

/*
  02

  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/
section(2)

const invertNumbers = ([firstItem, , thirdyItem]) => [thirdyItem, firstItem]

const getInvertedNumbers = invertNumbers([2, 3, 4])

result(getInvertedNumbers)
/*
  03

  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/
section(3)

const topics = [
  { id: 1, name: 'Artes & cultura'},
  { id: 2, name: 'Negócios & finanças'},
  { id: 3, name: 'Carreiras'}
]

const [, , { name }] = topics

result(name)

/*
  04

  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/
section(4)

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF']

const [, [red, green, blue]] = colors

result(`${red} ${ green} ${blue}`)
/*
  05

  - Descomente o código abaixo e implemente a função greet;
  - Observe que ela recebe 2 argumentos, um objeto e uma string;
  - Dentro da declaração da função:
    - Faça um destructuring no objeto recebido no 1º argumento;
    - No destructuring, nomeie de forma dinâmica a const que você está 
      declarando, usando o 2º argumento que a invocação da função recebeu.
      Você já conhece a sintaxe que nomeia de forma dinâmica;
    - Atribua "desconhecido" como valor default da const do destructuring;
    - Faça a função retornar "Olá, meu nome é [NOME]!".
*/
section(5)

const greet = (obj, dynamicName) => {
  const { [dynamicName]: name = '"nome não definido"' } = obj
  return `Olá, meu nome é ${name}!`
}

console.log(greet({ name: 'Iury' }, 'name'))
console.log(greet({}, 'personName'))


/*
  06

  - O idioma da interface gráfica da aplicação que estamos construindo 
    (Weather App) é pt-BR;
  - Ao invocarmos a getCityWeather, observe que a propriedade "WeatherText" do 
    objeto obtido armazena a descrição do clima em inglês: "cloudy", "rain", 
    etc;
  - Traduza os possíveis valores dessa propriedade;
  - Não é necessário implementar condicionais, objetos, ou arrays para fazer
    isso.
*/
section(6)

const apikey = "mtpIrVucJyRtnXFAnaHBSA2iL6iL0rtc"
const baseURL = `http://dataservice.accuweather.com`

const getCityInfoEndPoint = cityName => `${baseURL}/locations/v1/cities/search?apikey=${apikey}&q=${cityName}&language=pt-br`

const getiCityURL = cityName => getCityInfoEndPoint(cityName)

result(getiCityURL('Curitiba'))
/*
  07

  - Refatore o weather.js;
  - Uma dica do que pode ser melhorado:
    - A repetição dos requests pode ser eliminada por uma função genérica e 
      reutilizável, responsável apenas por fazer requests.
*/

section(7)


const fetchData = async url => {
  try {
    const response = await fetch(url)
  
    if(!response.ok){
      throw new Error('Não foi possível obter os dados!')
    }

    return response.json()

  } catch ({ name, message }) {
    alert(`${name}: ${message}!`)
  }
}

const getCityWeatherURL = ({ Key }) => `${baseURL}/currentconditions/v1/${Key}?apikey=${apikey}&language=pt-br`

const getCityData = cityName => fetchData(getiCityURL(cityName))

const getCityWeather = async cityName => {
  const [cityData] = await getCityData(cityName)
  const cityWeatherEndPoint = getCityWeatherURL(cityData)

  return fetchData(cityWeatherEndPoint)
}

// getCityWeather('São Paulo').then(console.log)

const cityForm = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeatherDescription = document.querySelector('[data-js="city-weather"')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"')
const timeImage = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"')

const showCityCard = () => cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : undefined

const showCityWeatherInfo = async userInput => {
  const [{Key, LocalizedName }] = await getCityData(userInput)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }]  = await getCityWeather(Key)

  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`
  IsDayTime ? timeImage.src = './src/day.svg' : timeImage.src = './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityName.textContent = LocalizedName
  cityWeatherDescription.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.city.value.trim()

  showCityCard()
  showCityWeatherInfo(inputValue)

  cityForm.reset()
})
