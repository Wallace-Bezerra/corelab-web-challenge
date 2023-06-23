'use client'
import styled from 'styled-components'

export const CreateTodoForm = styled.form`
  margin: 0 auto;
  /* left: 50%;
  top: 75px; */
  z-index: 2;
  /* transform: translateX(-50%); */
  margin-top: 26px;
  max-width: 530px;
  width: 100%;
  min-height: 100px;
  position: relative;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
  @media (max-width: 800px) {
    border-radius: 25px;
  }
`
export const CreateTodoInput = styled.input`
  background-color: red;
  width: 100%;
  color: #333;
  background: none;
  border: none;
  font-size: 14.2px;
  font-weight: 700;
  ::placeholder {
    color: #333;
  }
  :focus-within {
    outline: none;
  }
`
export const CreateTodoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  img {
    cursor: pointer;
  }
`
export const Line = styled.span`
  background-color: #d9d9d9;
  width: 100%;
  position: absolute;
  height: 1px;
  left: 0px;
  top: 45px;
`
export const CreateTodoTextArea = styled.textarea`
  padding-top: 16px;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  :focus-within {
    outline: none;
  }
`
