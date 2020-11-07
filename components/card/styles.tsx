import styled from '@emotion/styled'

export const CardContainer = styled.div`
  flex: 1 1 160px;
  max-width: 300px;
  margin: 6px;
  padding: 10px;
  background-color: hotpink;
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

export const Name = styled.p`
  font-size:16px;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
`