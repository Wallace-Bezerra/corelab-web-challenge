import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  gap: 35px;
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
export const Title = styled.h3`
  color: #464646;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  padding-left: 20px;
`
