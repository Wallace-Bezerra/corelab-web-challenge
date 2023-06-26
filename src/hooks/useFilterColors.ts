import { colors } from '@/components/CardTodo/ColorPicker'

export const useFilterColors = () => {
  const colorsFilter: Record<string, string[]> = {}
  colors.forEach((colorItem) => {
    if (colorsFilter[colorItem.name]) {
      colorsFilter[colorItem.name] = [
        ...colorsFilter[colorItem.name],
        colorItem.color,
      ]
    } else {
      colorsFilter[colorItem.name] = [colorItem.color]
    }
  })
  return colorsFilter
}
