import styled from '@emotion/styled'

export const Form = styled.form`
  text-align: center;
  display: flex;
`

export const Input = styled.input`
  /* flex: 1 1 250px; */
  /* width: 100%; */
  min-width: 140px;
  max-width: 350px;
  padding: 4px;
  height: 20px;
  margin: 0 1rem;
`

// export const Option = styled.option`
  /* font-size: 20px; */
// `

export const Select = styled.select`
  flex: 1 1 200px;
  padding: 2px 4px;
  margin-left: 8px;
  background-color: lightblue;
  border-radius: 2px;
  border: 0px;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`