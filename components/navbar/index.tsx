import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

type navbar = {
  buscador: React.ReactNode,
  pokemonsFound: number,
  isResultVisible: boolean,
}

function NavBar( { buscador, pokemonsFound, isResultVisible }: navbar ) {
  return (
    <nav className={ styles.nav } >
      <ul className={ styles.container } >
        <li className={ styles.nav_item } >
          <Link href='/' >
            <img className={ styles.brand } src="/pokemon_icon.svg" />
          </Link>

          { buscador }
        </li>
        {
          isResultVisible ?
            <p className={ styles.pokemon_found } >Pokemons found: { pokemonsFound }</p> : null
        }
      </ul>
    </nav >
  )
}

export default NavBar
