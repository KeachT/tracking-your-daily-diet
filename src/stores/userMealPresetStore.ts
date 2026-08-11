import { create } from 'zustand'

import { UserMealPreset } from '../API'

export type UserMealPresetLoadStatus = 'idle' | 'loading' | 'ready' | 'error'

export type UserMealPresetState = {
  userMealPreset: UserMealPreset | null
  loadStatus: UserMealPresetLoadStatus
  setUserMealPreset: (userMealPreset: UserMealPreset | null) => void
  setLoadStatus: (loadStatus: UserMealPresetLoadStatus) => void
  reset: () => void
}

export const useUserMealPresetStore = create<UserMealPresetState>((set) => ({
  userMealPreset: null,
  loadStatus: 'idle',
  setUserMealPreset: (userMealPreset) => set({ userMealPreset }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
  reset: () => set({ userMealPreset: null, loadStatus: 'ready' }),
}))
