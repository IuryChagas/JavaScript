
/// Utilizando Spread Operator em Arrays

const firstArray = [ 0, 1, 2, 3, 4, 5 ]
const secondArray = [ 6, 7, 8, 9, 10 ]
const joinArraysWithConcatMethod = secondArray.concat(firstArray)
const joinArraysWithSpreadOperator = [...firstArray, ...secondArray]

console.log('Concat Method: ', joinArraysWithConcatMethod)
console.log('Spread Operator: ', joinArraysWithSpreadOperator)


/// Utilizando Spread Operator em Objetos

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }

const obj3 = Object.assign({}, obj1, obj2)

console.log('Copying objects with Object.assign: ', obj3)

const obj4 = {
    ...obj1,
    ...obj2
}

console.log('Copying objects with Spread Operator: ', obj4)

/// Utilizando Spread Operator em Strings

const getReversedString1 = string => string.split('').reverse().join('')

const reversedName = getReversedString1('chagas')


console.log('reversed Name:', reversedName)

const getReversedString2 = string => [ ...string ].reverse().join('')

const reversedNumbers = getReversedString2('123456789')

console.log('reversed Numbers: ', reversedNumbers)


/// Utilizando Spread Operator em Funções


const getMinimumNumber = Math.min(2, 7, 42, 13,8, -369, 17, 36, 12)
console.log('get Minimum Number: ', getMinimumNumber)

const getMaximumNumber = Math.max(2, 7, 42, 13,8, -369, 17, 36, 12)
console.log('get Maximum Number: ', getMaximumNumber)

const arrayOfNumbers = [2, 7, 42, 13,8, -369, 17, 36, 12]

console.log('get MIN number test:', Math.min(arrayOfNumbers))
console.log('get MIN number using SpreadOp: ', Math.min(...arrayOfNumbers))
console.log('get MAX number using SpreadOp: ', Math.max(...arrayOfNumbers))