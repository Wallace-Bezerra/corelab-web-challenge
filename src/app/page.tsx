import { CardTodo } from '@/components/CardTodo'
import { CreateTodo } from '@/components/CreateTodo'
import { Header } from '@/components/Header'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { CardContainer, MainContainer } from './styles'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <CreateTodo />
        <CardContainer>
          <CardTodo />
        </CardContainer>
      </MainContainer>
    </>
  )
}
