import Head from 'next/head'
import TypeSearch from '../components/typeSearch'
import fetchPokemons from '../scripts/fetchPokemons'
import fetchPokemonTypes from '../scripts/fetchPokemonTypes'
import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Home( { options, initialPokemons, results } ) {
// export default function Home( { results } ) {


  // const [options, setOptions] = React.useState( [] )
  // const [initialPokemons, setInitialPokemons] = React.useState( [] )

  // React.useEffect( () => {
  //   async function fetch() {
  //     setOptions( await fetchPokemonTypes() )
  //     setInitialPokemons( await fetchPokemons( 20, 0 ) )
  //   }
  //   fetch()
  // }, [] )

  return (
    <div>
      <Head>
        <title>Pokedex API 🐤 </title>
      </Head>

      <Container>
        { results }
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