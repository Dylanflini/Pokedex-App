import React from 'react'
import PokemonTypes from '../pokemonTypes'

export default function DamageRelation( { title, weakness, pokemonType } ) {

  function filterSameTypes( weakness, pokemonType, index = 0 ) {

    if ( index >= pokemonType.length || pokemonType.length === 1 ) {
      return weakness
    } else {
      const found = weakness.filter( ( item ) => item.name !== pokemonType[index].type.name )
      return filterSameTypes( found, pokemonType, index + 1 )
    }

  }

  const filtrado = filterSameTypes( weakness, pokemonType )

  return (
    <>
      <h2>{ title }</h2>
      <PokemonTypes types={ filtrado } isDamageRelation={true} />
    </>
  )
}
