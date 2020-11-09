import React from 'react'
// import styled from 'styled-components'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(224,0,48);
  margin-top: 50px;
`
const P = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
`

function Footer( { text } ) {
  return (
    <Container>
      <P>{ text }{ new Date().getFullYear() }</P>
    </Container>
  )
}

export default Footer
