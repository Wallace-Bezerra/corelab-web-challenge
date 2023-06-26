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
  CardTodoTitle,
  CardTodoContent,
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
import { Note } from '../ListCardNotes'
import { FavoriteIcon } from '../FavoriteIcon'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useDeleteNote } from '@/hooks/useDeleteNote'
import { useUpdateFavorite } from '@/hooks/useUpdateFavorite'
import { queryClient } from '@/context/QueryContext'
import { useMutation } from 'react-query'
import { handleUpdateNote } from '@/services/notes'

interface CardTodoProps {
  note: Note
}

const editNoteSchema = z.object({
  content: z.string().nonempty('Conteúdo é obrigatório'),
  title: z.string().nonempty('Titulo é obrigatório'),
  isFavorite: z.boolean(),
})
export type EditNoteFormData = z.infer<typeof editNoteSchema>

export const CardTodo = ({ note }: CardTodoProps) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const [color, setColor] = useState(note.color)
  const deleteNote = useDeleteNote(note.id)
  const updateFavorite = useUpdateFavorite(note)

  const mutation = useMutation(
    (data: EditNoteFormData) => handleUpdateNote(data, note.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes')
        setIsEditNote(false)
      },
    },
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EditNoteFormData>({
    resolver: zodResolver(editNoteSchema),
  })

  const onSubmit = async (data: EditNoteFormData) => {
    const dataEdit = { ...data, color }
    mutation.mutate(dataEdit)
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
        {!isEditNote && <CardTodoTitle>{note.title}</CardTodoTitle>}
        <InputFavoriteWrapper>
          <CreateTodoInputFavorite
            type="checkbox"
            defaultChecked={note.isFavorite}
            {...register('isFavorite')}
            onClick={() => updateFavorite.mutate()}
          />
          <FavoriteIcon />
        </InputFavoriteWrapper>
        <Line />
      </CardTodoHeader>
      {isEditNote && (
        <CardTodoTextArea
          {...register('content')}
          placeholder={
            errors.content ? errors.content?.message : 'Digite sua nota'
          }
          defaultValue={note.content}
          spellCheck="false"
        />
      )}
      {!isEditNote && <CardTodoContent>{note.content}</CardTodoContent>}

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
              note={note}
              setIsOpenColorPicker={setIsOpenColorPicker}
            />
          )}
        </EditOptions>
        <EditOptions>
          {isValid && isEditNote && (
            <Image src={checkEdit} onClick={handleSubmit(onSubmit)} alt="" />
          )}
          <Image
            src={closeNote}
            width={16}
            onClick={() => deleteNote.mutate()}
            alt=""
          />
        </EditOptions>
      </CardTodoFooter>
    </ContainerCardTodo>
  )
}
