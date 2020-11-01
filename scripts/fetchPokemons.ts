import axios from 'axios'
import {fetchPokemon} from './fetchPokemon'

export default async function fetchPokemons(limit:number = 20 , offset:number = 0, pokemonNames:boolean=false) {

  interface pokemon {
    name: string,
    id: number
    types: []
  }

    try {
      const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}` )

      if ( pokemonNames === false){
        
        let pokemons:pokemon[] = []
      
        for (let {name} of data.results){
          const pokemon = await fetchPokemon( name )

          if(pokemon.wasFound === true){
            pokemons = pokemons.concat(pokemon)
          }
          
        }
    
        return pokemons

      }else{

        let pokemonsNames = []

        for (let {name} of data.results){

          pokemonsNames = pokemonsNames.concat(name)
        }

        return pokemonsNames

      }

  } catch (error) {
    console.log(error)
    
    return null
  }

  
}