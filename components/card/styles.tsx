import styled from '@emotion/styled'

export const CardContainer = styled.div`
  flex: .5 .8 160px;
  max-width: 200px;
  margin: 6px;
  padding: 10px;
  background-color: #c0c0c0;
  font-size: 16px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
  &:hover {
    transform: translateY(-2px);
    /* cursor: pointer; */
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Id = styled.p`
  font-size:10px;
  margin: 0;
  padding: 0;
  margin-bottom: 6px;
`

export const Title = styled.p`
  font-size:16px;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
`

export const Description = styled.p`
  font-size:12px;
  /* background-color: red; */
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  height: max-content;
`