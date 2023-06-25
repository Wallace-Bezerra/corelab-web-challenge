import { CreateTodo } from '@/components/CreateTodo'
import { Header } from '@/components/Header'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { MainContainer } from './styles'
import { ListCardTodos } from '@/components/ListCardTodos'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <CreateTodo />
        <ListCardTodos />
      </MainContainer>
    </>
  )
}
