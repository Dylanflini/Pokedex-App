import Link from 'next/link'
import React from 'react'
import { PokemonCard } from '../../scripts/fetchPokemon'
import Card from '../card'
import { Image } from '../card/styles'
import PokemonTypes from '../pokemonTypes'

function Pokemon( { name, id, types }: PokemonCard ) {

  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId( id ) }.png`

  const LinkWithImage = () => (
    <Link href={ `/pokedex/${ name }` } >
      <Image src={ imageUrl } />
    </Link>
  )

  return (
    <Card title={ name } imageUrl={ imageUrl } linkWithImage={ <LinkWithImage /> } >
      <PokemonTypes types={ types } />
    </Card>
  )
}

export default React.memo( Pokemon, PokemonPropsAreEqual )

function PokemonPropsAreEqual( prevPokemon, nextPokemon ) {
  return prevPokemon.id === nextPokemon.id
}

function normalizeId( id: number ) {

  if ( id < 100 ) {
    const x: string = id.toString()
    return addZeroLeft( x )
  } else {
    return id.toString()
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