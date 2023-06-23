'use client'

import styled from 'styled-components'

type ContainerCardTodoProps = {
  color: string
}
export const ContainerCardTodo = styled.div<ContainerCardTodoProps>`
  max-width: 530px;
  width: 100%;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* justify-content: space-between;  */
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: ${({ color }) => color || '#fff'};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
  border-radius: 25px;
  img {
    cursor: pointer;
  }
`

export const CardTodoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  img {
    cursor: pointer;
  }
`
export const CardTodoInput = styled.input`
  background-color: red;
  width: 100%;
  color: #333;
  background: none;
  border: none;
  :focus-within {
    outline: none;
  }
`
export const CardTodoFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardTodoTextArea = styled.textarea`
  background-color: inherit;
  padding-top: 16px;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  :focus-within {
    outline: none;
  }
`

export const EditOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
`
type EditColorProps = {
  isEditColor: boolean
}
export const EditColor = styled.div<EditColorProps>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 28.901px;
  height: 28.901px;
  background-color: ${({ isEditColor }) => isEditColor && '#ffe3b3'};
`

type EditNoteProps = {
  isEditNote: boolean
}
export const EditNote = styled.div<EditNoteProps>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 28.901px;
  height: 28.901px;
  background-color: ${({ isEditNote }) => isEditNote && '#ffe3b3'};
`
