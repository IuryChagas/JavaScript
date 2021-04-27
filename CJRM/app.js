const getTodos = (url, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{
        const requestSuccess = request.readyState === 4 && request.status === 200
        const requestNotSuccess = request.readyState === 4

        if (requestSuccess) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }
        
        if (requestNotSuccess){
            callback('Não foi possível obter os dados', null)
        }
    })

    request.open('GET', url)
    request.send()
}

getTodos('./json/todos.json', (error, data) => {

    console.log(data)
    getTodos('./json/todos-02.json', (error, data) => {
        console.log(data)
        getTodos('./json/todos-03.json', (error, data)=> {
            console.log(data)
        })
    })
})
