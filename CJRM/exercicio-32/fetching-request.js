const getUsers = async ()=> await
    ( await fetch('https://jsonplaceholder.typicode.com/users') ).json()

const logUsers = async ()=> {
    const users = await getUsers()
    console.info(users)
}

logUsers()