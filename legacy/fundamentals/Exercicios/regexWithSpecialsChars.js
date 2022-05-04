// Caso: Retorne qualquer string no formato de 4 digitos!

let year = /\d\d\d\d/;

console.log('Status: ', year.test("05"))
console.log('Status: ', year.test("2020"))
console.log('Status: ', year.test("0029"))
console.log('Status: ', year.test("2020B"))
console.log('Status: ', year.test("Oops!"))

console.log('\nIf Word with three letters: return true\n')

let wordWithThreeLetter = /\w\w\w/; // Usando métodos do javascript aliado ao regex é possível identifcar apenas as ocorrências desejadas.
console.log('Status  {day}: ', wordWithThreeLetter.test("day") && "day".length == 3)
console.log('Status  {year}: ', wordWithThreeLetter.test("year") && "year".length == 3)
console.log('Status {Helffflo}:', wordWithThreeLetter.test("Helffflo") && "Helffflo".length == 3)
console.log('Status {Test}:', wordWithThreeLetter.test("Test") && "Test".length == 3)


console.log('\nRetorne true se conter ao menos 2 digitos\n')
let day = /\d\d/;

console.log('Status de {1}: ', day.test("1"))
console.log('Status de {15}: ', day.test("15"))
console.log('Status de {150fd}: ', day.test("150fd"))
console.log('Status de {fjrig0}:', day.test("fjrig0"))
console.log('Status de {1505fd}: ', day.test("1505fd"))
console.log('Status de {fjrig}: ', day.test("fjrig"))

console.log('\nRetorne true seguindo as condicionais\n')

console.log('Status de {1}: ', day.test("1") && "1".length == 2)
console.log('Status de {15}: ', day.test("15") && "15".length == 2)
console.log('Status de {150fd}: ', day.test("150fd") && "150fd".length == 2)
console.log('Status de {fjrig0}:', day.test("fjrig0") && "fjrig0".length == 2)
console.log('Status de {1505fd}: ', day.test("1505fd") && "1505fd".length == 2)
console.log('Status de {fjrig}: ', day.test("fjrig") && "fjrig".length == 2)