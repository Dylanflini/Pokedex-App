import styled from '@emotion/styled'

export const PokemonContainer = styled.div`
  --auto-grid-min-size: 9rem;
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
`

export const Loading = styled.img`
  position: absolute;
  top: 50%;
  left: calc(50% - 40px);
  width: 80px;
  height: auto;
  margin: 5px auto;
  display: block;
`

export const Container = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 6px;
  overflow-x: scroll;
  display: flex;
`