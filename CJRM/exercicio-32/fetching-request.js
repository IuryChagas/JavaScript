const getUsers = async ()=> {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json() )
    return users
}

const logUsers = async ()=> {
    const users = await getUsers()
    console.info(users)
}

logUsers()