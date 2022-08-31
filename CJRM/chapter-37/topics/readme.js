// class Student {
//     constructor(name, email) {
//         this.name = name,
//         this.email = email
//     }
// }

function Student (name, email) {
    this.name = name
    this.email = email

    this.login = function () {
        return `${this.name} fez login`
    }
}


const tuddy = new Student('Tuddy', 'tuddy@blackcats.com.cat')
const mitiao = new Student('Mitião', 'mitiao@mistcats.com.cat')

console.info('\nObserve que o metodo login esta diretamente acoplado à instância do objeto Student e não ao seu prototype.')
console.log(tuddy, mitiao)

console.info('\nA função login foi criada nos dois objetos e armazenada em locais diferente.')
console.info('\nCom isso a função esta com redundancia em memoria o que prejudica performance.')
console.info('\nHá formas mais eficiente para se trabalhar com prototipagem de objetos em javascript.')

console.log(tuddy.login === mitiao.login)

function Dragon (name, age) {
    this.name = name,
    this.age = age
}

// Para criar um metodoto via prototype utilize function declaration!
Dragon.prototype.setFire = function () {
    return `The ${this.name} breathed fire 💥💥💥`
}

const iriel = new Dragon('Iriel', 915)
const irmior = new Dragon('Irmior', 1927)

console.info('\nPerceba que agora o metodo setFire esta criado dentro do [[prototype]] do objeto Dragon')
console.log(iriel)
console.log(irmior)

console.log(irmior.setFire())

console.info('\nVeja que agora, ao utilizar o metodo de comparação, o retorno é true pois o metodo esta em apenas um lugar na memoria')
console.info('\na comparação esta sendo feita com o mesmo metodo, por isso o retorno é true')
console.info('\nPois o metodo foi definido no prototype e todas as instâncias do objeto herdarão o mesmo e único metodo do prototype')
console.log(iriel.setFire === irmior.setFire)

class Movie {
    constructor(title, user){
        this.title = title,
        this.user = user
    }

    comment () {
        return `${this.user} comentou o post`
    }
}

const forrestGump = new Movie('Forrest Gump', 'Tom Hanks')
const castAway = new Movie('Cast Away', 'Tom Hanks')

console.log(forrestGump.comment(), castAway.comment())
console.info('\nQuando a criação de objetos é por meio de classes em JavaScript, O conceito de prototype é aplicado internamente')
console.info('\nA validação que esta retornando true, esta fazendo exatamente a mesma coisa que realicado acima no estilo function declaration')
console.log(forrestGump.comment === castAway.comment)

console.info('\nOu seja, ambos os metodos comment() foram implementados no prototype do objeto Movie')
console.info('Sua origem é uma só, e todas as intâncias farão referencia ao mesmo metodo em memoria')
console.log(forrestGump, castAway)

console.info('\n#################     METODOS ESTATICOS EM FUNCTION DECLARATIONS    #################\n')

// Propriedade "formatToDatabase" recebendo uma função = static method
Dragon.formatToDatabase = function(aString) { // Evite utilizar funções anonimas como metodo estático, pois isso dificulta o debugging!
                        // busca criar dessa forma: Dragon.formatToDatabase = function formatToDatabase (aString) { ... } <-- nomeando a função!
    return aString.toUpperCase().replaceAll(' ', '_')
}

console.log(Dragon.formatToDatabase('string para banco de dados'))

console.info('\nObserve que o metodo "formatToDatabase()" não consta nas instâncias do objeto e nem em seu prototype.')
console.log(iriel)
console.log(irmior)

console.log(Dragon)
console.info('\nO metodo formatToDatabase() só existe na função construtora, este é o conceito de metodo estático')
console.dir(Dragon)


console.info('\n#################     METODOS ESTATICOS EM CLASSES    #################\n')

class Animal {
    constructor(specie, name) {
        this.specie = specie,
        this.name = name
    }

    static formatToDatabase (aString) {
        return aString.toUpperCase().replaceAll(' ', '_')
    }
}

const dumpo = new Animal('Elephant', 'Dumbo')

console.log(Animal.formatToDatabase('Animal specie name age size'))

console.log(Animal)
console.log(dumpo)
console.dir(dumpo)

console.info('\n#################    METODOS ESTATICOS EM FUNCTINOS DECLARATIONS DEVEM POSSUIR NOMES    #################\n')

function Dragon2 (name, age) {
    this.name = name,
    this.age = age
}

// Para criar um metodoto via prototype utilize function declaration!
Dragon2.prototype.setFire = function setFire () {
    return `The ${this.name} breathed fire 💥💥💥`
}

const iriel2 = new Dragon2('Iriel II', 915)
const irmior2 = new Dragon2('Irmior II', 1927)

console.info('\nNome da função estatica')
console.log(Dragon2.prototype.setFire.name)
console.dir(Dragon2)

console.info('\n#################    Prototype inheritance    #################\n')

function TeacherAssistant (name, email, scheduleWeekPosts) {
    // o metodo .call() herda o this e as propriedades da class Student 
    Student.call(this, name, email)

    // Criando um metodo estatico exclusivo do TeacherAssistant.
    this.scheduleWeekPosts = scheduleWeekPosts
}

// Para que o TeacherAssistant faça a herança do prototype da classe Studante, é necessário utiilizar o metodo create() do objeto root Object.
TeacherAssistant.prototype = Object.create(Student.prototype)

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
    return `${this.name} deu uma medalha para ${name}`
}

const hahvowo = new Student('Hahvowo', 'hahvowo@elf.com.ef')
const rathtafi = new TeacherAssistant('Rathtafi', 'rathtafi@readmeJS.com.js', false)

console.info('Observe que "rathtafi" possui seus metodos únicos e herda os mesmo metodos do prototype da "hahvowo"')
console.log(rathtafi, hahvowo)
console.log(rathtafi.giveBadge(hahvowo))
console.log(rathtafi.login())
