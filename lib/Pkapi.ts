const Pokemonapi = 'https://pokeapi.co/api/v2/'
export async function getPokemonlist()
{
    const response = await fetch( Pokemonapi + 'pokemon?limit=152&offset=0')
    const data = await response.json()
    return data.results
}
export async function getPokemon(name:string){
    const response = await fetch(Pokemonapi +"pokemon/" + name)
    const data = await response.json()
    return data;
}