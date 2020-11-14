import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import ReactDOM from 'react-dom'
import '../styles/globals.css'
import styled from '@emotion/styled'
import React from 'react'
import Results from '../components/results'
import Search, { ALL_TYPE, INITIAL_VALUE } from '../components/search'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import { usePokemons } from '../hooks/usePokemons'
import Spinner from '../components/spinner'

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


  const [render, setRender] = React.useState( false )

  React.useEffect( () => {

    ( async () => {
      setTypes( await fetchPokemonTypes() )
    } )();

    setRender( true )

  }, [] )

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
          setTypeSearches={ setTypeSearches }
          typeSearches={ typeSearches }
          setIsLoading={ setIsLoading }
          results={
            <Results
              pokemons={ pokemonsFilter }
              isResultVisible={ isResultVisible }
              setLimit={ setLimit }
              limit={ limit }
              setIsLoading={ setIsLoading }
            />
          }
        />
        { isLoading ? ReactDOM.createPortal( <Spinner width={ 50 } />, document.body ) : null }

      </Main>
    </>
  )
}

export default MyApp
