const getUsers = async ()=> {
    try {
        return await ( await fetch('../json/todos.json') ).json()
    } catch (error) {
        console.error(error.message)
    }
}

const logUsers = async ()=> {
    const users = await getUsers()
    console.info(users)
}

logUsers()