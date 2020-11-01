import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.nav`
  height: 50px;
  background-color: rgb(224,0,48);
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`

function NavBar() {
  return (
    <Nav>
      <Link href='/' >index</Link>
    </Nav>
  )
}

export default NavBar
