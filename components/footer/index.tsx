import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(224,0,48);
  position: fixed;
  bottom: 0;
  width: 100%;
`
const P = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
`

function Footer( { text, version, isRelative = false } ) {
  return (
    <Container>
      <P>{ text }{ new Date().getFullYear() } { version } </P>
    </Container>
  )
}

export default Footer
