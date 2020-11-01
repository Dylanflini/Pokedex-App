import axios from 'axios'

interface pokemon {
  name: string,
  id: number,
  types: [],
  wasFound: boolean,
  stats: [],
  weight: number,
  height: number,
}

const DEFAULT_POKEMON:pokemon = {
  name: '',
  id: 0,
  types: [],
  wasFound: false,
  stats: [],
  weight: 0,
  height: 0,
}

async function fetchPokemon(pokemonName:string){
  
  try {

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    const pokemon:pokemon = {
      name: data.name,
      id: data.id,
      types: data.types,
      wasFound: true,
      stats: data.stats,
      weight: data.weight,
      height: data.height,
    }

    if (pokemon.name === undefined){
      return DEFAULT_POKEMON
    }
    return pokemon

  } catch{

    const pokemon:pokemon = DEFAULT_POKEMON
    return pokemon
  }

}

export {fetchPokemon, DEFAULT_POKEMON}