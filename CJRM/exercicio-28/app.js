console.info(
  `
  \n###########################   EXERCISES CHAPTER 28   ###########################

  `
)

/*
01

- Crie um objeto de request;
- Abra este website https://pokeapi.co/;
- Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
tipo GET para obter dados do pokémon 'pikachu';
- Envie a requisição e trackeie ela usando o listener de evento adequado;
- Verifique se o estado da requisição representa que a operação foi completada
e se o status http do request indica que a requisição foi bem sucedida;
- Se as condições do item acima forem atendidas, exiba no console o texto da 
resposta que a requisição obteve;
- Se apenas a 1ª condição for atendida (o estado da requisição representa que 
  a operação foi completada), exiba no console a mensagem 'Não foi possível 
  obter os dados do pokémon';
  - Teste também a verificação do item acima.
  */
console.info("## Exercise >> 01")

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', ()=> {
  const isRequestOk = request.readyState === 4 && request.status === 200
  const isRequestNotOk = request.readyState == 4 && request.status === 404

  if (isRequestOk) {
    console.log('Status: ', request.status)
    console.log(request.responseText)
    return
  }

  if (isRequestNotOk) {
    console.log('Status:', request.status)
    console.log('Não foi possível obter os dados do pokémon')
  }

})

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachuQ')
request.send()

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

console.info("## Exercise >> 02")

const personalInfo = {
  name: '',
  lastName: '',
  gender: '',
  age: 0,
  height: 0,
  weight: 0,
  isWalking: false,
  metersWalked: 0
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
console.info("## Exercise >> 03")

personalInfo.incrementAge = () => {
  personalInfo['age']++
}

for (let iterator = 0; iterator < 5; iterator++) {
  personalInfo.incrementAge()  
}
 
console.log('age:', personalInfo['age'])

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
console.info("## Exercise >> 04")

personalInfo.walk = meters => {
  personalInfo['isWalking'] = true
  return `isWalking: ${personalInfo["isWalking"]}\nwalkdMeters ${personalInfo.metersWalked += meters}m\n`

}

const meters = [4, 2, 6, 19]

meters.forEach( meters => console.log(personalInfo.walk(meters)) )

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
console.info("## Exercise >> 05")

personalInfo.message = () => {
  const { name, lastName, gender, age, height, weight, isWalking, metersWalked } = personalInfo
 
  const fullname = name +' '+ lastName
 
  const pluralOrSingular = (value, type) => {
    if(value === 1){
      return value +' '+ type
    }
    return value + ` ${type}s`
  }
  const genderOfPersonInfo = personalInfo.gender === 'F' ? 'a' : 'o'
  const myAge = pluralOrSingular(age, 'ano')
  const myHeight = pluralOrSingular(height, 'metro')
  const distance = metersWalked

  return `Oi. Eu sou ${genderOfPersonInfo} ${fullname}, tenho ${myAge}, ${myHeight} de altura, peso ${weight}Kg e, só hoje, eu já caminhei ${distance} metros.`
}
personalInfo.name = 'Chris'
personalInfo.lastName = 'Brishgliario'
personalInfo.gender = 'M'
personalInfo.age = 35
personalInfo.height = 1.83
personalInfo.weight = 96

console.log(
  personalInfo.message()
)
/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/
console.info("## Exercise >> 06")

const truthyOrFalsyValue = value => console.log(`${value}:`, Boolean(value))

const falsyValues = ["", 0, undefined, null, NaN, false]
const truthyValues = [" ", 1, ()=>{}, true, [], {}, -1]

console.info('\n##### Falsy Values #####')
falsyValues.forEach( value => truthyOrFalsyValue( value ) )

console.info('\n##### Truthy Values #####')
truthyValues.forEach( value => truthyOrFalsyValue( value ) )

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

console.info("## Exercise >> 07")

const getBooks = bookTitle => {
  const books = {
    'Clean Code': {
      pagesTotal: 431,
      author: 'Robert C. Martin,  Michael C. Feathers, Timothy R. Ottinger',
      publisher: 'Prentice Hall PTR'
    },
    'The Mythical Man-Month': {
      pagesTotal: 336,
      author: 'Fred Brooks',
      publisher: 'Addison-Wesley'
    },
    'The Pragmatic Programmer': {
      pagesTotal: 352,
      author: 'Dave Thomas, Andy Hunt',
      publisher: 'Addison-Wesley'
    }
  }
  return books[bookTitle] || books
}

console.table(getBooks('Clean Code'))
