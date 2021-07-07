const getTodos = url => new Promise( (resolve, reject) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const success = request.readyState === 4 && request.status === 200
        const error = request.readyState === 4 && request.status === 404

        if (success) {
            const data = {
                "status": request.status,
                "data": JSON.parse(request.responseText)
            }
            resolve(data)
        }

        if (error) {
            const data = {
                "status": JSON.parse(request.status),
            }
            reject(data)
        }
    })

    request.open('GET', url)
    request.send()

})

getTodos('../json/todos.json')
    .then( data => console.log('Dados obtidos com sucesso - ', data) )
    .catch( error => console.log(error, ' - Não foi possível completar a requisição') )
