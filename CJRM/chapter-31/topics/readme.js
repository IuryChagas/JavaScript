const getPokemon = async () => {
    const  nidorina = fetch("https://pokeapi.co/api/v2/pokemon/30")
    const  golbat = fetch("https://pokeapi.co/api/v2/pokemon/42")
    const  togedemaru = fetch("https://pokeapi.co/api/v2/pokemon/777")

    const result = await Promise.all([nidorina, golbat, togedemaru])

    result.forEach( async response => console.log( await response.json() ))
}

getPokemon()

// const getUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users').then( data => data.json() )
//     return console.log(response)
// }

// const getUsers = async () => await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

// const logUsers = async () => {
//     const users = await getUsers() 
//     return console.log(users)
// }

const getUsers = async () => {
    try{
        return await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    }catch(error) {
        console.log(error.message)
    }
}

const logUsers = async () => {
    const users = await getUsers() 
    return console.log(users)
}

logUsers()

const getAllUsers = async () => {
    try {
        // return await (await fetch('./datad.json')).json()
        const response = await fetch('./datad.json')

        if (!response.ok) {
            throw new Error(" Não foi possível obter os dados")
        }

        return response.json()
    } catch (error){
        console.log(error)
    }
}

const logUserList = async () => {
    const data = await getAllUsers()
    return console.log(data)
}

logUserList()