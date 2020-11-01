import React from 'react'
import PokemonTypes from '../pokemonTypes'

function Weakness( { name } ) {
  return (
    <PokemonTypes type={ name } />
  )
}

function Advantage( { name } ) {
  return (
    <PokemonTypes type={ name } />
  )
}

function DamageRelation( { relation } ) {
  return (
    <>
      <h2>Advantage</h2>
      {
        relation.doubleDamageTo.map( ( element, index ) => {
          return ( <Advantage key={ index } name={ element.name } /> )
        } )
      }
      <h2>Weakness</h2>
      {
        relation.doubleDamageFrom.map( ( element, index ) => {
          return ( <Weakness key={ index } name={ element.name } /> )
        } )
      }
    </>
  )
}

export default DamageRelation
