import { create } from 'zustand'

import { UserMealPreset } from '../API'
import { FetchStatus } from '../constants'

export type UserMealPresetState = {
  userMealPreset: UserMealPreset | null
  loadStatus: FetchStatus
  setUserMealPreset: (userMealPreset: UserMealPreset | null) => void
  setLoadStatus: (loadStatus: FetchStatus) => void
  reset: () => void
}

export const useUserMealPresetStore = create<UserMealPresetState>((set) => ({
  userMealPreset: null,
  loadStatus: 'idle',
  setUserMealPreset: (userMealPreset) => set({ userMealPreset }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
  reset: () => set({ userMealPreset: null, loadStatus: 'ready' }),
}))
