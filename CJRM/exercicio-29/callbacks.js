const getTodos = (url, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=> {
    const successfulRequest = request.readyState === 4 && request.status === 200 
    const badRequest = request.readyState === 4 && request.status === 404

        if (successfulRequest) {
            const data = JSON.parse(request.responseText)
            callback( null, data )
            return
        }
        if (badRequest) {
            callback(`status: ${request.status}`, null)
        }
    })

    request.open('GET', url)
    request.send()
}

getTodos('../json/todos.json',(error, data) => {
    console.log(`responseBody: `, data)
    getTodos('../json/todos-02.json',(error, data) => {
        console.log(`responseBody: `, data)
        getTodos('../json/todos-03.json',(error, data) => {
            console.log(`responseBody: `, data)
            getTodos('../json/todos-04.json',(error, data) => {
                console.log(`responseBody: `, data)
            })
        })
    })
})