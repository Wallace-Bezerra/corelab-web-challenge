'use client'
import {
  CreateTodoForm,
  CreateTodoInput,
  CreateTodoHeader,
  Line,
  CreateTodoTextArea,
  InputFavoriteWrapper,
  CreateTodoInputFavorite,
  AddNote,
} from './styles'
import { AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FavoriteIcon } from '../FavoriteIcon'
import { useMutation } from 'react-query'
import { handleCreateNote } from '@/services/notes'
import { queryClient } from '@/context/QueryContext'

const creteNoteSchema = z.object({
  content: z.string().nonempty('Conteúdo é obrigatório'),
  title: z.string().nonempty('Titulo é obrigatório'),
  isFavorite: z.boolean(),
})

export type CreateNoteFormData = z.infer<typeof creteNoteSchema>

export const CreateTodo = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateNoteFormData>({
    resolver: zodResolver(creteNoteSchema),
  })
  const { ref, ...rest } = register('content')
  const mutation = useMutation(handleCreateNote, {
    onSuccess: () => {
      queryClient.invalidateQueries('notes')
    },
  })

  const onSubmit: SubmitHandler<CreateNoteFormData> = async (data) => {
    mutation.mutate(data)
    reset()
  }

  const handleChange = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '100%'
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = scrollHeight + 'px'
    }
  }

  return (
    <CreateTodoForm onSubmit={handleSubmit(onSubmit)}>
      <CreateTodoHeader>
        <CreateTodoInput
          {...register('title')}
          isError={Boolean(errors.title)}
          placeholder={errors.title ? errors.title?.message : 'Titulo'}
        />
        <InputFavoriteWrapper>
          <CreateTodoInputFavorite
            type="checkbox"
            {...register('isFavorite')}
          />
          <FavoriteIcon />
        </InputFavoriteWrapper>
      </CreateTodoHeader>
      <Line />
      <CreateTodoTextArea
        {...rest}
        ref={(e) => {
          ref(e)
          textAreaRef.current = e
        }}
        spellCheck="false"
        placeholder={errors.content ? errors.content?.message : 'Criar nota...'}
        isError={Boolean(errors.content)}
        onInput={handleChange}
      />
      <AnimatePresence>
        {isValid && (
          <AddNote
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ stiffness: 20 }}
            type="submit"
          >
            Adicionar
          </AddNote>
        )}
      </AnimatePresence>
    </CreateTodoForm>
  )
}
