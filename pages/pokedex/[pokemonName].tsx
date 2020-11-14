import Head from 'next/head'
import { fetchPokemon } from '../../scripts/fetchPokemon'
import fetchPokemonDamageRelations from '../../scripts/fetchPokemonDamageRelations'
import React from 'react'
import { toFirstUpperCase } from '../../scripts/toFirstUpperCase'
import { INITIAL_VALUE } from '../../components/search'
import { getDamageRelation } from '../../scripts/utils'
// @ts-ignore
import { container, title } from '../../components/pokedex/styles.module.scss'
import { Pokedex } from '../../components/pokedex'

const PokedexName = ( {
  pokemon,
  advantage,
  weakness,
  previousPokemon,
  nextPokemon,
  results,
  setIsResultVisible,
  setTypeSearches,
  setIsLoading,
} ) => {

  React.useEffect( () => {
    setIsResultVisible( false )
    setIsLoading( false )
    setTypeSearches( INITIAL_VALUE )
  }, [pokemon] )

  React.useEffect( () => setIsResultVisible( false ), [] )

  return (

    <div className={ container }>

      <Head>
        <title>{ toFirstUpperCase( pokemon.name ) }</title>
        <link rel="icon" href={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png` } />
        <link rel="icon" type="image/png" sizes="16x16" href={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png` } />

      </Head>

      { results }

      <h1 className={ title }>{ pokemon.name.toUpperCase() }</h1>

      <Pokedex
        pokemon={ pokemon }
        advantage={ advantage }
        weakness={ weakness }
        previousPokemon={ previousPokemon }
        nextPokemon={ nextPokemon }
      />

    </div>

  )
}


PokedexName.getInitialProps = async ( ctx: any ) => {

  const firstIdPokemon = 1
  const lastIdPokemon = 893

  const id = parseInt( ctx.query.id );
  const previousId = id === firstIdPokemon ? lastIdPokemon : id - 1;
  const nextId = id === lastIdPokemon ? firstIdPokemon : id + 1;

  const pokemonName = ctx.query.pokemonName.toLowerCase()

  if ( ctx.query.id && ctx.query.types ) {

    const types = JSON.parse( ctx.query.types );

    const [pokemon, previousPokemon, nextPokemon, [doubleDamageTo, doubleDamageFrom]] = await Promise.all( [
      fetchPokemon( pokemonName ),
      fetchPokemon( previousId === 188 ? 'skiploom' : previousId ),
      fetchPokemon( nextId === 188 ? 'skiploom' : nextId ),
      fetchPokemonDamageRelations( types )
    ] );

    const [advantage, weakness] = getDamageRelation( pokemon.types, doubleDamageTo, doubleDamageFrom )

    return {
      pokemon,
      advantage,
      weakness,
      previousPokemon,
      nextPokemon,
    }

  } else {
    const pokemon = await fetchPokemon( pokemonName );

    const [previousPokemon, nextPokemon] = await Promise.all( [
      fetchPokemon( previousId === 188 ? 'skiploom' : previousId ),
      fetchPokemon( nextId === 188 ? 'skiploom' : nextId ),
    ] );

    const [doubleDamageTo, doubleDamageFrom] = await fetchPokemonDamageRelations( pokemon.types )

    const [advantage, weakness] = getDamageRelation( pokemon.types, doubleDamageTo, doubleDamageFrom )

    return {
      pokemon,
      advantage,
      weakness,
      previousPokemon,
      nextPokemon,
    }
  }

}

export default PokedexName