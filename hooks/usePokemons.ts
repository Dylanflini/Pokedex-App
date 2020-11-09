/* this components it's for have all pokemon's name and types. Also filter by typeSearch and search component  */

import React from 'react'
import { PokemonsTypes } from '../scripts/fetchPokemonTypes';
import { fetchByTypes, mergeTypes } from '../scripts/utils';

export function usePokemons(
  types: PokemonsTypes[],
  type: string = '',
  name: string = '',
  setPokemonSearches,
  offset = 0,
  limit = 20,
  sort = [] ) {

  const [pokemons, setPokemons] = React.useState( [] )
  const [pokemonsFilter, setPokemonsFilter] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )

  React.useEffect( () => {
    async function fetch() {
      // const x = await fetchByTypes( types, [] )
      // const y = mergeTypes( x )
      // setPokemons( y.sort( lessToGreater ) )

      if ( types.length > 0) {
        setIsLoading( true )
        setPokemons( mergeTypes( await fetchByTypes( types, [] ) ).sort( lessToGreater ) )
        setIsLoading( false )
      }

    }

    fetch()

  }, [types] )

  React.useEffect( () => {

    if ( name !== '' ) {
      const x = pokemons.filter( ( element ) => element.name.includes( name.toLowerCase() ) )
      setIsLoading( true )
      setPokemonsFilter( x )
      // setPokemonsFilter( x.slice( offset, limit ) )
      setIsLoading( false )
    }
    setPokemonSearches( '' )

  }, [name] )

  React.useEffect( () => {

    if ( pokemons.length > 0 ) {

      const v = pokemons.filter( element => filterTypes( element.types, type ) )

      setPokemonsFilter( v )

    }

  }, [type] )

  React.useEffect( () => {

    setPokemonsFilter( pokemons.slice( offset, limit ) )

  }, [pokemons, limit] )

  return [pokemonsFilter, isLoading] as const
}


function filterTypes( types, type ) {

  for ( let x of types ) {
    if ( x.type.name === type ) {
      return true
    }
  }

  return false
}


const lessToGreater = ( prev, next ) => {
  if ( prev.id > next.id ) {
    return 1
  }
  if ( prev.id < next.id ) {
    return -1
  }
  return 0
}
