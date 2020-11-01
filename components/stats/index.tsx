import React from 'react'
import styled from '@emotion/styled'


function Chart( { baseState, name } ) {

  const Container = styled.div`
    margin: .25rem;
  `

  const Bar = styled.div`
    background-color: lightblue;
    border: 1px solid blue;
    width: 1rem;
    border-radius: 4px;
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
      <P>{ name.replace( '-', ' ' ) }</P>
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
    <div>
      <h2>Base point</h2>
      <Section>
        {
          stats.map( ( stat, index ) => {
            return ( <Chart key={index} baseState={ stat.base_stat } name={ stat.stat.name } /> )
          } )
        }
      </Section>
    </div>
  )
}

export default Stats
