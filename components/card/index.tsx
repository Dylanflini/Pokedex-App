import React from 'react'
import { CardContainer, Image, Title, Description } from './styles'

interface card {
  title: string,
  imageUrl: string,
  children: React.ReactNode,
}

function Card( { title, imageUrl, children }: card ) {

  return (
    <CardContainer>
      <Image src={ imageUrl } />
      <Title>{ title }</Title>
      <Description>{ children }</Description>
    </CardContainer>
  )
}

export default Card
