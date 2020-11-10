import React, { useState } from 'react'
// import styled from 'styled-components'
// import Button from '../boton'
import { Form, Input, Select, Option } from './styles'

export const INITIAL_VALUE = 'select type'
export const ALL_TYPE = 'all'

type search = {
  setPokemonSearches: ( input ) => void,
  setTypeSearches: ( input ) => void,
  type: string,
  options: any[]

}

const initialInput = ''

export default function Search( { setPokemonSearches, options, type, setTypeSearches }: search ) {

  const [input, setInput] = useState( initialInput )

  function handleInputChange( e: any ) {
    setInput( e.target.value )
  }

  const handleSubmit = ( e: any ) => {
    e.preventDefault()

    // if ( input.length > 2 ) {
    // setInput( initialInput )
    setPokemonSearches( input )
    // }
  }

  function handleSelectOnChange( e: any ) {
    setTypeSearches( e.target.value )
  }

  const [isShowMore, setIsShowMore] = React.useState( true )

  // function handleClick() {
  //   setIsShowMore( !isShowMore )
  // }

  return (
    <Form onSubmit={ handleSubmit } >
      <Input
        placeholder="Type Pokemon name"
        type="text"
        value={ input }
        onChange={ handleInputChange }
      >
      </Input>

      {/* <span>Select type of Pokemon </span> */ }
      <Select value={ type } onChange={ handleSelectOnChange }>
        <Option value={ INITIAL_VALUE }>{ INITIAL_VALUE }</Option>
        <Option value={ ALL_TYPE }>{ ALL_TYPE }</Option>
        {
          options.map( ( { name }, i: number ) => {
            return ( <Option key={ i } value={ name }>{ name }</Option> )
          } )
        }
      </Select>

      {/* <Button onClick={ handleSubmit } > Search </Button> */ }
    </Form>
  )
}
