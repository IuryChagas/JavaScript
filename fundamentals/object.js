const user1 = {}
    user1.name = 'Iuzy'
    user1.age = 24
    user1.weight = 55
    user1.height = 1.75

console.log(user1);

const user2 = {
    name: 'Iury',
    age: 26,
    weight: 68,
    height: 1.71
}

console.log(user2);

user3 = {
    name: 'Neiva',
    age: 48,
    weight: 63,
    height: 1.73,
        user4: {
            name: 'Wendvan',
            age: 29,
            weight: 73,
            height: 1.81,
            user4: { // Mesmo tendo o mesmo nome user4, Js identifica/aceita a hierarquia dos objetos e portanto não retorna erro!
                    type: 'undefined !' //não é recomendado o uso de atributos com espaços
                }
        }
}

console.log(user3);
// O user4 existe apenas no contexto local, ou seja apenas dentro do objeto user3!