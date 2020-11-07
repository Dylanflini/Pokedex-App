import React from 'react'
import styled from '@emotion/styled'

export default function FlexContainer( {children } ) {
    const Container = styled.div`
    margin: 0;
    padding: 0;
    margin: 0 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &::after{
        content: '';
        flex: auto;
    }
    `
    return (
        <Container>
            {children}
        </Container>
    )
}
