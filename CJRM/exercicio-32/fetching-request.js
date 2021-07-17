const getUsers = async ()=> await
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json() )

const logUsers = async ()=> {
    const users = await getUsers()
    console.info(users)
}

logUsers()