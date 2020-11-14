/* this components it's for have all pokemon's name and types. Also filter by typeSearch and search component  */

import React from 'react'
import { PokemonsTypes } from '../scripts/fetchPokemonTypes';
import { applyAllFilter, fetchByTypes, mergeTypes, sortLessToGreater } from '../scripts/utils';

export function usePokemons(
  types: PokemonsTypes[] = [],
  type: string = '',
  name: string = '',
  setTypeSearches,
  limit = 20,
  offset = 0,
  sort = [] ) {

  const [pokemons, setPokemons] = React.useState( [] )
  const [pokemonsFilter, setPokemonsFilter] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )
  const count = React.useRef( 0 )

  const getAllPokemonsFilter = () => applyAllFilter( pokemonsFilter, pokemons, name, type, offset, limit )

  React.useEffect( () => {
    async function fetch() {

      if ( types.length > 0 && count.current === 0 ) {
        count.current = 1;
        setIsLoading( true )
        setPokemons( mergeTypes( await fetchByTypes( types, [] ) ).sort( sortLessToGreater ) )
        setIsLoading( false )
      }

    }

    fetch()

  }, [types] )

  React.useEffect( () => {

    setPokemonsFilter( getAllPokemonsFilter )

  }, [pokemons] )

  React.useEffect( () => {

    setPokemonsFilter( getAllPokemonsFilter )

  }, [name, type, limit] )

  return [pokemonsFilter, isLoading, setIsLoading] as const
}
