import Head from 'next/head'
import Stats from '../../components/stats'
import { fetchPokemon } from '../../scripts/fetchPokemon'
import fetchPokemonDamageRelations from '../../scripts/fetchPokemonDamageRelations'
import PokemonTypes from '../../components/pokemonTypes'
// import DamageRelation from '../../components/damageRelation'
import styled from '@emotion/styled'
import normalizeId from '../../scripts/normalizeId'
import React from 'react'
// import { Container } from '../index'

const Image = styled.img`
    width: 30%;
    min-width: 300px;
    height: auto;
    margin: 0 auto;
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
`

function useDamageRelation( pokemonType, doubleDamageTo, doubleDamageFrom ) {


  function filterSameTypes( relation, pokemonType, index = 0 ) {

    if ( index >= pokemonType.length || pokemonType.length === 1 ) {
      return relation
    } else {
      const found = relation.filter( ( item ) => item.name !== pokemonType[index].type.name )



      return filterSameTypes( found, pokemonType, index + 1 )
    }

  }

  const advantage = filterSameTypes( doubleDamageTo, pokemonType )
  const weakness = filterSameTypes( doubleDamageFrom, pokemonType )

  const newAdvantage = advantage.filter( element => filterRelation( element.name, weakness ) )

  const newWeakness = weakness.filter( element => filterRelation( element.name, advantage ) )

  return [newAdvantage, newWeakness]
}

function filterRelation( estatico, arr ) {
  for ( let { name } of arr ) {
    if ( name !== estatico ) {
      return true
    } else {
      return false
    }
  }
}




const Pokedex = ( { pokemon, doubleDamageTo, doubleDamageFrom, results, setIsResultVisible } ) => {

  React.useEffect( () => {
    setIsResultVisible( false )
  }, [pokemon] )


  const [advantage, weakness] = useDamageRelation( pokemon.types, doubleDamageTo, doubleDamageFrom )

  return (
    <>
      <Head>
        <title>{ pokemon.name.toUpperCase() }</title>
      </Head>
      <Container>

        { results }

        <Title>{ pokemon.name }</Title>

        <Image src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( pokemon.id ) }.png` } alt={ `Is the pokemon called ${ pokemon.name }` } />

        {/* <Stats stats={ pokemon.stats } /> */ }
        {/* se podria implementar las estadisticas con chart.js */ }

        <h2>Type</h2>

        <PokemonTypes fontSize='16px' types={ pokemon.types } />

        <h2>Advantage</h2>

        <PokemonTypes fontSize='16px' types={ advantage } isDamageRelation={ true } />

        <h2>Weakness</h2>

        <PokemonTypes fontSize='16px' types={ weakness } isDamageRelation={ true } />


        {/* <DamageRelation title='Advantage' fontSize='16px' pokemonType={ pokemon.types } weakness={ doubleDamageTo } /> */ }

        {/* <DamageRelation title='Weakness' fontSize='16px' pokemonType={ pokemon.types } weakness={ doubleDamageFrom } /> */ }

        {/* component to next and previu pokemon */ }

      </Container>


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