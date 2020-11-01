import Head from 'next/head'
import Card from '../../components/card'
import { fetchPokemon } from '../../scripts/fetchPokemon'

const Pokedex = ( { pokemon } ) => {

  return (
    <>
      <Head>
        <title>{ pokemon.name.toUpperCase() }</title>
      </Head>

      { pokemon.wasFound === true ?
        <Card
          id={ pokemon.id }
          name={ pokemon.name }
          types={ pokemon.types }
        /> :
        null }
    </>
  )
}


Pokedex.getInitialProps = async ( ctx: any ) => {

  return { pokemon: await fetchPokemon( ctx.query.pokemonName ) }
}

export default Pokedex