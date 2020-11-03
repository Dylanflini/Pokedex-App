import React from 'react'
import { render, fireEvent, waitFor, screen, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button, { buttonPropsDefault } from './index'

describe( "Testing button", () => {
  test( 'onClick don\'t be called', () => {

    const onClick = jest.fn()

    render( <Button onClick={ onClick } /> )

    expect( onClick ).not.toHaveBeenCalled()
  } )

  test( 'onClick to be called', async () => {

    const onClick = jest.fn()

    const renderResult: RenderResult = render( <Button onClick={ onClick } /> )

    const button = renderResult.getByRole( 'button' )

    fireEvent.click( button )

    expect( onClick ).toHaveBeenCalled()
  } )

  test( 'should be change color when pass this props color', async () => {


    const colorProp = '#c01611'
    const onClick = jest.fn()
    const renderResult: RenderResult = render( <Button onClick={ onClick } color={ colorProp } /> )

    const button = renderResult.getByRole( 'button' )

    expect( button ).toHaveStyle( { background: colorProp } )
  } )

  test( 'should set default color when no pass props color', async () => {


    const onClick = jest.fn()
    const renderResult: RenderResult = render( <Button onClick={ onClick } /> )

    const button = renderResult.getByRole( 'button' )

    expect( button ).toHaveStyle( { background: buttonPropsDefault.color } )
  } )


  test( 'should have Text inside Button when pass this props children as string', async () => {


    const childrenProp = 'Click me'
    const onClick = jest.fn()
    const renderResult: RenderResult = render( <Button onClick={ onClick } >{ childrenProp }</Button> )

    const button = renderResult.getByRole( 'button' )

    expect( button ).toHaveTextContent( childrenProp )
  } )

  test( 'should have Text default inside Button when no pass children props', async () => {

    const onClick = jest.fn()
    const renderResult: RenderResult = render( <Button onClick={ onClick } ></Button> )

    const button = renderResult.getByRole( 'button' )

    expect( button ).toHaveTextContent( buttonPropsDefault.children )
  } )



} )


