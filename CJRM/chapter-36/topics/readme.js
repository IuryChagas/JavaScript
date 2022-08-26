const user1 = {
    name: 'githubix',
    email: 'git.hubix@github.com',
    login: () => 'Usuário conectado',
    logout: () => 'Usuário desconectado'
}

const user2 = {
    ...user1,
    name: 'gitlabix',
    email: 'git.labix@gitlab.com'
}

console.log(user1, user2)

class User {
    constructor (name, email) {
        this.name = name,
        this.email = email,
        this.points = 0
    }

    login () {
        console.log(`${this.name} logou na aplicação`)
        return this
    }
    logout () {
        console.log(`${this.name} deslogou da aplicação`)
        return this
    } 
    addPoint () {
        this.points++
        return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
    }
}

const user3 = new User('gitblitx', 'git.blitx@gitblit.com')

console.log(user3)

user3.login().addPoint()

console.log(user3)

console.log(user3.logout())


class Mammal {
    constructor (specie, name, age) {
        this.specie = specie,
        this.name = name,
        this.age = age
        this.mamaryGland = true
    }

    incrementAge () {
        this.age++
    }
}

const polaca = new Mammal('zebra', 'Polaca', 39)
const mitiao = new Mammal('gnu', 'Mitiao', 23)
const bradok = new Mammal('cavalo', 'Bradok', 34)

console.log(polaca)

class Lion extends Mammal {
    constructor (specie, name, age, manEater) {
        super(specie, name, age)
        this.manEater = manEater
    }
    eatsZebra(animals) {
        return animals.filter( animal => animal.specie !== 'zebra')
    }
} 

const animals = [ polaca, mitiao, bradok ]

const guloso = new Lion('lion', 'Guloso', 27, false)

console.log(guloso)
console.log(guloso.eatsZebra(animals))


