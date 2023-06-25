'use client'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { CardTodo } from '../CardTodo'
import { CardContainer } from './styles'

export interface Note {
  id: string
  title: string
  content: string
  isFavorite: boolean
  color: string
  createdAt: Date
}
export const ListCardTodos = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const fetchNote = async () => {
    const response = await api<Note[]>('/notes')
    setNotes(response.data)
  }
  useEffect(() => {
    fetchNote()
  }, [])
  return (
    <CardContainer>
      {notes.map((note) => {
        return <CardTodo note={note} key={note.id} />
      })}
    </CardContainer>
  )
}
