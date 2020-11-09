import axios from 'axios'

export type PokemonTypes = {
  type: { name: string, url?: string },
}

export default interface PokemonName {
  name: string,
}

export interface PokemonCard extends PokemonName {
  id: number,
  types: PokemonTypes[],
}

export interface Pokemon extends PokemonCard {
  wasFound: boolean,
  stats: [],
  weight: number,
  height: number,
}

async function fetchPokemon( pokemonName: string ) {

  try {

    console.log('pokemonName',  pokemonName )

    const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ pokemonName }` )

    const pokemon: Pokemon = {
      name: data.name,
      id: data.id,
      types: data.types,
      wasFound: true,
      stats: data.stats,
      weight: data.weight,
      height: data.height,
    }

    if ( pokemon.name === undefined || pokemon.id >= 10000 ) {
      return null
    }

    console.log( 'pokemon', pokemon )

    return pokemon

  } catch ( error ) {
    console.log( error )
    return null
  }

}

export { fetchPokemon }