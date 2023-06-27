'use client'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type ContainerCardTodoProps = {
  color: string
}
export const ContainerCardTodo = styled(motion.form)<ContainerCardTodoProps>`
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: ${({ color }) => color || '#fff'};
  transition: background 0.5s ease;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
  border-radius: 25px;
  font-size: 14px;
  img {
    cursor: pointer;
  }
  @media (max-width: 400px) {
    max-width: initial;
    min-width: initial;
    min-height: 360px;
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
export const CardTodoInput = styled(motion.input)`
  background-color: red;
  width: 100%;
  color: #333;
  background: none;
  border: none;
  font-size: 14px;
  :focus-within {
    outline: none;
  }
`
export const CardTodoFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardTodoTextArea = styled(motion.textarea)`
  background-color: inherit;
  padding-top: 20px;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
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
  transition: background-color 0.4s ease;
  :hover {
    background-color: ${({ isEditColor }) => !isEditColor && '#E8E8E8'};
  }
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
  transition: background-color 0.4s ease;
  :hover {
    background-color: ${({ isEditNote }) => !isEditNote && '#E8E8E8'};
  }
`
export const CardTodoTitle = styled.p``
export const CardTodoContent = styled(motion.p)`
  flex-grow: 1;
  padding-top: 20px;
`
