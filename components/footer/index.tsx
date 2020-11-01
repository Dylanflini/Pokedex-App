import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(224,0,48);
`
const P = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
`

function Footer() {
  return (
    <Container>
      <P>© SVR Ingeniería {new Date().getFullYear()}</P>
    </Container>
  )
}

export default Footer
