const getPokemons = async () => {
    const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/4')
    const squirtle = await  fetch('https://pokeapi.co/api/v2/pokemon/7')

    console.log(await bulbasaur.json())
    console.log(await charmander.json())
    console.log(await squirtle.json())

}

getPokemons()