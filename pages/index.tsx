import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Search from '../components/search'
import TypeSearch from '../components/typeSearch'
import fetchPokemons from '../scripts/fetchPokemons'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home( { options, initialPokemons } ) {

  return (
    <div>
      <Head>
        <title>Pokedex API 🐤 </title>
      </Head>


      <Container>
        <Search />
        <TypeSearch
          options={ options }
          initialPokemons={ initialPokemons }
        />
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => {

  return {
    options: await fetchPokemonTypes(),
    initialPokemons: await fetchPokemons( 20, 0 )
  }
}