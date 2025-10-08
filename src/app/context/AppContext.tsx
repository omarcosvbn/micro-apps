'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  currentAppTitle: string
  setCurrentAppTitle: (title: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentAppTitle, setCurrentAppTitle] = useState<string>('')

  return (
    <AppContext.Provider value={{ currentAppTitle, setCurrentAppTitle }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  return context
}
