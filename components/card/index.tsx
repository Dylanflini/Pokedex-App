import React from 'react'
import styles from './styles.module.scss'

function Card( { title, imageUrl, alt, children, linkWithImage }: card ) {

  return (
    <div className={ styles.container }>
      {
        linkWithImage
          ? linkWithImage
          : <img className={ styles.img } src={ imageUrl } alt={ alt } />
      }
      <p className={ styles.title } >{ title }</p>
      <div className={ styles.description } >{ children }</div>
    </div>
  )
}

export default Card

type card = {
  title: string,
  imageUrl: string,
  alt: string,
  children: React.ReactNode,
  linkWithImage?: React.ReactNode,
}
