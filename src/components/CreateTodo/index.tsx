'use client'
import Image from 'next/image'
import {
  CreateTodoForm,
  CreateTodoInput,
  CreateTodoHeader,
  Line,
  CreateTodoTextArea,
} from './styles'
import startFavorite from '@/assets/images/starFavorite.svg'
import { useRef } from 'react'
export const CreateTodo = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '100%'
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + 'px'
    }
  }

  return (
    <CreateTodoForm>
      <CreateTodoHeader>
        <CreateTodoInput placeholder="Titulo" />
        <Image src={startFavorite} alt="Icone favorito" />
      </CreateTodoHeader>
      <Line />

      <CreateTodoTextArea
        name="todoList"
        placeholder="Criar nota..."
        ref={textAreaRef}
        onChange={handleChange}
        // onChange={onChangeTextAreaNew}
        // value={textAreaNew}
      ></CreateTodoTextArea>
      {/* <CardHeader>
          <Title
            onChange={onChangeTitleNew}
            value={titleNew}
            placeholder="Titulo"
          />
          <div onClick={onChangeChecked}>
            <Image
              src={isFavorited ? favoriteCheked : favoriteNoCheked}
              alt=""
            />
          </div>
        </CardHeader>
        <TextAreaNew
          name="todoList"
          placeholder="Criar nota..."
          onChange={onChangeTextAreaNew}
          value={textAreaNew}
        ></TextAreaNew> */}
    </CreateTodoForm>
  )
}
