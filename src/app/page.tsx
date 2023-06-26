import { CreateTodo } from '@/components/CreateTodo'
import { Header } from '@/components/Header'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { MainContainer } from './styles'
import { ListCardNotes } from '@/components/ListCardNotes'
import { QueryProvider } from '@/context/QueryContext'

export default function Home() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <CreateTodo />
        <ListCardNotes />
      </MainContainer>
    </QueryProvider>
  )
}
