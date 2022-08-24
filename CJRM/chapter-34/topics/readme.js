// ::::::::: Adicionando dados na localStorage ::::::::: 

// localStorage.setItem('name', 'Mitião')
// localStorage.setItem('age', 7.5)

// let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')


// ::::::::: Alterando dados na localStorage ::::::::: 

localStorage.setItem('name', 'Tuddy')
localStorage.setItem('age', 3)

// console.log(name)
// console.log(age)


name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name)
console.log(age)


// ::::::::: Removendo dados da localStorage :::::::::

// ::: removendo item especifico ::: 
localStorage.removeItem('name')
 
name = localStorage.getItem('name')
console.log(name)

// ::: removendo todos os dados da LocalStorage :::
localStorage.clear()

name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log({name, age})

// ::::::::: Serialização de dados na localStorage :::::::::

// Armazenando dados e objetos mais complexos na localStorage

const myArray = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { e: 5, d: 6 }
]

console.log(typeof JSON.stringify(myArray), JSON.stringify(myArray))
console.log()

// convertendo em string
localStorage.setItem('myArray', JSON.stringify(myArray))

// obtendo o objeto em string da localStorage
const JSONFromLocalStorage = localStorage.getItem('myArray')

console.log(JSONFromLocalStorage)

// convertendo o objeto string para objeto JavaScript novamente
const myConvertedArray = JSON.parse(JSONFromLocalStorage)

// processo de serialização finalizado!
console.log(myConvertedArray)