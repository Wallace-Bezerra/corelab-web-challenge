import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
 100%{
  transform: rotate(1turn);
 }
 `
export const LoadinContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  translate: -50%;
  left: 50%;
  .container {
    width: 100px;
    position: relative;
    height: 100px;
    /* border: 10px solid rgba(255, 255, 255, 0.5); */
    border-top: 10px groove #a944e8;
    border-left: 10px groove #a944e8;
    border-right: 10px groove rgba(255, 255, 255, 0.5);
    border-bottom: 10px groove rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0px 4px 50px rgba(131, 46, 183, 1));
    /* border-bottom: 10px solid #832EB7; */
    border-radius: 50%;
    animation: ${spinner} 1.3s linear infinite;
  }
`
