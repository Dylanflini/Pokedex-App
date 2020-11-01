import React from 'react'
import styled from '@emotion/styled'

const Form = styled.form`
  padding: 12px;
`

const Input = styled.input`
  padding: 4px;
  width: 300px;
`

export default function Search( { input, setInput, search } ) {

  function handleChange( e: any ) {
    setInput( e.target.value )
  }

  async function handleSubmit( e: any ) {
    e.preventDefault()
    search()
  }

  return (
    <Form onSubmit={ handleSubmit } >
      <Input
        placeholder="type Pokemon name"
        type="text"
        value={ input }
        onChange={ handleChange }
      >
      </Input>
    </Form>
  )
}
