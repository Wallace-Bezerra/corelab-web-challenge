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
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDeleteNote } from '@/hooks/useDeleteNote'
import { useUpdateFavorite } from '@/hooks/useUpdateFavorite'
import { queryClient } from '@/context/QueryContext'
import { useMutation } from 'react-query'
import { handleUpdateNote } from '@/services/notes'
import { AnimatePresence, motion } from 'framer-motion'
import { setTimeout } from 'timers'

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
        setTimeout(() => {
          setIsEditNote(false)
        }, 1000)
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

  const onSubmit: SubmitHandler<EditNoteFormData> = async (data) => {
    const dataEdit = { ...data, color }
    mutation.mutate(dataEdit)
  }

  return (
    <ContainerCardTodo
      key={note.id}
      color={color}
      onSubmit={handleSubmit(onSubmit)}
      layout
      transition={{
        layout: { duration: 0.4 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
      <AnimatePresence>
        {isEditNote && (
          <CardTodoTextArea
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            {...register('content')}
            placeholder={
              errors.content ? errors.content?.message : 'Digite sua nota'
            }
            defaultValue={note.content}
            spellCheck="false"
          />
        )}

        {!isEditNote && <CardTodoContent>{note.content}</CardTodoContent>}
      </AnimatePresence>
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
          <AnimatePresence>
            {isOpenColorPicker && (
              <ColorPicker
                setColor={setColor}
                note={note}
                setIsOpenColorPicker={setIsOpenColorPicker}
              />
            )}
          </AnimatePresence>
        </EditOptions>
        <EditOptions>
          <AnimatePresence>
            {isValid && isEditNote && (
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10, opacity: 0 }}
              >
                <Image
                  src={checkEdit}
                  width={20}
                  onClick={handleSubmit(onSubmit)}
                  alt=""
                />
              </motion.div>
            )}
          </AnimatePresence>
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
