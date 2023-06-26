import { handleDeleteNote } from '@/services/notes'
import { queryClient } from '@/context/QueryContext'
import { useMutation } from 'react-query'

export const useDeleteNote = (id: string) => {
  const mutation = useMutation(() => handleDeleteNote(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('notes')
    },
  })
  return mutation
}
