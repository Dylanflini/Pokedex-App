import React from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
// @ts-ignore
import { button, left } from './styles.module.css'
import { toFirstUpperCase } from '../../scripts/toFirstUpperCase'
import { PokemonCard } from '../../scripts/fetchPokemon'
import { Loading } from '../results/styles'

type buttonPokemonType = {
  previousPokemon: PokemonCard,
  nextPokemon: PokemonCard,
}


export const Text = styled.text`
  font-size: 1.4rem;
  fill: white;
  &:hover{
    cursor: pointer;
  }
`


export default function ButtonPokemon( {
  previousPokemon,
  nextPokemon
}: buttonPokemonType ) {

  const [isLoading, setIsLoading] = React.useState( false )

  const toogleLoading = () => setIsLoading( !isLoading )

  React.useEffect( () => {
    console.log( 'renderizado' )
    console.log( isLoading )
    setIsLoading( false )
  }, [nextPokemon] )


  React.useEffect( () => {
    document.addEventListener( 'keyup', keyboard )
    return () => {
      document.removeEventListener( 'keyup', keyboard )
    }
  } )

  function keyboard( e ) {
    console.log( e.key )
    switch ( e.key ) {
      case 'ArrowLeft':
        toPreviousPokemon()
        break;
      case 'ArrowRight':
        toNextPokemon()
        break;

      default:
        break;
    }
  }


  const router = useRouter()

  function toPreviousPokemon() {

    toogleLoading()

    router.push( {
      pathname: `/pokedex/${ previousPokemon.name }`,
      query: {
        id: previousPokemon.id,
        types: JSON.stringify( previousPokemon.types ),

      }
    } )
  }

  function toNextPokemon() {

    toogleLoading()

    router.push( {
      pathname: `/pokedex/${ nextPokemon.name }`,
      query: {
        id: nextPokemon.id,
        types: JSON.stringify( nextPokemon.types ),
      }
    } )
  }


  const Container = styled.div`
    position: fixed;
    width: 100%;
    
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1200px;
    margin: 0;
  `

  return (
    <Container >

      {isLoading ? ReactDOM.createPortal( <Loading src="/loading.gif" />, document.body ) : null }

      <div onClick={ toPreviousPokemon } style={ { paddingRight: '.1rem' } } >
        <svg className={ `${ button }` } viewBox="0 0 371 74" xmlns="http://www.w3.org/2000/svg">

          <path className={ `${ left }` } d="M151.781 2.18342C148.967 0.748234 145.853 0 142.694 0H0V74H371V28.051H207.306C204.147 28.051 201.033 27.3028 198.219 25.8676L151.781 2.18342Z" />
          <circle r="15" transform="matrix(4.37114e-08 1 1 -4.37114e-08 65 51)" fill="#BBBBBB" />
          <path d="M60.1351 51.4054L65 58.2973L67.027 58.2973L62.1622 51.4054L67.027 44.5135L65 44.5135L60.1351 51.4054Z" fill="white" />

          <Text x='100' y='75%' >{ toFirstUpperCase( previousPokemon.name ) }</Text>

        </svg>
      </div>
      <div onClick={ toNextPokemon } style={ { paddingLeft: '.1rem' } } >

        <svg className={ `${ button } ` } viewBox="0 0 371 74" xmlns="http://www.w3.org/2000/svg">

          <path className={ `${ left }` } d="M219.219 2.18342C222.033 0.748234 225.147 0 228.306 0H371V74H0V28.051H163.694C166.853 28.051 169.967 27.3028 172.781 25.8676L219.219 2.18342Z" />
          <circle cx="306" cy="51" r="15" fill="#BBBBBB" />
          <path d="M310.865 51.4054L306 58.2973L303.973 58.2973L308.838 51.4054L303.973 44.5135L306 44.5135L310.865 51.4054Z" fill="white" />

          <Text x='180' y='75%' >{ toFirstUpperCase( nextPokemon.name ) }</Text>
        </svg>

      </div >
    </Container >
  )
}
