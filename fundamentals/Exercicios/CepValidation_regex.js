console.log('\n============= CEP Validation =============\n')
let cepValidation = /[0-9]{5}-[0-9]{3}/; // [0-9] = conjunto de números de 0 à 9. {5} o indice desse conjunto deve ser um total de 5 digitos. O mesmo vale para [0-9] com maximo de indice 3.

console.log('status cep {Guarapuava}:', cepValidation.test("85070-200"))
console.log('status cep {Curitiba}:', cepValidation.test("80230-050"))
console.log('status cep {undefined}:', cepValidation.test("8123-05d"))