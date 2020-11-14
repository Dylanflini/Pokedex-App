import React, { useState } from 'react'
import { Form, Input, Select } from './styles'

export const INITIAL_VALUE = 'select type'
export const ALL_TYPE = 'all'

type search = {
  setPokemonSearches: ( input ) => void,
  setTypeSearches: ( input ) => void,
  type: string,
  options: any[]
}

const initialInput = ''

export default function Search( { setPokemonSearches, options=[], type, setTypeSearches }: search ) {

  const [input, setInput] = useState( initialInput )

  function handleInputChange( e: any ) {
    setInput( e.target.value )
  }

  const handleSubmit = ( e: any ) => {
    e.preventDefault()

    setPokemonSearches( input )
  }

  function handleSelectOnChange( e: any ) {
    setTypeSearches( e.target.value )
  }

  return (
    <Form onSubmit={ handleSubmit } >
      <Input
        placeholder="Pokemon name"
        type="text"
        value={ input }
        onChange={ handleInputChange }
      >
      </Input>

      <Select value={ type } onChange={ handleSelectOnChange }>
        <option value={ INITIAL_VALUE }>{ INITIAL_VALUE }</option>
        <option value={ ALL_TYPE }>{ ALL_TYPE }</option>
        {
          options.map( ( { name }, i: number ) => {
            return ( <option key={ i } value={ name }>{ name }</option> )
          } )
        }
      </Select>

      {/* <Button onClick={ handleSubmit } > Search </Button> */ }
    </Form>
  )
}
