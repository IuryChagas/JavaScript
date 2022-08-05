
// const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`
// const bulbasaur = getPokemonURL(1)
// const charmander = getPokemonURL(4)
// const squirtle = getPokemonURL(7)
// console.log("Não foi possível obter o Pokémon")
// console.log(`Pokémon obtido: ${name.toUpperCase()}`)


const getPokemon = url => new Promise( (resolve, reject ) => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const success = request.readyState === 4 && request.status === 200
        const unsuccess = request.readyState === 4

        if (success) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
        if (unsuccess) {
            reject(`Não foi possível obter o Pokémon`)
        }
    })

    request.open('GET', url)
    request.send()
})
const bulbasaur = 1
const charizard = 6
const charmander = 4
const pidgeotto = 17
const golbart = 42

const url = name  => `https://pokeapi.co/api/v2/pokemon/${name}`

getPokemon(url(bulbasaur))
    .then(pokemon => {
        console.log(pokemon)
        return getPokemon(url(golbart))
    })
    .then(pokemon => {
        console.log(pokemon)
        return getPokemon(url(charmander))
    })
    .then(pokemon => {
        console.log(pokemon)
        return getPokemon(url(pidgeotto))
    })
    .then(pokemon => {
        console.log(pokemon)
        return getPokemon(url(charizard))
    })
    .then(pokemon => {
        console.log(pokemon)
        return getPokemon(url(bulbasaur))
    })
    .then( console.log )
    .catch( error =>  console.log(error) )