import { create } from 'zustand'

import { UserMealPreset } from '../API'

export type UserMealPresetState = {
  userMealPreset: UserMealPreset | null
  setUserMealPreset: (userMealPreset: UserMealPreset | null) => void
  reset: () => void
}

export const useUserMealPresetStore = create<UserMealPresetState>((set) => ({
  userMealPreset: null,
  setUserMealPreset: (userMealPreset) => set({ userMealPreset }),
  reset: () => set({ userMealPreset: null }),
}))
