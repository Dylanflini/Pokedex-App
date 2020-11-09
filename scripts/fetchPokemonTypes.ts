import axios from 'axios'

export type PokemonsTypes = {
  name: string,
  url: string,
}


export default async function fetchPokemonTypes() {

  try {
    const { data } = await axios.get( 'https://pokeapi.co/api/v2/type/' )
    const results: PokemonsTypes[] = data.results;
    return results

  } catch ( error ) {
    console.log( error )
    return null
  }

}
