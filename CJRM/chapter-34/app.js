console.info(
    `
    \n:::::   EXERCISES CHAPTER 34   :::::
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

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/
section(1)

const getJSONFromLocalStorage = keyName => JSON.parse(localStorage.getItem(keyName))

const getArrayFromLocalStorage = getJSONFromLocalStorage('myArray')

result(getArrayFromLocalStorage)

/*
  02

  - Mesmo com um input type="number", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo number;
  - Não utilize a invocação da Number() ou qualquer outro método que converta 
    strings em number.

  Dica: pesquise por valueAsNumber.
*/
section(2)

const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', event => result(`exercise 02:: ${event.target.valueAsNumber}`))

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/
section(3)

const combineOperations = (num, arr) => {
    let currentFunc = null
    let returnedValue = num

    for (let i = 0; i < arr.length; i++) {
        currentFunc = arr[i]

        returnedValue = currentFunc(returnedValue)
    }
    // arr.reduce((acc, func) => {
    //     acc = num
    //     acc = func(num)

    // }, 0)
    return returnedValue
}

function add100 (num) {
  return num + 100
}

function divByFive (num) {
  return num / 5
}

function multiplyByThree (num) {
  return num * 3
}

function multiplyFive (num) {
  return num * 5
}

function addTen (num) {
  return num + 10
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/
section(4)

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.90,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.00,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.90,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.00,
  genre: 'Rock'
}

if (albums.includes(searchAlbum)) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
}

const albumsContainsAlbum = albums.some( album => JSON.stringify(searchAlbum) == JSON.stringify(album) )
    ? `${JSON.stringify(searchAlbum)} existe no array albums.`
    : undefined

result(albumsContainsAlbum)

/*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/
section(5)

const obj = {
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' },
}

const objCopy1 = {
    ...obj
}

let objCopy2 = JSON.stringify(obj)
objCopy2 = JSON.parse(objCopy2)

result(objCopy1)
result(objCopy2)


/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/
section(6)

const generateHTMLElement = (name, obj) => {
    const newHTMLElement = document.createElement(name)

    for (let i = 0; i < Object.entries(obj).length; i++) {

        const atributeName = Object.entries(obj)[i][0]
        const atributeValue = Object.entries(obj)[i][1]

        newHTMLElement.setAttribute(atributeName, atributeValue)
    }

    return newHTMLElement
}

const attrObject = {
    "src": `/src/favicon.icon`,
    "img": `/src/image.jpg`,
    "class": `top`
}
result(generateHTMLElement('image', attrObject))

/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/

const apikey = "1YtobioGrrCxHFpTJLiFWGeKlKnBCleJ"
const baseURL = `http://dataservice.accuweather.com`

const getCityInfoEndPoint = cityName => `${baseURL}/locations/v1/cities/search?apikey=${apikey}&q=${cityName}&language=pt-br`

const getiCityURL = cityName => getCityInfoEndPoint(cityName)

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
  
  
const cityForm = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeatherDescription = document.querySelector('[data-js="city-weather"')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"')
const timeImage = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"')

const showCityCard = () => cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : undefined

const saveOnLocalStorage = (name, dataObjects) => {
    localStorage.setItem(name, JSON.stringify(dataObjects))
}

const showCityWeatherInfo = async userInput => {
    const [{Key, LocalizedName }] = await getCityData(userInput)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }]  = await getCityWeather(Key)

    const data =  {
        "localizedName": LocalizedName,
        "weatherText": WeatherText,
        "temperature": Temperature.Metric.Value,
        "isDayTime": IsDayTime,
        "weatherIcon": WeatherIcon 
    }

    saveOnLocalStorage('cityWeatherData', data)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    IsDayTime ? timeImage.src = './src/day.svg' : timeImage.src = './src/night.svg'
    timeIconContainer.innerHTML = timeIcon
    cityName.textContent = LocalizedName
    cityWeatherDescription.textContent = WeatherText
    cityTemperature.textContent = Temperature.Metric.Value

  }

const weatherDataFromLocalStorage = localStorage.getItem('cityWeatherData')

if (weatherDataFromLocalStorage) {    
    const dataSerialization = JSON.parse(weatherDataFromLocalStorage)

    const { localizedName, weatherText, temperature, isDayTime, weatherIcon } = dataSerialization

    const timeIcon = `<img src="./src/icons/${weatherIcon}.svg" />`
    isDayTime ? timeImage.src = './src/day.svg' : timeImage.src = './src/night.svg'
    timeIconContainer.innerHTML = timeIcon
    cityName.textContent = localizedName
    cityWeatherDescription.textContent = weatherText
    cityTemperature.textContent = temperature
    showCityCard()
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.city.value.trim()
  
    showCityCard()
    showCityWeatherInfo(inputValue)
  
    cityForm.reset()
  })
