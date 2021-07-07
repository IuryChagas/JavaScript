const getPokemon = url => new Promise( (resolve, reject) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const success = request.readyState === 4 && request.status === 200
        const error = request.readyState === 4 && request.status === 404

        if (success) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        }

        if (error) {
            reject('Não foi possível completar a requisição')
        }
    })

    request.open('GET', url)
    request.send()

})

getPokemon('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then( bulbasaur => {
        console.log(bulbasaur)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/charizard')
    })
    .then( charizard => {
        console.log(charizard)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/pikachu')
    })
    .then( pikachu => {
        console.log(pikachu)
    })
    .catch( error => console.log(error) )
