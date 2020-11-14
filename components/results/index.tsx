import React from 'react'
import { useRouter } from 'next/router'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Pokemon from '../pokemon'
import { PokemonContainer } from './styles'
import { useObserver } from '../../hooks/useObserver'

export default function Results( {
  pokemons = [],
  isResultVisible = true,
  setLimit,
  limit,
  setIsLoading,
}: result ) {

  const router = useRouter()

  const callBack = () => setLimit( limit + 20 )

  const [lastPokemon] = useObserver( callBack, [limit], limit <= pokemons.length )

  return (
    <>
      {
        isResultVisible ?
          <PokemonContainer>
            { pokemons.length === 0 && router.pathname === '/' ? <p>No pokemons Found</p> : null }
            {
              pokemons.map( ( pokemon: any, index: number ) => {
                if ( pokemons.length === index + 1 ) {
                  return <Pokemon
                    ref={ lastPokemon }
                    key={ pokemon.id }
                    name={ pokemon.name }
                    id={ pokemon.id }
                    types={ pokemon.types }
                    setIsLoading={ setIsLoading }
                  />
                } else {
                  return <Pokemon
                    key={ pokemon.id }
                    name={ pokemon.name }
                    id={ pokemon.id }
                    types={ pokemon.types }
                    setIsLoading={ setIsLoading }
                  />
                }
              }

              )
            }
          </PokemonContainer>
          : null
      }
    </>
  )
}

type result = {
  pokemons: PokemonCard[],
  isResultVisible: boolean,
  setLimit: ( any ) => void,
  limit: number,
  setIsLoading: ( boolean ) => void,
}