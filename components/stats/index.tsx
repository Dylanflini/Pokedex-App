import React from 'react'
import styled from '@emotion/styled'


function Chart( { baseState, name } ) {

  const Container = styled.div`
    margin: .25rem;
  `

  const Bar = styled.div`
    background-color: lightblue;
    width: 1rem;
    height: ${ baseState }px;
    margin: 0 auto;
  `

  const P = styled.p`
    margin: 0;
    padding-top: 1rem;
    font-size: .8rem;
    width: 4rem;
    height: 2rem;
  `

  return (
    <Container>
      <Bar title={ baseState } />
      <P>{ name.replace('-', ' ') }</P>
    </Container>
  )
}

function Stats( { stats } ) {

  const Section = styled.section`
  display:flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
`

  return (
    <Section>
      {
        stats.map( ( stat: any ) => {
          return ( <Chart baseState={ stat.base_stat } name={ stat.stat.name } /> )
        } )
      }
    </Section>
  )
}

export default Stats
