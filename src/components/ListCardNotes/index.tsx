'use client'
import { CardTodo } from '../CardTodo'
import { CardContainer, Title } from './styles'
import { useQuery } from 'react-query'
import { fetchNote } from '@/services/notes'
import { useSearchStore } from '@/store/searchStore'
import { useFilterColors } from '@/hooks/useFilterColors'
import { Loading } from '../Loading'

export interface Note {
  id: string
  title: string
  content: string
  isFavorite: boolean
  color: string
  createdAt: Date
}
export const ListCardNotes = () => {
  const { data: notes, isLoading } = useQuery('notes', fetchNote)
  const searchValue = useSearchStore((store) => store.searchValue)
  const colorsFilter = useFilterColors()

  const filteredNotes = notes?.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      note.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      colorsFilter[searchValue.toLowerCase()]?.includes(note.color)
    )
  })

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div>
            <Title>Favoritos</Title>
            <CardContainer>
              {filteredNotes
                ?.filter((item) => item.isFavorite)
                .map((note) => {
                  return <CardTodo key={note.id} note={note} />
                })}
            </CardContainer>
          </div>
          <div>
            <Title>Outros</Title>
            <CardContainer>
              {filteredNotes
                ?.filter((item) => !item.isFavorite)
                .map((note) => {
                  return <CardTodo note={note} key={note.id} />
                })}
            </CardContainer>
          </div>
        </>
      )}
    </>
  )
}
