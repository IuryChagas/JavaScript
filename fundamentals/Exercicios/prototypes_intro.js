// Um obj fallback de outro obj;
// Quando um obj recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto;
// O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem...


let person = {
    hands: 2
}

let person2 = person;

console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) === Object.prototype);


console.log(person2);
console.log(person2.hands);

console.log(person.toString() == Object.prototype.toString());

console.log(person.hasOwnProperty('hands'));