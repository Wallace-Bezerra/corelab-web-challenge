import React, { useEffect, useRef } from 'react'
import { ColorOption, ContainerColorPicker } from './styles'
import { Note } from '@/components/ListCardNotes'
import { handleColorNote } from '@/services/notes'

interface ColorPickerProps {
  note: Note
  setIsOpenColorPicker: (bool: boolean) => void
  setColor: (color: string) => void
}
export const colors = [
  {
    color: '#BAE2FF',
    name: 'azul',
  },
  {
    color: '#B9FFDD',
    name: 'verde',
  },
  {
    color: '#FFE8AC',
    name: 'laranja',
  },
  {
    color: '#FFCAB9',
    name: 'rosa',
  },
  {
    color: '#F99494',
    name: 'rosa',
  },
  {
    color: '#9DD6FF',
    name: 'azul',
  },
  {
    color: '#ECA1FF',
    name: 'rosa',
  },
  {
    color: '#DAFF8B',
    name: 'verde',
  },
  {
    color: '#FFA285',
    name: 'laranja',
  },
  {
    color: '#CDCDCD',
    name: 'cinza',
  },
  {
    color: '#979797',
    name: 'cinza',
  },
  {
    color: '#A99A7C',
    name: 'cinza',
  },
]
export const ColorPicker = ({
  setIsOpenColorPicker,
  setColor,
  note,
}: ColorPickerProps) => {
  const colorOptionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        colorOptionsRef.current &&
        !colorOptionsRef.current.contains(event.target as Node)
      ) {
        setIsOpenColorPicker(false)
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [setIsOpenColorPicker])
  return (
    <ContainerColorPicker ref={colorOptionsRef}>
      {colors.map(({ color }) => {
        return (
          <ColorOption
            key={color}
            onClick={() => {
              setIsOpenColorPicker(false)
              handleColorNote(color, setColor, note)
            }}
            color={color}
          />
        )
      })}
    </ContainerColorPicker>
  )
}
