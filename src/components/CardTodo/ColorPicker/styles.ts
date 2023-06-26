import styled from 'styled-components'

type ColorOptionProps = {
  color: string
}

export const ContainerColorPicker = styled.div`
  border-radius: 9px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 5;
  bottom: -55px;
  left: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px 6px;
  gap: 10px;
  @media (max-width: 800px) {
    width: 300px;
    flex-wrap: wrap;
    bottom: -100px;
  }
`
export const ColorOption = styled.div<ColorOptionProps>`
  width: 36.708px;
  height: 36.708px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};
`
