import React from 'react'
import styles from './styles.module.scss'

export default function Spinner( { width = 100 }: SpinnerType ) {

  const style = {
    height: `${ width }px`,
    width: `${ width }px`,
    left: `calc( 50% - ${ width / 2 }px )`,
  }

  return (
    <div style={ style } className={ styles.container } >
      <div></div>
    </div>
  )
}

type SpinnerType = {
  width?: number,
}