// Um objeto é uma coleção de chave e valor!

//    Par   Name     Value
    const wellcome = 'Eaew!'; // Contexto Léxico 1

// Contexto Léxico é o local onde a variavel foi denifida fisicamente no código...


function exec() {
 // obs: Os nomes das variaveis são os mesmos só não entram em conflito devido à hierarquia de contextos!
    const wellcome = 'Blz!'; // contexto  léxico 2 >> "pois a var foi denifica em outro contexto"
    return wellcome
}

//  Objetos são grupos aninhados  de pares nome/valor

const client = {
    name: 'Iury',
    age: 45,
    weight: 92,
    address: {
        publicPlace: 'Rua da Farofa frente av. Tufão de vento',
        number: 1345
    }
}

console.log(wellcome);
console.log(exec());
console.log(client);