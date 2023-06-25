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
import {
  CreateTodoInputFavorite,
  InputFavoriteWrapper,
  Line,
} from '../CreateTodo/styles'
import { useState } from 'react'
import closeNote from '@/assets/images/closeNote.svg'
import colorEdit from '@/assets/images/colorEdit.svg'
import editNote from '@/assets/images/editNote.svg'
import checkEdit from '@/assets/images/check.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { ColorPicker } from './ColorPicker'
import { Note } from '../ListCardTodos'
import { FavoriteIcon } from '../FavoriteIcon'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '@/lib/api'
import { useServiceNotes } from '@/hooks/useServiceNotes'

interface CardTodoProps {
  note: Note
}
export const CardTodo = ({ note }: CardTodoProps) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const [color, setColor] = useState(note.color)
  const { handleColorNote, handleDeleteNote, handleIsFavorite } =
    useServiceNotes(note)

  const editNoteSchema = z.object({
    content: z.string().nonempty('Conteúdo é obrigatório'),
    title: z.string().nonempty('Titulo é obrigatório'),
    isFavorite: z.boolean(),
  })

  type EditNoteFormData = z.infer<typeof editNoteSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EditNoteFormData>({
    resolver: zodResolver(editNoteSchema),
  })
  console.log(errors)

  const onSubmit = async (data: EditNoteFormData) => {
    const dataEdit = { ...data, color }
    await api.patch(`/notes/${note.id}`, dataEdit)
    setIsEditNote(false)
  }

  return (
    <ContainerCardTodo
      onSubmit={handleSubmit(onSubmit)}
      key={note.id}
      color={color}
    >
      <CardTodoHeader>
        {isEditNote && (
          <CardTodoInput
            placeholder={errors.title ? errors.title?.message : 'Titulo'}
            defaultValue={note.title}
            {...register('title')}
          />
        )}
        {!isEditNote && <p>{note.title}</p>}
        <InputFavoriteWrapper>
          <CreateTodoInputFavorite
            type="checkbox"
            defaultChecked={note.isFavorite}
            {...register('isFavorite')}
            onClick={() => handleIsFavorite(note.isFavorite)}
          />
          <FavoriteIcon />
        </InputFavoriteWrapper>
        <Line />
      </CardTodoHeader>
      {isEditNote && (
        <CardTodoTextArea
          {...register('content')}
          placeholder={
            errors.content ? errors.content?.message : 'Criar nota...'
          }
          defaultValue={note.content}
          spellCheck="false"
        />
      )}
      {!isEditNote && (
        <p style={{ flexGrow: '1', paddingTop: '20px' }}>{note.content}</p>
      )}

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
            <ColorPicker
              setColor={setColor}
              handleColorNote={handleColorNote}
              setIsOpenColorPicker={setIsOpenColorPicker}
            />
          )}
        </EditOptions>
        <EditOptions>
          {isValid && isEditNote && (
            <Image src={checkEdit} onClick={handleSubmit(onSubmit)} alt="" />
          )}
          <Image src={closeNote} width={16} onClick={handleDeleteNote} alt="" />
        </EditOptions>
      </CardTodoFooter>
    </ContainerCardTodo>
  )
}
