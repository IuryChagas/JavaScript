const getUsers = async ()=> {
    try {
        const response = await fetch('../json/to!%20dos.json')

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        return response.json()

    } catch (error) {
        console.error(error)
    }
}

const logUsers = async ()=> {
    const users = await getUsers()
    console.info(users)
}

logUsers()