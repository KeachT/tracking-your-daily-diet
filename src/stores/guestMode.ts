import { create } from 'zustand'

import { clearAllGuestData } from '../api/guest/guest-storage'
import { setGuestModeFlag } from '../api/guest/guestModeFlag'

export type GuestModeState = {
  isGuestMode: boolean
  enterGuestMode: () => void
  exitGuestMode: () => void
}

const getInitialGuestMode = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('guest_mode') === 'true'
}

export const useGuestModeStore = create<GuestModeState>()((set) => {
  const initialGuestMode = getInitialGuestMode()
  setGuestModeFlag(initialGuestMode)

  return {
    isGuestMode: initialGuestMode,
    enterGuestMode: () => {
      localStorage.setItem('guest_mode', 'true')
      setGuestModeFlag(true)
      set({ isGuestMode: true })
    },
    exitGuestMode: () => {
      clearAllGuestData()
      setGuestModeFlag(false)
      set({ isGuestMode: false })
    },
  }
})
