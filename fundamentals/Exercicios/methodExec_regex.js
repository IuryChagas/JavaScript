// O método exec retorna um objeto com algumas informações sobre a regex;

let test = /\d+/.exec("Number 100");

console.log(test)
console.log('\nIndice da ocorrência do 1° digito encontrado: ',test.index)
console.log('Input: ',test.input)
console.log('Groups: ',test.groups)