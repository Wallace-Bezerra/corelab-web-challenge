import { EditNoteFormData } from '@/components/CardTodo'
import { CreateNoteFormData } from '@/components/CreateTodo'
import { Note } from '@/components/ListCardNotes'
import { api } from '@/lib/api'

export const handleColorNote = async (
  color: string,
  setColor: (color: string) => void,
  note: Note,
) => {
  setColor(color)
  await api.patch(`/notes/${note.id}`, {
    title: note.title,
    isFavorite: note.isFavorite,
    content: note.content,
    color,
  })
}

export const handleDeleteNote = async (id: string) => {
  await api.delete(`/notes/${id}`)
}

export const handleUpdateNote = async (data: EditNoteFormData, id: string) => {
  const response = await api.patch(`/notes/${id}`, data)
  return response.data
}
export const handleCreateNote = async (data: CreateNoteFormData) => {
  await api.post('/notes', data)
}
export const handleIsFavorite = async (note: Note) => {
  await api.patch(`/notes/${note.id}`, {
    title: note.title,
    content: note.content,
    isFavorite: !note.isFavorite,
    color: note.color,
  })
}

export const fetchNote = async () => {
  const response = await api<Note[]>('/notes')
  return response.data
}
