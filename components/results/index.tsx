import React from 'react'
import { useRouter } from 'next/router'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Pokemon from '../pokemon'
import { Loading, PokemonContainer } from './styles'

type result = {
  pokemons: PokemonCard[],
  isLoading: boolean,
  isResultVisible: boolean,
}

export default function Results( { pokemons = [], isLoading, isResultVisible = true }: result ) {

  const router = useRouter()

  return (
    <>
      {isLoading ? <Loading src="/loading.gif" /> : null }
      {
        isResultVisible ?
          <PokemonContainer>
            {
              pokemons.map( ( pokemon: any ) => (
                <Pokemon
                  key={ pokemon.id }
                  name={ pokemon.name }
                  id={ pokemon.id }
                  types={ pokemon.types }
                />
              ) )
            }
          </PokemonContainer>
          : null
      }
    </>
  )
}