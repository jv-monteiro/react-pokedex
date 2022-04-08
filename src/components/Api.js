export const searchPokemon = async (pokemon) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
export const getPokemon = async (limit=50,offset=0) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
export const getPokemonData = async (url) =>{
    try{
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
export const seachEvolutionChain = async (pokemonId) =>{
    try{
        let url = `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
export const getEvoData = async (url) =>{
    try{
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}