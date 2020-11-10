import React from 'react'
// import styledomponents'
import styled from '@emotion/styled'

export const TypesColors = [
  {
    "color": "#A4ACAF",
    "name": "normal"
  },
  {
    "color": "#D56723",
    "name": "fighting"
  },
  {
    "color": "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
    "name": "flying"
  },
  {
    "color": "#B97FC9",
    "name": "poison"
  },
  {
    "color": "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
    "name": "ground"
  },
  {
    "color": "#A38C21",
    "name": "rock"
  },
  {
    "color": "#729F3F",
    "name": "bug"
  },
  {
    "color": "#7B62A3",
    "name": "ghost"
  },
  {
    "color": "#9EB7B8",
    "name": "steel"
  },
  {
    "color": "#FD7D24",
    "name": "fire"
  },
  {
    "color": "#4592C4",
    "name": "water"
  },
  {
    "color": "#9BCC50",
    "name": "grass"
  },
  {
    "color": "#EED535",
    "name": "electric"
  },
  {
    "color": "#F366B9",
    "name": "psychic"
  },
  {
    "color": "#51C4E7",
    "name": "ice"
  },
  {
    "color": "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
    "name": "dragon"
  },
  {
    "color": "#707070",
    "name": "dark"
  },
  {
    "color": "#FDB9E9",
    "name": "fairy"
  },
  {
    "color": "gray",
    "name": "unknown"
  },
  {
    "color": "black",
    "name": "shadow"
  }]


function Container( { type, isDamageRelation, fontSize } ) {

  function x() {
    if ( isDamageRelation ) {
      const { color } = TypesColors.find( element => element.name === type.name )
      return color
    } else {
      const { color } = TypesColors.find( element => element.name === type.type.name )
      return color
    }
  }

  const ContainerStyle = styled.div`
  background: ${ x() };
  /* color: white; */
  display: inline-block;
  width: min-content;
  font-size: ${ fontSize };
  border-radius: 4px;
  padding: calc(${ fontSize } * 0.36) calc(${ fontSize } * 0.72);
  margin-top: 4px;
  margin-right: 6px;
 `

  return (
    <ContainerStyle>

      {
        isDamageRelation ?
          type.name
          :
          type.type.name
      }
    </ContainerStyle>
  )
}


function PokemonTypes( { types = [], isDamageRelation = false, fontSize = '11px' } ) {
  return (
    <div>
      {
        types.map( ( type, index: number ) => ( <Container key={ index } isDamageRelation={ isDamageRelation } type={ type } fontSize={ fontSize } /> ) )
      }
    </div>
  )
}

export default PokemonTypes
