import styled from '@emotion/styled'

export const PokemonContainer = styled.div`
  --auto-grid-min-size: 9rem;
  background: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`

export const Loading = styled.img`
  position: fixed;
  top: 50%;
  left: calc(50% - 40px);
  width: 80px;
  height: auto;
  margin: 5px auto;
  display: block;
  z-index: 1000;
`

export const Container = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 6px;
  overflow-x: scroll;
  display: flex;
`