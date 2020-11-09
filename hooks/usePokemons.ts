/* this components it's for have all pokemon's name and types. Also filter by typeSearch and search component  */

import axios from 'axios';
import React from 'react'
import { PokemonCard } from '../scripts/fetchPokemon'
import { PokemonsTypes } from '../scripts/fetchPokemonTypes';

export function usePokemons( types: PokemonsTypes[], type: string = '', name: string = '', offset = 0, limit = 20, sort = [] ) {

  const [pokemons, setPokemons] = React.useState( [] )
  const [pokemonsFilter, setPokemonsFilter] = React.useState( [] )
  const [isLoading, setIsLoading] = React.useState( false )

  React.useEffect( () => {
    async function fetch() {
      // const x = await fetchByTypes( types, [] )
      // const y = mergeTypes( x )
      // setPokemons( y.sort( lessToGreater ) )

      if ( types.length !== 0 ) {
        setIsLoading( true )
        setPokemons( mergeTypes( await fetchByTypes( types, [] ) ).sort( lessToGreater ) )
        setIsLoading( false )
      }

    }

    fetch()

  }, [types] )

  React.useEffect( () => {

    const x = pokemons.filter( ( element ) => element.name.includes( name.toLowerCase() ) )
    setIsLoading( true )
    setPokemonsFilter( x )
    // setPokemonsFilter( x.slice( offset, limit ) )
    setIsLoading( false )

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

  function setPokemonsFilterToZero() {
    setPokemonsFilter( [] )
  }

  return [pokemonsFilter, isLoading, setPokemonsFilterToZero] as const
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

function mergeTypes( allPokemons, index: number = 1 ) {

  if ( index >= 894 ) {
    return allPokemons.filter( element => element.id < 999 )
  } else {

    const isPokemonFilter = allPokemons.filter( ( element ) => element.id === index )

    if ( isPokemonFilter.length === 1 ) {
      return mergeTypes( allPokemons, index + 1 )
    } else {

      isPokemonFilter[0].types = [...isPokemonFilter[0].types, ...isPokemonFilter[1].types]

      const allPokemonsFilter = allPokemons.filter( ( element ) => element.id !== index )

      return mergeTypes( [...allPokemonsFilter, isPokemonFilter[0]], index + 1 )
    }

  }

}

async function fetchByTypes( types: PokemonsTypes[], pokemonsByTypes: PokemonCard[] = [], index: number = 0 ) {

  if ( index >= types.length ) {
    return pokemonsByTypes
  } else {

    const { data } = await axios.get( types[index].url )

    // newPokemon.name != allNames

    const newPokemonsByTypes = getPokemon( data.name, data.pokemon, [] )

    return fetchByTypes( types, [...newPokemonsByTypes, ...pokemonsByTypes], index + 1 )
    // return fetchByTypes( types, [...newPokemonsByTypes], index + 1 )
  }


}

function getPokemon( type: string, pokemons: any[], newPokemons: PokemonCard[] = [], index: number = 0 ) {
  if ( index >= pokemons.length ) {
    return newPokemons
  } else {

    const newType = { name: type }

    const pokemon: PokemonCard = {
      name: pokemons[index].pokemon.name,
      id: getId( pokemons[index].pokemon.url ),
      types: [{ type: newType }],
    }
    return getPokemon( type, pokemons, [...newPokemons, pokemon], index + 1 )
  }
}

function getId( url: string ): number {
  const substr1 = 'https://pokeapi.co/api/v2/pokemon/'
  const substr2 = '/'

  const newURL = replaceURL( url, [substr1, substr2] )

  const id = parseInt( newURL )
  return id
}

function replaceURL( URL: string, substr: string[], index: number = 0 ): string {

  if ( index >= substr.length ) {
    return URL
  }
  const newURL = URL.replace( substr[index], '' )
  return replaceURL( newURL, substr, index + 1 )
}
