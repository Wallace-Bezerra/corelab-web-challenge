import React, { useEffect, useRef } from 'react'
import { ColorOption, ContainerColorPicker } from './styles'

interface ColorPickerProps {
  handleColorNote: (
    color: string,
    setColor: (color: string) => void,
  ) => Promise<void>
  setIsOpenColorPicker: (bool: boolean) => void
  setColor: (color: string) => void
}
const colors = [
  '#BAE2FF',
  '#B9FFDD',
  '#FFE8AC',
  '#FFCAB9',
  '#F99494',
  '#9DD6FF',
  '#ECA1FF',
  '#DAFF8B',
  '#FFA285',
  '#CDCDCD',
  '#979797',
  '#A99A7C',
]
export const ColorPicker = ({
  setColor,
  handleColorNote,
  setIsOpenColorPicker,
}: ColorPickerProps) => {
  const colorOptionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const clickOutside = (event: any) => {
      if (
        colorOptionsRef.current &&
        !colorOptionsRef.current.contains(event.target)
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
      {colors.map((color, index) => {
        return (
          <ColorOption
            key={index}
            onClick={() => {
              setIsOpenColorPicker(false)
              handleColorNote(color, setColor)
            }}
            color={color}
          />
        )
      })}
    </ContainerColorPicker>
  )
}
