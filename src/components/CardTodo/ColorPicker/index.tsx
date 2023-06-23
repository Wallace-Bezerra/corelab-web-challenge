import React from 'react'
import { ColorOption, ContainerColorPicker } from './styles'

interface ColorPickerProps {
  handleColorNote: (color: string) => void
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
export const ColorPicker = ({ handleColorNote }: ColorPickerProps) => {
  return (
    <ContainerColorPicker>
      {colors.map((color, index) => {
        return (
          <ColorOption
            key={index}
            onClick={() => handleColorNote(color)}
            color={color}
          />
        )
      })}
    </ContainerColorPicker>
  )
}
