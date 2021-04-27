const getTodos = callback => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        const requestSuccess = request.readyState === 4 && request.status === 200
        const requestNotSuccess = request.readyState === 4

        if (requestSuccess) {
            callback(null, request.responseText)
            return
        }
        
        if (requestNotSuccess){
            callback('Não foi possível obter os dados', null)
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send()
}
console.log(1)
console.log(2)
console.log(3)

getTodos((error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(data)
})

console.log(4)
console.log(5)