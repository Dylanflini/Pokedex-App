import React from 'react'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Pokemon from '../pokemon'
import { Loading, PokemonContainer } from './styles'


function useFilterPokemons( pokemonsBySearch: PokemonCard[] = [], pokemonsByTypeSearch: PokemonCard[] = [] ) {

  const [pokemons, setPokemons] = React.useState( [] )

  React.useEffect( () => {

    function x() {

      if ( pokemonsBySearch.length === 0 && pokemonsByTypeSearch.length === 0 ) {
        return []
      }

      if ( pokemonsBySearch.length === 0 ) {
        return pokemonsByTypeSearch
      }

      if ( pokemonsByTypeSearch.length === 0 ) {
        return pokemonsBySearch
      }

      return pokemonsBySearch.filter( ( pokemon, index ) => pokemon.name === pokemonsByTypeSearch[index].name )
    }

    setPokemons( x() )

  }, [pokemonsBySearch] )


  return [pokemons]
}

type result = {
  pokemonsBySearch: PokemonCard[],
  pokemonsByTypeSearch?: PokemonCard[],
  isLoading: boolean,
}

export default function Results( { pokemonsBySearch = [], pokemonsByTypeSearch = [], isLoading }: result ) {

  // const [pokemons] = useFilterPokemons( pokemonsBySearch, pokemonsByTypeSearch )

  return (
    <>
      {isLoading ? <Loading src="/loading.gif" /> : null }
      <PokemonContainer>
        {
          pokemonsBySearch.map( ( pokemon: any ) => (
            <Pokemon
              key={ pokemon.id }
              name={ pokemon.name }
              id={ pokemon.id }
              types={ pokemon.types }
            />
          ) )
        }
      </PokemonContainer>
    </>
  )
}