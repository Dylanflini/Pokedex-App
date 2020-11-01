import React from 'react'
import axios from 'axios'
import { fetchPokemon } from '../scripts/fetchPokemon'
import fetchPokemons from '../scripts/fetchPokemons'

// type pokemon = {
//   name: string,
//   id: number,
//   types: []
// }

export default function useGetPokemons( initialPokemons, INITIAL_VALUE: string, value: string, isShowMore: boolean ) {

  const [pokemons, setPokemons] = React.useState( initialPokemons )
  const [limit, setLimit] = React.useState( -1 )
  const [isLoading, setIsLoading] = React.useState( false )

  React.useEffect( () => {
    async function fetch() {
      setIsLoading( true )
      if ( value === INITIAL_VALUE ) {
        if ( limit === -1 ) {
          setLimit( 20 )
        } else {
          const offset = pokemons.length
          const newPokemons = await fetchPokemons( limit, offset )
          setPokemons( pokemons.concat( newPokemons ) )
        }
      } else {
        const newPokemons = await getPokemonByType( value )
        setPokemons( pokemons.concat( newPokemons ) )
      }
      setIsLoading( false )
    }
    fetch()

  }, [value, isShowMore] )

  async function getPokemonByType( value: string ) {

    let pokemones = []
    try {
      const result = await axios.get( `https://pokeapi.co/api/v2/type/${ value }` )
      let count: number = 0

      for ( let index = pokemons.length; index < result.data.pokemon.length; index++ ) {
        count++
        const pokemon = await fetchPokemon( result.data.pokemon[index].pokemon.name )

        if ( pokemon !== null ) {
          pokemones.push( pokemon )
        }

        if ( count >= limit ) {
          break
        }

      }
      return pokemones
    } catch {
      return pokemones
    }

  }

  function handleReset() {
    setPokemons( [] )
  }

  return [pokemons, handleReset, isLoading] as const
} 