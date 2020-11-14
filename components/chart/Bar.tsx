import React from 'react'
// @ts-ignore
import { bar_label, bar } from './styles.module.css'

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

type BarType = {
  color?: string,
  value: number,
  maxValue: number,
  holdValue: boolean,
}