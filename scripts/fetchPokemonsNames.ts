import axios from 'axios'
import {fetchPokemon, Pokemon} from './fetchPokemon'

export default async function fetchPokemonsNames(limit:number = 20 , offset:number = 0, pokemonNames:boolean=false) {

    try {
      const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}` )

      if ( pokemonNames === false){
        
        let pokemons:Pokemon[] = []
      
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