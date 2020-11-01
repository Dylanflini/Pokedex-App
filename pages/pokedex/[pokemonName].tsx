import Head from 'next/head'
import Card from '../../components/card'
import Stats from '../../components/stats'
import DamageRelation from '../../components/damageRelation'
import { fetchPokemon } from '../../scripts/fetchPokemon'
import fetchPokemonDamageRelations from '../../scripts/fetchPokemonDamageRelations'

const Pokedex = ( { pokemon, damageRelations } ) => {

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

      <Stats stats={ pokemon.stats } />

      {/* se podria implementar las estadisticas con chart.js */ }

      {
        damageRelations.map( ( relation, index ) => {
          return (
            <DamageRelation key={ index } relation={ relation } />
          )
        } )
      }

      {/* component to next and previu pokemon */ }
    </>
  )
}


Pokedex.getInitialProps = async ( ctx: any ) => {

  const pokemon = await fetchPokemon( ctx.query.pokemonName )
  const damageRelations = await fetchPokemonDamageRelations( pokemon.types )

  return {
    pokemon,
    damageRelations,
  }
}

export default Pokedex