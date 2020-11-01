import React from 'react'
import Card from '../card'
import styled from '@emotion/styled'
import useGetPokemonsByNames from '../../hooks/useGetPokemonsByNames'

const Form = styled.form`
  padding: 12px;
`

const Input = styled.input`
  padding: 4px;
  width: 300px;
`
// const Label = styled.label`
//   margin: 12px;
// `
const Loading = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px auto;
  display: block;
`

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

function Search() {

  const [input, setInput] = React.useState( '' )
  const [pokemons, search, isLoading] = useGetPokemonsByNames( input )

  function handleChange( e: any ) {
    setInput( e.target.value )
  }

  async function handleSubmit( e: any ) {
    e.preventDefault()
    search()
  }

  async function handleInputBlur() {
    search()
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

      {isLoading ? <Loading src="/loading.gif" /> : <div style={ { height: '45px' } } ></div> }
      <Container>
        {
          pokemons.map( ( pokemon: any, i: number ) => {
            return ( <Card
              key={ i }
              name={ pokemon.name }
              id={ pokemon.id }
              types={ pokemon.types }
            /> )
          } )
        }
      </Container>
    </>
  )
}

export default Search