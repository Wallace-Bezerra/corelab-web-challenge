import Image from 'next/image'
import search from '@/assets/images/search.svg'
import { ContainerInput, Input } from './styles'

export default function Search() {
  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="Pesquisar Notas"
        // value={searchValue}
        // onChange={(event) => setSearchValue(event.target.value)}
      />
      <Image src={search} alt="" />
    </ContainerInput>
  )
}
