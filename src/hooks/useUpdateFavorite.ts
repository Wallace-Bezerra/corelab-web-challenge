import { handleIsFavorite } from '@/services/notes'
import { Note } from '@/components/ListCardNotes'
import { queryClient } from '@/context/QueryContext'
import { useMutation } from 'react-query'

export const useUpdateFavorite = (note: Note) => {
  const mutation = useMutation(() => handleIsFavorite(note), {
    onSuccess: () => {
      queryClient.invalidateQueries('notes')
    },
  })
  return mutation
}
