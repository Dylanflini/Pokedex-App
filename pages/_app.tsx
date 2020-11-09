import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'
import styled from '@emotion/styled'
import React from 'react'
import Results from '../components/results'
import Search from '../components/search'
import TypeSearch, { INITIAL_VALUE } from '../components/typeSearch'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import { usePokemons } from '../hooks/usePokemons'

const Main = styled.main`
  padding-top: 100px;
`

function MyApp( { Component, pageProps } ) {

  const [pokemonSearches, setPokemonSearches] = React.useState( '' )
  const [typeSearches, setTypeSearches] = React.useState( INITIAL_VALUE )
  const [types, setTypes] = React.useState( [] )
  const [pokemonsFilter, isLoading, setPokemonsFilterToZero] = usePokemons( types, typeSearches, pokemonSearches )

  React.useEffect( () => {
    async function fetch() {
      setTypes( await fetchPokemonTypes() )
    }

    fetch()

  }, [] )

  return (
    <>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
      </Head>
      <NavBar pokemonsFound={ pokemonsFilter.length } buscador={ <Search setPokemonSearches={ setPokemonSearches } /> } typeSearch={ <TypeSearch options={ types } type={ typeSearches } setTypeSearches={ setTypeSearches } /> } />
      <Main>
        <Component { ...pageProps } setPokemonsFilterToZero={ setPokemonsFilterToZero } results={ <Results pokemonsBySearch={ pokemonsFilter } isLoading={ isLoading } /> } />
      </Main>
      <Footer text='© Pokedex App ' version=' - v1.0' />
    </>
  )
}

// MyApp.getInitialProps = async () => {

//   return {
//     types: await fetchPokemonTypes(),
//   }
// }

export default MyApp
