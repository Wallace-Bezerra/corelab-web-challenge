'use client'

import React from 'react'
import { ContainerHeader, ContainerLogo } from './styles'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import Search from './Search'

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Image src={Logo} alt="logo CoreNotes" />
        <span>CoreNotes</span>
      </ContainerLogo>
      <Search />
    </ContainerHeader>
  )
}
