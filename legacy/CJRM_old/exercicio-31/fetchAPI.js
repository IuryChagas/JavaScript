setTimeout( ()=> {
    console.info("########### Fetch API - Promises()  ###########")
}, 10)

fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => {
        console.log(response)
        return response.json()
    })
    .then( users => {
        console.table(users)
    })
    .catch( error => console.log(error))


setTimeout( ()=> {
    console.info("########### Async/Await  - Promises() ###########")
}, 100)


const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

const logUsers = async () => {
    const users = await getUsers()
    console.table(users)
}

logUsers()