import React from 'react'
import Link from 'next/link'
// import styled 'styled-components'
import styled from '@emotion/styled'
// import PokemonTypes from '../pokemonTypes'
import { PokemonCard } from '../../scripts/fetchPokemon'
import PokemonTypes from '../pokemonTypes'
// import FlexContainer from '../flexContainer'

const CardContainer = styled.div`
  flex: .8 1 160px;
  max-width: 300px;
  margin: 6px;
  padding: 10px;
  background-color: hotpink;
  font-size: 16px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Id = styled.div`
  font-size:10px;
  margin: 0;
  padding: 0;
  margin-bottom: 6px;
`

const Name = styled.div`
  font-size:16px;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
`
const Card = React.memo(
  ( { id = 0, name = '', types = [] }: PokemonCard ) => {

    if ( id < 100 ) {
      const x: string = id.toString()
      id = addZeroLeft( x )
    }

    function addZeroLeft( string: string ) {
      if ( string.length < 3 ) {
        string = "0".concat( string )
        return addZeroLeft( string )
      } else {
        return string
      }
    }

    return (
      <Link href={ `/pokedex/${ name }` }>
        <a>
          <CardContainer className="hola" >
            <Image src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ id }.png` } alt={ `Is the pokemon called ${ name }` } />
            <Id>Nº: { id }</Id>
            <Name>{ name }</Name>
            <PokemonTypes types={ types } />
          </CardContainer>
        </a>
      </Link>
    )
  }
)

export default function PokemonsCard( { pokemons } ) {
  return (
    // <FlexContainer id="list-pokemons" >
      {
        pokemons.map( ( pokemon: any, i: number ) => {
          return ( <Card
            key={ i }
            name={ pokemon.name }
            id={ pokemon.id }
            types={ pokemon.types }
          /> )
        } )
      }
    // </FlexContainer>
  )
}