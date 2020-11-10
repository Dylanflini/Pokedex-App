/* this components it's for have all pokemon's name and types. Also filter by typeSearch and search component  */

import React from 'react'
import { ALL_TYPE } from '../components/search';
import { PokemonsTypes } from '../scripts/fetchPokemonTypes';
import { fetchByTypes, mergeTypes } from '../scripts/utils';

export function usePokemons(
  types: PokemonsTypes[],
  type: string = '',
  name: string = '',
  setPokemonSearches,
  limit = 20,
  offset = 0,
  sort = [] ) {

  const [pokemons, setPokemons] = React.useState( [] )
  const [pokemonsFilter, setPokemonsFilter] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )
  const count = React.useRef( 0 )

  React.useEffect( () => {
    async function fetch() {

      if ( types.length > 0 && count.current === 0 ) {
        count.current = 1;
        setIsLoading( true )
        setPokemons( mergeTypes( await fetchByTypes( types, [] ) ).sort( lessToGreater ) )
        setIsLoading( false )
      }

    }

    fetch()

  }, [types] )

  React.useEffect( () => {

    setIsLoading( true )
    setPokemonsFilter( allFilter( pokemonsFilter, pokemons, name, type, offset, limit ) )
    setIsLoading( false )

  }, [name, type, limit] )

  // React.useEffect( () => {

  //   setPokemonsFilter( pokemons.slice( offset, limit ) )

  // }, [pokemons, limit] )

  return [pokemonsFilter, isLoading] as const
}

function allFilter( pokemonsFilter, pokemons, name, type, offset, limit ) {

  let x;

  if ( name !== '' && name.length > 2 ) {
    x = pokemons.filter( ( element ) => element.name.includes( name.toLowerCase() ) )

    if ( type !== ALL_TYPE ) {

      const v = x.filter( element => filterTypes( element.types, type ) )
      return v
    }

    return x

  }

  if ( name === '' ) {
    x = pokemons

    if ( type !== ALL_TYPE ) {

      const v = x.filter( element => filterTypes( element.types, type ) )
      return v
    }
    
    return x.slice( offset, limit )

  }

  return pokemonsFilter

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
