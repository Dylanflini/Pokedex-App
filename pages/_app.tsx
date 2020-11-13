import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'
import styled from '@emotion/styled'
import React from 'react'
import Results from '../components/results'
import Search, { ALL_TYPE, INITIAL_VALUE } from '../components/search'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import { usePokemons } from '../hooks/usePokemons'

const Main = styled.main`
  padding-top: 60px;

`

function MyApp( { Component, pageProps } ) {


  const [pokemonSearches, setPokemonSearches] = React.useState( '' )
  const [typeSearches, setTypeSearches] = React.useState( ALL_TYPE )
  const [types, setTypes] = React.useState( [] )
  const [isResultVisible, setIsResultVisible] = React.useState( true )
  const [limit, setLimit] = React.useState( 20 )

  const [pokemonsFilter, isLoading, setIsLoading] = usePokemons( types, typeSearches, pokemonSearches, setTypeSearches, limit )

  React.useEffect( () => {
    async function fetch() {
      setTypes( await fetchPokemonTypes() )
    }

    fetch()

  }, [] )

  React.useEffect( () => {
    setIsResultVisible( true )
  }, [pokemonSearches, typeSearches] )

  return (
    <>
      <NavBar
        pokemonsFound={ pokemonsFilter.length }
        isResultVisible={ isResultVisible }
        buscador={
          <Search
            setPokemonSearches={ setPokemonSearches }
            options={ types }
            type={ typeSearches }
            setTypeSearches={ setTypeSearches }
          />
        }

      />

      <Main>
        <Component
          { ...pageProps }
          setIsResultVisible={ setIsResultVisible }
          setIsLoading={ setIsLoading }
          setTypeSearches={ setTypeSearches }
          typeSearches={ typeSearches }
          results={
            <Results
              pokemons={ pokemonsFilter }
              isResultVisible={ isResultVisible }
              isLoading={ isLoading }
              setLimit={ setLimit }
              limit={ limit }
              setIsLoading={ setIsLoading }
            />
          }
        />
      </Main>
      {/* <Footer text='© Pokedex App ' version=' - v1.0' /> */ }
    </>
  )
}

export default MyApp
