import React, { useState } from 'react'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import Button from '../boton'

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Input = styled.input`
  padding: 4px;
  width: 300px;
  height: 20px;
  margin: 0 1rem;
`

type search = {
  setPokemonSearches: ( input ) => void
}

export default function Search( { setPokemonSearches }: search ) {

  const [input, setInput] = useState( '' )

  function handleChange( e: any ) {
    setInput( e.target.value )
  }

  const handleSubmit = ( e: any ) => {
    e.preventDefault()
    setPokemonSearches( input )
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
      <Button onClick={ handleSubmit } > Search </Button>
    </Form>
  )
}
