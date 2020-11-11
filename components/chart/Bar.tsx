import React from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import { bar_label, bar } from './styles.module.css'

type BarType = {
  color?: string,
  value: number,
  maxValue: number,
  holdValue: boolean,
}

export default function Bar( {
  color = '#e95858',
  value,
  holdValue = true,
  maxValue = 100
}: BarType ) {

  const [isHover, setIsHover] = React.useState( false )

  const style = {
    height: `${ ( value / maxValue ) * 100 }%`,
    background: `${ color }`,
  }

  return (
    <>
      {
        holdValue
          ?
          <div className={ bar } style={ style } >
            <div className={ bar_label }>{ value }</div>
          </div>
          :
          <div style={ style }
            onMouseEnter={ () => setIsHover( true ) }
            onMouseLeave={ () => setIsHover( false ) }
          >
            {
              isHover ? <div className={ bar_label }>{ value }</div> : null
            }
          </div>
      }
    </>

  )
}
