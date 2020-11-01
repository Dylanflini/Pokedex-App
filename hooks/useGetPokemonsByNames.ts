import React from 'react'
import { fetchPokemon } from '../scripts/fetchPokemon'
import fetchPokemons from '../scripts/fetchPokemons'

export default function useGetPokemonsByNames(input:string) {
  
  const [pokemons, setPokemons] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )
  const allPokemonsNames = React.useRef( null )

  async function search(){
    const x = allPokemonsNames.current.filter( (element:string) => element.includes( input.toLowerCase() ) )
    setIsLoading( true )
    setPokemons( await getPokemonsByNames( x ) )
    setIsLoading( false )
  }

  async function getPokemonsByNames( names: string[] ) {
    let pokemones = []

    for ( let name of names ) {
      const pokemon = await fetchPokemon( name )
      if ( pokemon !== null ) {
        pokemones = pokemones.concat( pokemon )
      }
    }

    return pokemones
  }

  React.useEffect( () => {
    async function fetch() {
      allPokemonsNames.current = await fetchPokemons( 900, 0, true )
    }
    fetch()
  }, [] )

  return [pokemons, search, isLoading] as const
} 