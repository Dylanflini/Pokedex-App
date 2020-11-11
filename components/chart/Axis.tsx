import React from 'react'
// @ts-ignore
import { axis, axisX, axisY, axisXItem, axisYItem } from './styles.module.css'

type AxisYType = {
  data: number,
  maxValue: number,
}

export function AxisY( { data, maxValue = 100 }: AxisYType ) {

  const y = accumulateAxisY( maxValue, data )

  return (
    <div
      className={ `${ axis } ${ axisY }` }
    >
      {
        y.map( ( element, index ) => (
          <AxisYItem
            key={ index }
            maxValue={ maxValue }
            valor={ element }
          >
            { element }
          </AxisYItem>
        ) )
      }
    </div>
  )
}


const AxisYItem = ( { children, valor, maxValue = 100 } ) => {

  const style = {
    bottom: `${ ( ( valor * 0.94 ) / maxValue ) * 100 }%`,
  }

  return (
    <div className={ `${ axisYItem }` } style={ style }  >
      {children }
    </div>
  )
}


function accumulateAxisY( maxValue, numberOfAxisY, index = 0, arr = [] ) {

  if ( index > numberOfAxisY ) {
    return arr
  }

  const part = ( maxValue / numberOfAxisY ) * index

  arr = [...arr, Math.round( part )]

  return accumulateAxisY( maxValue, numberOfAxisY, index + 1, arr )

}

type AxisXType = {
  data: string[],
}

export function AxisX( { data }: AxisXType ) {

  return (
    <div
      className={ `${ axis } ${ axisX }` }
    >
      {
        data.map( ( element, index ) =>
          ( <div
            className={ axisXItem } key={ index }
          >
            { element }
          </div> )
        )
      }
    </div>
  )
}
