const getTodos = callback => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=> {
    const successfulRequest = request.readyState === 4 && request.status === 200 
    const badRequest = request.readyState === 4 && request.status === 404

        if (successfulRequest) {
            callback(null, `status: ${request.status} - ${request.responseText}` )
            return
        }
        if (badRequest) {
            callback(`status: ${request.status}`, null)
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send()
}

getTodos((error, data) => {

    if (error) {
        console.log(error, ` - Não foi possível obter os dados`)
        return
    }

    console.log(`responseBody: `, data)
})