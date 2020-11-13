// import Link from 'next/link'
import React from 'react'
// import Image from 'next/image'
import { CardContainer, Image, Title, Description } from './styles'

interface card {
  title: string,
  imageUrl: string,
  alt: string,
  children: React.ReactNode,
  linkWithImage?: React.ReactNode,
}

function Card( { title, imageUrl, alt, children, linkWithImage }: card ) {

  return (
    <CardContainer>
      {
        linkWithImage
          ? linkWithImage
          : <Image src={ imageUrl } alt={ alt } />
      }
      <Title>{ title }</Title>
      <Description>{ children }</Description>
    </CardContainer>
  )
}

export default Card
