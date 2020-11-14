import React from 'react'
// @ts-ignore
import { chart, chart_bar } from './styles.module.css'
import Bar from './Bar'
import { AxisX, AxisY } from './Axis'


export default function Chart( {
  axisY = 4,
  axisX,
  data,
  maxValue = 400,
  holdValue = true,
  height = '300px',
  barColor = 'lightblue',
}: ChartType ) {

  return (
    <div style={ { height: `${ height }` } } className={ chart }>
      {
        isNoValidNumber( axisY ) ? <span ></span> : <AxisY data={ axisY } maxValue={ maxValue } />
      }
      <div className={ chart_bar }>
        {
          data.map( ( element, index ) => (
            <Bar
              key={ index }
              color={ barColor }
              holdValue={ holdValue }
              value={ element }
              maxValue={ maxValue }
            />
          ) )
        }
      </div>
      <span></span>
      <AxisX data={ axisX } />
    </div>
  )

}

function isNoValidNumber( value: number ) {

  switch ( Math.sign( value ) ) {
    case 1:
      return false
    case -1:
      return true
    case 0:
      return true
    case -0:
      return true
    default:
      return true
  }
}

type ChartType = {
  axisY?: number,
  axisX: any[],
  data: any[],
  maxValue: number,
  holdValue?: boolean,
  height?: string,
  barColor?: string,
}