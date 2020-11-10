import Link from 'next/link'
import React from 'react'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Card from '../card'
import { Image } from '../card/styles'
import PokemonTypes from '../pokemonTypes'
import styled from '@emotion/styled'

const Body = styled.div`
  width: 100%;
`

const Id = styled.div`
margin-top: 4px;
text-align: right;
`

type DivProps = PokemonCard;

const Pokemon = React.forwardRef<HTMLDivElement, DivProps>( ( { name, id, types }, ref ) => {

  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( id ) }.png`

  const LinkWithImage = () => (
    <Link href={ `/pokedex/${ name }` } >
      <Image src={ imageUrl } alt={ `pokemon ${ name }` } />
    </Link>
  )

  return (
    <>
      {
        ref ?
          <Card title={ name } imageUrl={ imageUrl } linkWithImage={ <LinkWithImage /> } >
            <Body>
              <div ref={ ref } >
                <PokemonTypes types={ types } />
                <Id >{ id }</Id>
              </div>
            </Body>
          </Card >
          :
          <Card title={ name } imageUrl={ imageUrl } linkWithImage={ <LinkWithImage /> } >
            <Body>
              <PokemonTypes types={ types } />
              <Id >{ id }</Id>
            </Body>
          </Card >
      }

    </>

  )
} )

export default React.memo( Pokemon, PokemonPropsAreEqual )

function PokemonPropsAreEqual( prevPokemon, nextPokemon ) {
  return prevPokemon.id === nextPokemon.id
}

function normalizeId( id: number ): number {

  if ( id < 100 && id < 10000 ) {
    const x: string = id.toString()
    return addZeroLeft( x )
  } else {
    return id
  }

  function addZeroLeft( string: string ) {
    if ( string.length < 3 ) {
      string = "0".concat( string )
      return addZeroLeft( string )
    } else {
      return string
    }
  }

}