import { Note } from '@/components/ListCardTodos'
import { api } from '@/lib/api'

export const useServiceNotes = (note: Note) => {
  const handleColorNote = async (
    color: string,
    setColor: (color: string) => void,
  ) => {
    setColor(color)
    await api.patch(`/notes/${note.id}`, {
      title: note.title,
      isFavorite: note.isFavorite,
      content: note.content,
      color,
    })
  }
  const handleDeleteNote = async () => {
    await api.delete(`/notes/${note.id}`)
  }
  const handleIsFavorite = async (favorite: boolean) => {
    await api.patch(`/notes/${note.id}`, {
      title: note.title,
      content: note.content,
      isFavorite: !favorite,
      color: note.color,
    })
  }
  return { handleColorNote, handleDeleteNote, handleIsFavorite }
}
