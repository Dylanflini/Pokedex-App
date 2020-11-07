// import Link from 'next/link'
import React from 'react'
import { CardContainer, Image, Title, Description } from './styles'

interface card {
  title: string,
  imageUrl: string,
  children: React.ReactNode,
  linkWithImage?: React.ReactNode,
}

function Card( { title, imageUrl, children, linkWithImage }: card ) {

  return (
    <CardContainer>
      {
        linkWithImage
          ? linkWithImage
          : <Image src={ imageUrl } />
      }
      <Title>{ title }</Title>
      <Description>{ children }</Description>
    </CardContainer>
  )
}

export default Card
