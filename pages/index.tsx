import Head from 'next/head'
import styled from '@emotion/styled'
import React from 'react'
import { ALL_TYPE, INITIAL_VALUE } from '../components/search'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home( {
  results,
  setIsResultVisible,
  setTypeSearches,
  typeSearches,
} ) {

  React.useEffect( () => {
    setIsResultVisible( true )

    typeSearches !== INITIAL_VALUE ? null : setTypeSearches( ALL_TYPE )

  }, [] )

  return (
    <div>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pokemon_icon.svg" />
        <title>Pokedex App 🐤 </title>
      </Head>

      <Container>
        { results }
      </Container>
    </div>
  )
}
