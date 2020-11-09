import Head from 'next/head'
import styled from '@emotion/styled'
import React from 'react'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home( { results, setIsResultVisible } ) {

  React.useEffect( () => {
    setIsResultVisible( true )
  }, [] )

  return (
    <div>
      <Head>
        <title>Pokedex App 🐤 </title>
      </Head>

      <Container>
        { results }
      </Container>
    </div>
  )
}

// Home.getInitialProps = async () => {

//   return {
//     options: await fetchPokemonTypes(),
//   }
// }