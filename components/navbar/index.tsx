import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* align-content: center; */
  justify-content: flex-start;

  position: fixed;
  z-index: 500;
  width:100%;
  /* max-width: 1200px; */
  /* height: 50px; */
  height: max-content;
  background-color: rgb(224,0,48);
  color: white;
  padding: 10px 0;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`

const NavItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`

const P = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 1;
  text-align: right;
  margin-right: 10px;
`

const Brand = styled.img`
  width: 50px;
  &:hover{
    cursor: pointer
  }
`

type navbar = {
  buscador: React.ReactNode,
  // typeSearch: React.ReactNode,
  pokemonsFound: number,
}

function NavBar( { buscador, pokemonsFound }: navbar ) {
  return (
    <Nav>
      <NavItem>
        <Link href='/' >
          <a style={ { textAlign: 'left', flexGrow: 1, marginLeft: '10px', display: 'inline' } }>
            <Brand src="/pokemon_icon.svg" />
          </a>
        </Link>

        { buscador }
        {/* { typeSearch } */}
      </NavItem>

      <P>Pokemons found: { pokemonsFound }</P>
    </Nav>
  )
}

export default NavBar
