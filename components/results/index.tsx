import React from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
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
  setIsLoading: ( boolean ) => void,
}

export default function Results( {
  pokemons = [],
  isLoading,
  isResultVisible = true,
  setLimit,
  limit,
  setIsLoading,
}: result ) {

  const router = useRouter()

  console.log( 'route', router )

  const callBack = () => setLimit( limit + 20 )

  const [lastPokemon] = useObserver( callBack, isLoading, limit <= pokemons.length, [limit] )

  return (
    <>
      {isLoading ? ReactDOM.createPortal( <Loading src="/loading.gif" />, document.body ) : null }
      { pokemons.length === 0 && router.pathname === '/' ? <p>No pokemons Found</p> : null }
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