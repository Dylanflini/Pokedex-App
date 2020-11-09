import React, { useState } from 'react'
// import styled from 'styled-components'
// import Button from '../boton'
import { Form, Input } from './styles'

type search = {
  setPokemonSearches: ( input ) => void
}

const initialInput = ''

export default function Search( { setPokemonSearches }: search ) {

  const [input, setInput] = useState( initialInput )

  function handleChange( e: any ) {
    setInput( e.target.value )
  }

  const handleSubmit = ( e: any ) => {
    e.preventDefault()

    if(input.length > 2){
      setInput( initialInput )
      setPokemonSearches( input )
    }

  }

  return (
    <Form onSubmit={ handleSubmit } >
      <Input
        placeholder="Type Pokemon name"
        type="text"
        value={ input }
        onChange={ handleChange }
      >
      </Input>
      {/* <Button onClick={ handleSubmit } > Search </Button> */}
    </Form>
  )
}
