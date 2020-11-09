// import styledled-components'
import styled from '@emotion/styled'

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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