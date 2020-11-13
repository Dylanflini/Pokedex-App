import React from 'react'
import styled from '@emotion/styled'
import { Image } from '../card/styles'

export function Pokedex( { pokemon } ) {
  return (
    <div>
      <Frame>
        <Image src={ pokemon.name }>

        </Image>
      </Frame>
    </div>
  )
}

const Joystick = () => {
  return (
    null
  )
}

export const Frame = ( { children } ) => {

  const Container = styled.div`
  padding: 20px;
  background-color: #afa9a9;
`
  return (
    <Container>
      {children }
    </Container>
  )

}