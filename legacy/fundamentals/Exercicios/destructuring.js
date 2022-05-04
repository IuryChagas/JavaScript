// Destructuring é uma técnica para converter valores de objetos em variáveis

const person = {
    name: 'Douglas',
    lastName: 'Chagas'
};
const {name: fname, lastName: lname} = person;

console.log(fname);
console.log(lname);

console.log('\n-------');
const car = {
    wheels: 4,
    doors: 4,
    airbags: true
};
const {wheels: rodas, doors: portas, airbags: protection} = car;

console.log("Rodas: ",rodas);
console.log("Portas: ", portas);
console.log("Airbags: ", protection);