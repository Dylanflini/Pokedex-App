import React from 'react'
// import { render, fireEvent, waitFor, screen, RenderResult } from '@testing-library/react'
// import '../button/node_modules/@testing-library/jest-dom/extend-expect'
// import PokemonTypes, { TypesColors } from './index'

describe( "Testing PokemonTypes component", () => {

  // test('should not be render without prop type',()=>{
  //   expect(render( <PokemonTypes/> )).toThrowError()
  // })


  test( 'should be change color by Props type', () => {
    // const inputType = TypesColors[0].name
    // const color = TypesColors[0].color

    // const renderResult: RenderResult = render( <PokemonTypes type={ inputType } /> )
    // const div = renderResult.queryByText( inputType )

    // expect( div ).toHaveStyle( { background: color } )
  } )

  test( 'should be not match colors', () => {

    // const inputType = TypesColors[1].name
    // const color = TypesColors[4].color

    // const renderResult: RenderResult = render( <PokemonTypes type={ inputType } /> )
    // const div = renderResult.queryByText( inputType )

    // expect( div ).not.toHaveStyle( { background: color } )
  } )

} )


