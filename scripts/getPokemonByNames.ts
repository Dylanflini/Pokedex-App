import { fetchPokemon } from "./fetchPokemon"

export async function getPokemonsByNames( names: string[] ) {
    let pokemones = []

    if(names.length !== 0){

      for ( let name of names ) {
        const pokemon = await fetchPokemon( name )
        if ( pokemon !== null ) {
          pokemones = pokemones.concat( pokemon )
        }
      }
      
    }
    return pokemones
  }