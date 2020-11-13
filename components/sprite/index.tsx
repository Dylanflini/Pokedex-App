import React from 'react'
import styled from '@emotion/styled'

type SpriteType = {
  width?: string,
  idPokemon: number,
}

export default function Sprite( { width = '50px', idPokemon }: SpriteType ) {

  const Image = styled.img`
  width: ${ width };
  max-width: 150px;
  height: auto;
  display: inline;
  margin: 0 10px;
`

  return (
    <Image src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ idPokemon }.png` } />
  )
}
