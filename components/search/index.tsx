import React from 'react'
import { fetchPokemon, DEFAULT_POKEMON } from '../../scripts/fetchPokemon'
import Card from '../card'
import styled from '@emotion/styled'

const Form = styled.form`
  padding: 12px;
`

const Input = styled.input`
  /* margin: 12px; */
  padding: 4px;
  width: 300px;
`
const Label = styled.label`
  margin: 12px;
`

const Container = styled.div`
  max-width: 200px;
  margin: 6px;
`

function Search() {

  const [input, setInput] = React.useState( '' )
  const [pokemon, setPokemon] = React.useState( DEFAULT_POKEMON )

  function handleChange( e: any ) {
    setInput( e.target.value )
  }

  async function handleSubmit( e: any ) {
    e.preventDefault()
    setPokemon( await fetchPokemon( input ) )
  }

  async function handleInputBlur() {
    setPokemon( await fetchPokemon( input ) )
  }

  return (
    <>
      <Form onSubmit={ handleSubmit } >
        <Input
          placeholder="type Pokemon by name or number"
          type="text"
          value={ input }
          onChange={ handleChange }
          onBlur={ handleInputBlur }
        >
        </Input>
      </Form>

      <Container>
        { pokemon.wasFound === true ?
          <Card
            id={ pokemon.id }
            name={ pokemon.name }
            types={ pokemon.types }
            /> :
          null }
      </Container>
    </>
  )
}

export default Search