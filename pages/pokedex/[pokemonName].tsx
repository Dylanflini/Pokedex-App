import Head from 'next/head'
import Stats from '../../components/stats'
import { fetchPokemon } from '../../scripts/fetchPokemon'
import fetchPokemonDamageRelations from '../../scripts/fetchPokemonDamageRelations'
import PokemonTypes from '../../components/pokemonTypes'
import DamageRelation from '../../components/damageRelation'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import normalizeId from '../../scripts/normalizeId'
import React from 'react'

const Pokedex = ( { pokemon, doubleDamageTo, doubleDamageFrom, results, setPokemonsFilterToZero } ) => {

  React.useEffect( () => {
    setPokemonsFilterToZero()
  }, [] )

  const Image = styled.img`
  width: 25%;
  height: auto;
`

  return (
    <>
      <Head>
        <title>{ pokemon.name.toUpperCase() }</title>
      </Head>

      {results }

      <h1>{ pokemon.name }</h1>

      <Image src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( pokemon.id ) }.png` } alt={ `Is the pokemon called ${ pokemon.name }` } />

      <Stats stats={ pokemon.stats } />
      {/* se podria implementar las estadisticas con chart.js */ }

      <h2>Type</h2>

      <PokemonTypes types={ pokemon.types } />

      <DamageRelation title='Advantage' pokemonType={ pokemon.types } weakness={ doubleDamageTo } />

      <DamageRelation title='Weakness' pokemonType={ pokemon.types } weakness={ doubleDamageFrom } />

      {/* component to next and previu pokemon */ }

    </>
  )
}


Pokedex.getInitialProps = async ( ctx: any ) => {

  const pokemon = await fetchPokemon( ctx.query.pokemonName )
  const [doubleDamageTo, doubleDamageFrom] = await fetchPokemonDamageRelations( pokemon.types )

  return {
    pokemon,
    doubleDamageTo,
    doubleDamageFrom,
  }
}

export default Pokedex