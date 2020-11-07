import React from 'react'
import styled from '@emotion/styled'
import useGetPokemons from '../../hooks/useGetPokemons'
import Button from '../button'
import PokemonsCard from '../pokemonsCard'

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

export default function TypeSearch( { options } ) {

  const INITIAL_VALUE = 'all'
  const [type, setType] = React.useState( INITIAL_VALUE )
  const [isShowMore, setIsShowMore] = React.useState( true )

  const [pokemons, handleReset, isLoading] = useGetPokemons( INITIAL_VALUE, type, isShowMore )

  function handleOnChange( e: any ) {
    handleReset()
    setType( e.target.value )
  }
  function handleClick() {
    setIsShowMore( !isShowMore )
  }

  // const option = {
  //   rootMargin: '30px',
  //   threshold: 1,
  // }

  
  // const callback = function ( entries, observer ) {
  //   entries.forEach( entry => {
  //     console.log('entrando por observer')
  //   } )
  // }
  
  // const observer = new IntersectionObserver( callback, option );

  // var target = document.querySelector('');
  // observer.observe(target);
  


  return (
    <>
      <Form>
        <span>Select type of Pokemon </span>
        <Select value={ type } onChange={ handleOnChange }>
          <Option value={ INITIAL_VALUE }>{ INITIAL_VALUE }</Option>
          {
            options.map( ( { name }, i: number ) => {
              return ( <Option key={ i } value={ name }>{ name }</Option> )
            } )
          }
        </Select>
      </Form>
      <Button color='#c01611' onClick={ handleReset } >Resetear</Button>
      <PokemonsCard pokemons={ pokemons } />
      {isLoading ? <Loading src="/loading.gif" /> : null }

      <Button onClick={ handleClick } >{ pokemons.length === 0 ? 'Search' : 'Show More' }</Button>

    </>
  )
}
