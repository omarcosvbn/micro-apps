'use client'

import { create } from 'zustand'

type AppTitleStore = {
  currentAppTitle: string
  setCurrentAppTitle: (title: string) => void
}

export const useAppTitle = create<AppTitleStore>((set) => ({
  currentAppTitle: '',
  setCurrentAppTitle: (title: string) => set({ currentAppTitle: title }),
}))
