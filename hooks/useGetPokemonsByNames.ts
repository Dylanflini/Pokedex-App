import React from 'react'
import { fetchPokemon } from '../scripts/fetchPokemon'
import fetchPokemonsNames from '../scripts/fetchPokemonsNames'
import { getPokemonsByNames } from '../scripts/getPokemonByNames'

export default function useGetPokemonsByNames(input:string) {
  
  const [pokemons, setPokemons] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )
  const allPokemonsNames = React.useRef( null )

  async function search() {
    if(input.length > 2 ){
      const x = allPokemonsNames.current.filter( (element:string) => element.includes( input.toLowerCase() ) )
      setIsLoading( true )
      setPokemons( await getPokemonsByNames( x ) )
      setIsLoading( false )
    }else{
      setPokemons([])
    }
  }

  React.useEffect( () => {
    async function fetch() {
      allPokemonsNames.current = await fetchPokemonsNames( 900, 0, true )
    }
    fetch()
  }, [] )

  return [pokemons, search, isLoading] as const
} 