import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'
import styled from '@emotion/styled'
import React from 'react'
import useGetPokemonsByNames from '../hooks/useGetPokemonsByNames'
import Results from '../components/results'
import Search from '../components/search'

const Main = styled.main`
  padding-top: 70px;
`

function MyApp( { Component, pageProps } ) {

  const [input, setInput] = React.useState( '' )
  const [pokemons, x, isLoading] = useGetPokemonsByNames( input )

  return (
    <>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
      </Head>
      <NavBar buscador={ <Search input={ input } setInput={ setInput } search={ x } /> } />
      <Main>
        <Component { ...pageProps } results={ <Results pokemons={ pokemons } isLoading={ isLoading } /> } />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
