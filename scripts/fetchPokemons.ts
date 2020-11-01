import axios from 'axios'
import {fetchPokemon} from './fetchPokemon'

export default async function fetchPokemons(limit:number = 20 , offset:number = 0) {

  interface pokemon {
    name: string,
    id: number
    types: []
  }

    try {
    const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}` )
    
    let pokemons:pokemon[] = []
  
    for (let {name} of data.results){
      const pokemon = await fetchPokemon( name )
      pokemons = pokemons.concat(pokemon)
    }

    return pokemons

  } catch (error) {
    console.log(error)
    
    return null
  }

  
}