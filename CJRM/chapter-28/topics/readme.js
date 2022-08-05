console.log(`::: Callback functions :::`)


const getTodos = (callback, url) => {
    const request = new XMLHttpRequest()

    // console.log(request)

    request.addEventListener('readystatechange', () => {
        // console.log(request.readyState)
        // console.log(request.status)
        const requestOk = request.readyState === 4 && request.status === 200
        const requestNotOk = request.readyState === 4
        if (requestOk) {
            const data = JSON.parse(request.responseText)
            // console.log(request.responseText)
            // callback(null, request.responseText)
            callback(null, data)
            return
        }

        if (requestNotOk) {
            const response = {
                statusCode: request.status,
                description: `Não foi possível obter os dados da API.`
            }
            callback(response, null)
            // console.log(response)
        }
    })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todofs/1')
    request.open('GET', url)
    request.send()
}

const getAll = 'todos'
const id = 2
getTodos( (error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(data)
}, `https://jsonplaceholder.typicode.com/${getAll}/`)

getTodos( (error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(data)
}, `https://jsonplaceholder.typicode.com/todos/${id}`)


const localJSONFile = './data.json'

getTodos( (error, data) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(data)
}, `${localJSONFile}`)

// Callback Hell (Pyramid of Doom)
getTodos( (error, data)=> {
    console.log(data)
    getTodos( (error, data)=> {
        console.log(data)
        getTodos( (error, data)=> {
           console.log(data)
        }, "./json/data-03.json")
    }, "./json/data-02.json")
}, "./json/data-01.json")

