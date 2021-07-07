const getTodos = (url, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const success = request.readyState === 4 && request.status === 200
        const error = request.readyState === 4 && request.status === 404

        if (success) {
            const data = {
                "status": request.status,
                "data": JSON.parse(request.responseText)
            }
            callback(null, data)
            return
        }

        if (error) {
            const data = {
                "status": JSON.parse(request.status),
            }
            callback(data, null)
            return
        }
    })

    request.open('GET', url)
    request.send()
}

const logMessageData = (error, data) => {
    return error 
        ? console.log(error, ' - Não foi possível completar a requisição')
        : console.log('Dados obtidos com sucesso - ', data)
}

getTodos('../json/todos.json', (error, data) => {
    logMessageData(error, data)
    getTodos('../json/todos-02.json', (error, data) => {
        logMessageData(error, data)
        getTodos('../json/todos-03.json', (error, data) => {
            logMessageData(error, data)
            getTodos('../json/todos-04.json', (error, data) => {
                logMessageData(error, data)
            })
        })
    })
})