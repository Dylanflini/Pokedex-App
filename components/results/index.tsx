import React from 'react'
// import { useRouter } from 'next/router'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Pokemon from '../pokemon'
import { Loading, PokemonContainer } from './styles'
import { useObserver } from '../../hooks/useObserver'

type result = {
  pokemons: PokemonCard[],
  isLoading: boolean,
  isResultVisible: boolean,
  setLimit: ( any ) => void,
  limit: number,
}

export default function Results( { pokemons = [], isLoading, isResultVisible = true, setLimit, limit }: result ) {

  // const router = useRouter()

  const callBack = () => setLimit( limit + 20 )

  console.log('render results')

  const [lastPokemon] = useObserver( callBack, isLoading, limit <= pokemons.length, [limit] )

  return (
    <>
      {isLoading ? <Loading src="/loading.gif" /> : null }
      {
        isResultVisible ?
          <PokemonContainer>
            {
              pokemons.map( ( pokemon: any, index: number ) => {
                if ( pokemons.length === index + 1 ) {
                  return <Pokemon
                    ref={ lastPokemon }
                    key={ pokemon.id }
                    name={ pokemon.name }
                    id={ pokemon.id }
                    types={ pokemon.types }
                  />
                } else {
                  return <Pokemon
                    key={ pokemon.id }
                    name={ pokemon.name }
                    id={ pokemon.id }
                    types={ pokemon.types }
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