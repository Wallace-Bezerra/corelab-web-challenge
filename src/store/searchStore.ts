import { create } from 'zustand'

interface StoreProps {
  searchValue: string
  setSearchValue: (value: string) => void
}

export const useSearchStore = create<StoreProps>((set) => ({
  searchValue: '',
  setSearchValue: (value: string) => {
    set({ searchValue: value })
  },
}))
