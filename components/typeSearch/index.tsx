import React from 'react'
import Card from '../card'
import styled from '@emotion/styled'
import useGetPokemons from '../../hooks/useGetPokemons'
import Button from '../Button'

const FlexContainer = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  &::after{
    content: '';
    flex: auto;
  }
`

const Option = styled.option`
  /* background-color: blue;
  font-size: 20px; */
`
const Select = styled.select`
  width: 80px;
  padding: 2px 4px;
  background-color: lightblue;
  border-radius: 2px;
  border: 0px;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`

const Form = styled.form`
  margin: 12px;
`

const Loading = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px auto;
  display: block;
`

export default function TypeSearch( { options, initialPokemons } ) {

  const INITIAL_VALUE = 'all'
  const [value, setValue] = React.useState( INITIAL_VALUE )
  const [isShowMore, setIsShowMore] = React.useState( true )

  const [pokemons, handleReset, isLoading] = useGetPokemons( initialPokemons, INITIAL_VALUE, value, isShowMore )

  async function handleOnChange( e: any ) {
    handleReset()
    setValue( e.target.value )
  }
  async function handleClick() {
    setIsShowMore( !isShowMore )
  }

  return (
    <>
      <Form>
        <span>Select type of Pokemon </span>
        <Select value={ value } onChange={ handleOnChange }>
          <Option value={ INITIAL_VALUE }>{ INITIAL_VALUE }</Option>
          {
            options.map( ( { name }, i: number ) => {
              return ( <Option key={ i } value={ name }>{ name }</Option> )
            } )
          }
        </Select>
      </Form>
      <Button color='#c01611' onClick={ handleReset } >Resetear</Button>
      <FlexContainer>
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
      </FlexContainer>
      {isLoading ? <Loading src="/loading.gif" /> : null }

      <Button onClick={ handleClick } >{ pokemons.length === 0 ? 'Search' : 'Show More' }</Button>

    </>
  )
}
