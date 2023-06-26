'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface QueryProviderProps {
  children: ReactNode
}
export const queryClient = new QueryClient()

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
