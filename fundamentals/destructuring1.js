// new feature ES2015

const person = {
  name: 'Tainah',
  age: 5,
  address: {
  	publicPlace: 'Street White Rock',
	  number: 984
  }
}
// O operador destructuring � uma forma simplificada de retirar atributos de uma estrutura, no caso acima do objeto person = {...}

const { name, age} = person; // leitura: Tire de dentro do objeto person, os atributos 'name' e 'age'
console.log(name, age);

const {name: n, age: a} = person; // leitura: o valor do atributo 'name' será armazenado na nova var 'n' e o valor da age na var 'a'
console.log(n, a);

const {nickname, genre = true} = person;
console.log(nickname, genre);

// leitura: o Operador destructuring extraira de dentro do obj address os valores dos atributos publicPlace e number,
// como o atributo não esta criado, retornará undefined!
const {address: { publicPlace, number, cep}} = person; 
console.log(publicPlace, number, cep);


