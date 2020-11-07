import Link from 'next/link'
import React from 'react'
import Card from '../card'
import PokemonTypes from '../pokemonTypes'

function Pokemon( { name, id, types } ) {

  return (
    <Link href={ `/pokedex/${name}` } >
      {/* <div> */}
        <Card title={ name } imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ normalizeId(id) }.png`} >
          <PokemonTypes types={types} />
        </Card>
      {/* </div> */}
    </Link>
  )
}

export default React.memo( Pokemon)

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