import React from 'react'
import styled from '@emotion/styled'
import Card from '../card'

const Loading = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px auto;
  display: block;
`

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 6px;
  overflow-x: scroll;
  display: flex;
`

export default function Results( { pokemons, isLoading } ) {
  return (
    <>
      {isLoading ? <Loading src="/loading.gif" /> : null }
      <Container>
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
      </Container>
    </>
  )
}