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

  const resizeColoPicker = () => {
    if (colorOptionsRef.current) {
      const retangulo = colorOptionsRef.current.getBoundingClientRect()
      console.log(retangulo)
      const larguraJanela = window.innerWidth
      let margemEsquerda = '10px'
      if (retangulo.right >= larguraJanela) {
        margemEsquerda = `${retangulo.width - 900}px`
      }
      colorOptionsRef.current.style.marginLeft = margemEsquerda
    }
  }
  useEffect(() => {
    resizeColoPicker()
    window.addEventListener('resize', resizeColoPicker)

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
      window.removeEventListener('resize', resizeColoPicker)
      document.removeEventListener('click', clickOutside)
    }
  }, [setIsOpenColorPicker])
  return (
    <ContainerColorPicker
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 5, opacity: 0 }}
      ref={colorOptionsRef}
    >
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
