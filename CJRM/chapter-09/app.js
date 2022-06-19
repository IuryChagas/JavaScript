console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 09   :::::::::::::::::::::::::::
    `
  )

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num } ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

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
section(1)

const cat = {
    name: 'Enzo',
    age: 7,
    color: 'Grey',
    bestFriends: ['Tudy','John Polak', 'Tatiane', 'Banguela'],
    sound: () => `Miiiauhh`
}

result(cat)
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
section(2)

result(` Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
section(3)
cat.age += 2

result(`age cat: ${cat.age}`)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
section(4)

const addFriend = name => cat.bestFriends.push(name)

addFriend(`Bailarina`)

result(`bestFriends: ${cat.bestFriends.join(', ')}`)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de colchetes.
*/
section(5)

const addColor = color => {
    const catColor = cat["color"]
    cat["color"] = []
    cat["color"].push(catColor)
    cat["color"].push(color)

    return cat.color
}

addColor('White')

result(cat.color)

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
section(6)


const isObject = obj =>  (typeof obj === typeof {})


const name = {
    name: 'Pomofocus'
}

result(isObject(name))

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
section(7)

const dog = {
    name: `Theobaldo`,
    age: 4,
    color: 'brown',
    bestFriends: ['Miucha', 'Billy', 'Ruth'],
    sound: () => `woooof`
}

const sumAges = (obj1, obj2) => {
    return  `A soma das idades de ${obj1.name} e ${obj2.name} é ${obj1.age + obj2.age}.`
}


result(sumAges(dog, cat))

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV" está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/
section(8)

const isAnSUV = car => {
    if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
      return true
    }
  
    return false
  }
  
console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

const suvCars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35']
console.log('\n')

result(suvCars.includes('Honda Civic'))
result(suvCars.includes('Ford EcoSport'))

/*
09

- Crie uma função que recebe um parâmetro 'type';
- Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
- Se o valor que o parâmetro type receber corresponder à alguma das 3 propriedades, retorne a mensagem que a propriedade armazena;
- Teste a função, exibindo no console a mensagem de cada propriedade.
*/

section(9)

const getTypeOf = type => {
    const obj = {
        null: `Seta, explicitamente, uma variável sem valor.`,
        undefined: `Representa um valor não-setado.`,
        object: `Arrays, Datas, Objetos literais, Funções, etc.`,
    }
    return `${type}: ${obj[typeof type]}`
}

result(getTypeOf(null))
result(getTypeOf(undefined))
result(getTypeOf(dog))
