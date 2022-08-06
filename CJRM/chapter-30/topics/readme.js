const errorTest = fetch('https://jsonplaceholder.typicode.com/usders')
.then( response => response.status === 200 ? response.json() : { status: response.status, description: "Não foi possível obter usuários!" } )
.then( users => console.log(users) )
.catch(console.log)

const successTest = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => {
        console.log("response: ", response)
        return response.json()
    })
    .then( user => console.log(user) )
    .catch( error => console.log(error) )

setTimeout( ()=> {

    console.log(`\n\n:::: ASYNC/AWAIT ::::\n\n`)

}, 60)


const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

const logUsers = async () => {
    const users = await getUsers()
    return console.log(users)
}
console.log( getUsers() )

logUsers()