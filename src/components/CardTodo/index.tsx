'use client'
import Image from 'next/image'
import {
  ContainerCardTodo,
  CardTodoHeader,
  CardTodoInput,
  EditOptions,
  CardTodoFooter,
  CardTodoTextArea,
  EditColor,
  EditNote,
} from './styles'
import startFavorite from '@/assets/images/starFavorite.svg'
import { Line } from '../CreateTodo/styles'
import { useRef, useState } from 'react'
import closeNote from '@/assets/images/closeNote.svg'
import colorEdit from '@/assets/images/colorEdit.svg'
import editNote from '@/assets/images/editNote.svg'
import { ColorPicker } from './ColorPicker'
export const CardTodo = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const [color, setColor] = useState('')
  const handleColorNote = (color: string) => {
    setColor(color)
  }
  const handleChange = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '100%'
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + 'px'
    }
  }
  return (
    <ContainerCardTodo color={color}>
      <CardTodoHeader>
        <CardTodoInput placeholder="Titulo" defaultValue={'Titulo'} />
        <Image src={startFavorite} alt="Icone favorito" />
        <Line />
      </CardTodoHeader>

      <CardTodoTextArea
        name="todoList"
        placeholder="Criar nota..."
        ref={textAreaRef}
        onChange={handleChange}
        // onChange={onChangeTextAreaNew}
        // value={textAreaNew}
      >
        Conteudo
      </CardTodoTextArea>
      <CardTodoFooter>
        <EditOptions>
          <EditNote
            isEditNote={isEditNote}
            onClick={() => setIsEditNote((prev) => !prev)}
          >
            <Image src={editNote} alt="" />
          </EditNote>
          <EditColor
            isEditColor={isOpenColorPicker}
            onClick={() => setIsOpenColorPicker((prev) => !prev)}
          >
            <Image src={colorEdit} alt="" />
          </EditColor>
          {isOpenColorPicker && (
            <ColorPicker handleColorNote={handleColorNote} />
          )}
        </EditOptions>
        <Image src={closeNote} width={16} alt="" />
      </CardTodoFooter>
    </ContainerCardTodo>
  )
}
