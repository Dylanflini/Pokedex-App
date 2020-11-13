import { PokemonCard } from "./fetchPokemon"
import { PokemonsTypes } from "./fetchPokemonTypes"
import axios from 'axios'

export function mergeTypes( allPokemons, index: number = 1 , max: number = 894) {

  if ( index >= max ) {
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

export async function fetchByTypes( types: PokemonsTypes[], pokemonsByTypes: PokemonCard[] = [], index: number = 0 ) {

  if ( index >= types.length ) {
    return pokemonsByTypes
  } else {

    const { data } = await axios.get( types[index].url )

    const newPokemonsByTypes = getPokemon( data.name, data.pokemon, [] )

    return fetchByTypes( types, [...newPokemonsByTypes, ...pokemonsByTypes], index + 1 )
  }


}

export function getPokemon( type: string, pokemons: any[], newPokemons: PokemonCard[] = [], index: number = 0 ) {
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

export function getId( url: string ): number {
  const substr1 = 'https://pokeapi.co/api/v2/pokemon/'
  const substr2 = '/'

  const newURL = replaceURL( url, [substr1, substr2] )

  const id = parseInt( newURL )
  return id
}

export function replaceURL( URL: string, substr: string[], index: number = 0 ): string {

  if ( index >= substr.length ) {
    return URL
  }
  const newURL = URL.replace( substr[index], '' )
  return replaceURL( newURL, substr, index + 1 )
}

export function formatData( pokemonStats: any[] ) {

  const axisX = pokemonStats.map( ( element ) =>
    ( element.stat.name.replace( '-', ' ' ) ) )

  const data = pokemonStats.map( ( element ) =>
    ( element.base_stat ) )

  return [data, axisX]
}

export function formatWeight( value: string ) {
  let str = value.toString()
  if ( str.length === 1 ) {
    str = '0'.concat( value.toString() )
  } else {
    str = value.toString()
  }
  return [str.slice( 0, str.length - 1 ), ',', str.slice( str.length - 1 ), ' kg'].join( '' )

}

export function formatHeight( value: string ) {
  let str = value.toString()
  if ( str.length === 1 ) {
    str = '0'.concat( value.toString() )
  } else {
    str = value.toString()
  }
  return [str.slice( 0, str.length - 1 ), ',', str.slice( str.length - 1 ), ' m'].join( '' )
}

export function getDamageRelation( pokemonType, doubleDamageTo, doubleDamageFrom ) {

  function filterSameTypes( relation, pokemonType, index = 0 ) {

    if ( index >= pokemonType.length || pokemonType.length === 1 ) {
      return relation
    } else {
      const found = relation.filter( ( item ) => item.name !== pokemonType[index].type.name )

      return filterSameTypes( found, pokemonType, index + 1 )
    }

  }

  const advantage = filterSameTypes( doubleDamageTo, pokemonType )
  const weakness = filterSameTypes( doubleDamageFrom, pokemonType )

  const newAdvantage = advantage.filter( element => filterRelation( element.name, weakness ) )
  const newWeakness = weakness.filter( element => filterRelation( element.name, advantage ) )

  return [newAdvantage, newWeakness]
}

export function filterRelation( estatico, arr ) {
  for ( let { name } of arr ) {
    if ( name !== estatico ) {
      return true
    } else {
      return false
    }
  }
}