console.info(
  `
  \n###########################   EXERCISES CHAPTER 33   ###########################

  `
)

/*
  01

  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/
console.info("## Exercise >> 01")

console.log(book)
console.log(' - [x] invertido a ordem de request do javascript no index.html')

/*
  02

  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/
console.info("## Exercise >> 02")

const swap = ([item1, _, item3]) => [item3, item1]

const array = ['1º item', '2º item', '3º item']

console.log(
  swap(array)
)

/*
  03

  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/
console.info("## Exercise >> 03")

const topics = [
  { id: 1, name: 'Artes & cultura'},
  { id: 2, name: 'Negócios & finanças'},
  { id: 3, name: 'Carreiras'}
]

const [, , { name }] = topics

console.log(name)

/*
  04

  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/
console.info("## Exercise >> 04")

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF']

const [_, [red, green, blue], __] = colors

console.log(red, green, blue)

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
console.info("## Exercise >> 05")

const greet = (obj, dynamicName) => {
  const { [dynamicName]: name = 'desconhecido' } = obj
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
console.info("## Exercise >> 06")


/*
  07

  - Refatore o weather.js;
  - Uma dica do que pode ser melhorado:
    - A repetição dos requests pode ser eliminada por uma função genérica e 
      reutilizável, responsável apenas por fazer requests.
*/
console.info("## Exercise >> 07")

