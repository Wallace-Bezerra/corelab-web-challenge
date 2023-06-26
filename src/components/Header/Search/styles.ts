import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 530px;
  width: 100%;
  padding: 8px 9px;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
`
export const Input = styled.input`
  background-color: #ffffff;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14;
  ::placeholder {
    color: #9a9a9a;
    font-size: 14px;
  }
  :focus-visible {
    outline: none;
  }
`
