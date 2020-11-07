import Head from 'next/head'
import TypeSearch from '../components/typeSearch'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home({ options, results }) {
  return (
    <div>
      <Head>
        <title>Pokedex Interface 🐤 </title>
      </Head>

      <Container>
        {results}
        {/* <TypeSearch
          options={ options }
        /> */}
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => {

  return {
    options: await fetchPokemonTypes(),
  }
}