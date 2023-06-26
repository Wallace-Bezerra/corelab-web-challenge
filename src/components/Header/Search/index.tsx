import Image from 'next/image'
import search from '@/assets/images/search.svg'
import { ContainerInput, Input } from './styles'
import { useSearchStore } from '@/store/searchStore'

export default function Search() {
  const setSearchValue = useSearchStore((store) => store.setSearchValue)
  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="Pesquisar Notas"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Image src={search} alt="" />
    </ContainerInput>
  )
}
