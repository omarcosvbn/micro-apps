'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AppTitleStore = {
  currentAppTitle: string
  setCurrentAppTitle: (title: string) => void
}

// Persist the currently selected app title to localStorage so it survives reloads
export const useAppTitle = create<AppTitleStore>()(
  persist(
    (set) => ({
      currentAppTitle: '',
      setCurrentAppTitle: (title: string) => set({ currentAppTitle: title }),
    }),
    {
      name: 'micro-apps-app-title', // localStorage key
      partialize: (state) => ({ currentAppTitle: state.currentAppTitle }),
    }
  )
)
