'use client'
import { inter } from '@/app/layout'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root {
  /* max-width: 1100px; */
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  min-height:100vh;
  margin: 0 auto;

}
textarea{
    font-family:${inter.style.fontFamily}
  }

body {
  background: #F0F2F5;
}

a {
  color: inherit;
  text-decoration: none;
}
button{
  border: none;
}
ul{
  list-style: none;
}

`
