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
console.info('\n### Etapa 11 - Exercício: 01 ###\n ')

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', ()=>{
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText)
//     return
//   }
//   if (request.readyState === 4) {
//     console.log('Não foi possível obter os dados do pokemon')
//   }
// })

// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
// request.send()

// console.log(request)

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
console.info('\n### Etapa 11 - Exercício: 02 ###\n ')

let person = {
  name: 'Pierluigi',
  lastName: 'Piazzi',
  gender: 'male',
  age: 60,
  height: 1,
  weight: 96,
  isWalking: false,
  walkedMeters: 0
}

console.log(person)
/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
console.info('\n### Etapa 11 - Exercício: 03 ###\n ')

person.incrementAge = () => {
  return person.age += 1
}

for (let i = 0; i < 5; i++) {
  person.incrementAge()
}

console.log(person.age)
/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
console.info('\n### Etapa 11 - Exercício: 04 ###\n ')

person.walk = meters => {
  person.isWalking = true
  return person.walkedMeters += meters
}
const meters = [12, 35, 7, 680]

meters.forEach( route => {
  return person.walk(route)
 })

console.log('Caminhando:', person.isWalking," -> ", person.walkedMeters,'metros')

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
console.info('\n### Etapa 11 - Exercício: 05 ###\n ')

person.greetings = () => {
  const getSingularOrPluralSintax = (quantity, singular, plural) => {
    return quantity === 1 ? singular : plural
  }

  const {name, lastName, gender, age, height, weight, walkedMeters} = person

  const correctGender = gender === 'male' ? 'o' : `a`
  const year = getSingularOrPluralSintax(age, 'ano', 'anos')
  const meters = getSingularOrPluralSintax(height, 'metro', 'metros')
  const km = getSingularOrPluralSintax(walkedMeters, 'metro', 'metros')

  return console.log(
    `Oi. Eu sou ${correctGender} ${name} ${lastName}, tenho ${age} ${year}, ${height} ${meters} de altura, peso ${weight} quilos e, só hoje, eu já caminhei ${walkedMeters} ${km}.'`
  )
}

person.greetings()
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
console.info('\n### Etapa 11 - Exercício: 06 ###\n ')

const truthyOrFalsyValidator = value => {
  return Boolean(value) ? `${value} is Truthy` : `${value} is Falsy`
}

const falsyValues = [false, 0, "", null, undefined, NaN]

falsyValues.forEach( value => {
  return console.warn(truthyOrFalsyValidator(value))
})

const truthyValues = [true, 1, " ", ':)', "lorem...", 42, Object, () =>{}, {}, [], -1293840]

truthyValues.forEach(value =>{
  return console.log(truthyOrFalsyValidator(value))
})

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
console.info('\n### Etapa 11 - Exercício: 07 ###\n ')

const getBook = bookTitle => {
  const books = {
    'Introduction to Computing': {
      pages: 266,
      author: 'David Evans',
      publisher: 'CreateSpace Independent Publishing Platform'
    },
    'Explorations in Computing': {
      pages: 439,
      author: 'John S. Conery',
      publisher: 'Chapman and Hall'
    },
    'Design Patterns': {
      pages: 416,
      author: 'Erich Gamma',
      publisher: 'Addison-Wesley Professional'
    }
  }

  return bookTitle === undefined ? books : books[bookTitle]
}

console.log(
  getBook('Introduction to Computing')
)
console.log(
  getBook()
)