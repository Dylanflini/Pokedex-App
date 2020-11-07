import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import React from 'react'
import useGetPokemonsByNames from '../hooks/useGetPokemonsByNames'
import Results from '../components/results'
import Search from '../components/search'

const Main = styled.main`
  padding-top: 70px;
`

function MyApp( { Component, pageProps } ) {

  const [pokemonSearches, setPokemonSearches] = React.useState( '' )
  const [pokemonsNames, isLoading] = useGetPokemonsByNames( pokemonSearches )

  return (
    <>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
      </Head>
      <NavBar buscador={ <Search setPokemonSearches={ setPokemonSearches } /> } />
      <Main>
        <Component { ...pageProps } results={ <Results pokemonsBySearch={ pokemonsNames } isLoading={ isLoading } /> } />
      </Main>
      <Footer text='© Pokedex App ' />
    </>
  )
}

export default MyApp
