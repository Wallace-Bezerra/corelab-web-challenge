import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  justify-items: flex-start;
  gap: 35px;
  transition: all 1s ease;
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
export const Title = styled.h3`
  color: #464646;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  padding-left: 20px;
`
