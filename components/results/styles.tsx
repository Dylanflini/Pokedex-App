import styled from '@emotion/styled'

export const PokemonContainer = styled.div`
  --auto-grid-min-size: 9rem;
  background: white;
  min-height: 85vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-template-rows: repeat(4, min-content); //importante
  grid-gap: 1rem;
  padding: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 3.5rem;
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