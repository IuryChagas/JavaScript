console.log(1)
console.log(2)

setTimeout(()=>{
    console.log('função de callback executada!')
}, 2000)

console.log(3)
console.log(4)



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => response.json())
    .then( json => console.log(json))