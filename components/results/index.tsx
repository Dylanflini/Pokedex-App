import React from 'react'
import Pokemon from '../pokemon'
import { Loading, PokemonContainer } from './styles'

export default function Results( { pokemons, isLoading } ) {
  return (
    <>
      {isLoading ? <Loading src="/loading.gif" /> : null }
      <PokemonContainer>
        {
          pokemons.map( ( pokemon: any, i: number ) => {
            return ( <Pokemon
              key={ i }
              name={ pokemon.name }
              id={ pokemon.id }
              types={ pokemon.types }
            /> )
          } )
        }
      </PokemonContainer>
    </>
  )
}