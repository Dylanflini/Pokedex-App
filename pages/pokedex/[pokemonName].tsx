import Head from 'next/head'
import { fetchPokemon } from '../../scripts/fetchPokemon'
import fetchPokemonDamageRelations from '../../scripts/fetchPokemonDamageRelations'
import PokemonTypes from '../../components/pokemonTypes'
import styled from '@emotion/styled'
import normalizeId from '../../scripts/normalizeId'
import React from 'react'
import ReactDOM from 'react-dom'
import Chart from '../../components/chart'
import ButtonPokemon from '../../components/buttonPokemon'
import { toFirstUpperCase } from '../../scripts/toFirstUpperCase'
import { INITIAL_VALUE } from '../../components/search'
import { formatData, formatHeight, formatWeight, getDamageRelation } from '../../scripts/utils'

const Image = styled.img`
    width: 100%;
    height: auto;
    margin: 0 auto;
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: white;
  padding-bottom: 10%;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`

const PokedexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
`

const Pokedex = ( {
  pokemon,
  advantage,
  weakness,
  previousPokemon,
  nextPokemon,
  results,
  setIsResultVisible,
  setIsLoading,
  setTypeSearches,
} ) => {

  const [data, axisX] = formatData( pokemon.stats )

  const [isRender, setIsRender] = React.useState( false )

  React.useEffect( () => {
    setIsResultVisible( false )
    setTypeSearches( INITIAL_VALUE )
    setIsLoading( false )
    setIsRender( true )
  }, [pokemon] )


  return (

    <Container>

      <Head>
        <title>{ toFirstUpperCase( pokemon.name ) }</title>
        <link rel="icon" href={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png` } />
        <link rel="icon" type="image/png" sizes="16x16" href={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png` } />

      </Head>

      { results }

      <Title>{ pokemon.name.toUpperCase() }</Title>
      <PokedexContainer>

        <div style={ {
          flex: '1 1 500px',
          width: '100%',
          textAlign: 'center',
          // background: 'blue',
        } } >

          <div style={ {
            background: ' linear-gradient(to right, #83a4d4, #b6fbff)',
            maxWidth: '400px',
            width: '100%',
            // height: '100%',
            margin: '1rem auto',
            padding: '1rem',
            borderRadius: '4px',
          } } >

            <Image src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( pokemon.id ) }.png` } alt={ `Is the pokemon called ${ pokemon.name }` } />

          </div>

        </div>

        <div style={ {
          flex: '1 1 350px',
          background: 'rgb(83, 166, 210)',
          padding: '1rem',
          margin: '1rem',
          borderRadius: '4px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'auto auto'

        } } >
          <div>
            <h2>Type</h2>

            <PokemonTypes fontSize='16px' types={ pokemon.types } />

            <h2>Advantage</h2>

            <PokemonTypes fontSize='16px' types={ advantage } isDamageRelation={ true } />

            <h2>Weakness</h2>

            <PokemonTypes fontSize='16px' types={ weakness } isDamageRelation={ true } />

          </div>
          <div>

            <p>
              Height: { formatHeight( pokemon.height ) }
            </p>
            <p>
              Weight: { formatWeight( pokemon.weight ) }
            </p>

          </div>
        </div>

        <div
          style={ {
            flex: '1 1 400px',
            alignSelf: 'flex-end',
            height: '200px',
            maxWidth: '600px',
            background: 'none',
            marginBottom: '2rem',
          } } >

          <Chart
            axisY={ -1 }
            axisX={ axisX }
            data={ data }
            maxValue={ Math.max( ...data ) }
          />

        </div>

      </PokedexContainer>

      {

        isRender ?
          ReactDOM.createPortal( <ButtonPokemon
            previousPokemon={ previousPokemon }
            nextPokemon={ nextPokemon }
          />, document.body )
          : null

      }

    </Container>

  )
}


Pokedex.getInitialProps = async ( ctx: any ) => {

  const id = parseInt( ctx.query.id );
  const previousId = id - 1;
  const nextId = id + 1;

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

export default Pokedex