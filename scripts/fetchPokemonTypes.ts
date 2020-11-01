import axios from 'axios'

export default async function fetchPokemonTypes(){

  try {
    const { data } = await axios.get( 'https://pokeapi.co/api/v2/type/' )
  
    return data.results
    
  } catch (error) {
    console.log(error)
    return null
  }

}
