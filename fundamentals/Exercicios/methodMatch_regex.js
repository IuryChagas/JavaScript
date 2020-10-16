// O método match funciona similarmente ao exec;

let test = "fjalskdfjar gj 42".match(/\d+/)
let phrase = "fjalskdfjar gj asdf".match(/\d+/)

console.log('\nObjeto completo: ', test)
console.log('Indice da ocorrência do 1° digito encontrado: ', test.index)


console.log('\nObjeto completo, porem \nSe não houver n°s retorne null: ', phrase)
//console.log('\nSe não houver n°s retorne null: ', phrase.index)
console.log('Type Of: ', typeof phrase)