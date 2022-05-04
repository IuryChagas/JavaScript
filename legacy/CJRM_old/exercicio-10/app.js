/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
console.info("## Exercise >> 01")

const cat = {
  "name": "Mitião",
  "age": 7,
  "color": "grey",
  "bestFriends": ["Banguela", "Preta"],
  sound(){
    return `Miau!`
  }
}

console.log(
  cat,
  cat.sound()
)
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
console.info("## Exercise >> 02")

let message = `Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends.join(' e ')}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`

console.log(message)
/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
console.info("## Exercise >> 03")

cat.age += 2

console.log(cat.age)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
console.info("## Exercise >> 04")

const addNewFriend = (name, object) => {
  object.bestFriends.push(name)
}

addNewFriend('Cinzala', cat)

console.table(cat.bestFriends)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
console.info("## Exercise >> 05")

const modifyColor = (object, color) => {
  object.color += ` and ${color}`
}

modifyColor(cat, 'white')

console.log(
  cat['color']
)
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
console.info("## Exercise >> 06")

const isObject = item => typeof item === 'object'

console.log(
  isObject(cat)
)
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
console.info("## Exercise >> 07")

const dog = {
  "name": "Black",
  "age": 7,
  "color": "Caramel",
  "bestFriends": ["Banguela", "Preta", "Mitião"],
  sound(){
    return `Wau Wau!`
  }
}
const getAgeMessage = (cat, dog) => {

  const sumOfAges = cat.age + dog.age
  const dogName = dog.name
  const catName = cat.name

  return `A soma das idades de ${catName} e ${dogName} é ${sumOfAges}.`
}

console.log(
  getAgeMessage(cat, dog)
)
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/
console.info("## Exercise >> 08")

const isAnSUV = car => {
  // if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
  //   return true
  // }
  const SuvCars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35']
  return SuvCars.includes(car)
}

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
console.info("## Exercise >> 09")

const getTypeDefinition = type => {
  const obj = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }
  return obj[type]
}

console.log(
  "null: ", getTypeDefinition('null')
)

console.log(
  "undefined: ", getTypeDefinition('undefined')
)

console.log(
  "object: ", getTypeDefinition('object')
)

console.info("\n#### Solução diferente para o mesmo problema ####")
console.log('\n')

const getTypeDescriptionOf = type => {
  return {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }[type]
}

console.log(
  "null: ", getTypeDefinition('null')
)

console.log(
  "undefined: ", getTypeDefinition('undefined')
)

console.log(
  "object: ", getTypeDefinition('object')
)