import { create } from 'zustand'

import { UserMealPreset } from '../API'
import { FetchStatus } from '../constants'

/** A user may keep at most this many presets. */
export const MAX_USER_MEAL_PRESETS = 3

export type UserMealPresetState = {
  userMealPresets: UserMealPreset[]
  selectedPresetId: string | null
  loadStatus: FetchStatus
  setUserMealPresets: (userMealPresets: UserMealPreset[]) => void
  setSelectedPresetId: (selectedPresetId: string | null) => void
  upsertUserMealPreset: (userMealPreset: UserMealPreset) => void
  removeUserMealPreset: (id: string) => void
  setLoadStatus: (loadStatus: FetchStatus) => void
  reset: () => void
}

export const useUserMealPresetStore = create<UserMealPresetState>((set) => ({
  userMealPresets: [],
  selectedPresetId: null,
  loadStatus: 'idle',
  setUserMealPresets: (userMealPresets) =>
    set((state) => ({
      userMealPresets,
      // Keep the current selection when it survived the reload, otherwise fall
      // back to the first preset so the form always has something to edit.
      selectedPresetId: userMealPresets.some(
        (preset) => preset.id === state.selectedPresetId,
      )
        ? state.selectedPresetId
        : (userMealPresets[0]?.id ?? null),
    })),
  setSelectedPresetId: (selectedPresetId) => set({ selectedPresetId }),
  upsertUserMealPreset: (userMealPreset) =>
    set((state) => {
      const index = state.userMealPresets.findIndex(
        (preset) => preset.id === userMealPreset.id,
      )
      if (index === -1) {
        return {
          userMealPresets: [...state.userMealPresets, userMealPreset],
          selectedPresetId: userMealPreset.id,
        }
      }
      const userMealPresets = [...state.userMealPresets]
      userMealPresets[index] = userMealPreset
      return { userMealPresets }
    }),
  removeUserMealPreset: (id) =>
    set((state) => {
      const userMealPresets = state.userMealPresets.filter(
        (preset) => preset.id !== id,
      )
      return {
        userMealPresets,
        selectedPresetId:
          state.selectedPresetId === id
            ? (userMealPresets[0]?.id ?? null)
            : state.selectedPresetId,
      }
    }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
  reset: () =>
    set({ userMealPresets: [], selectedPresetId: null, loadStatus: 'ready' }),
}))

/**
 * The preset the user is currently editing, or null when none is selected
 * (no presets exist yet, or they have not loaded).
 */
export const selectSelectedUserMealPreset = (
  state: UserMealPresetState,
): UserMealPreset | null =>
  state.userMealPresets.find(
    (preset) => preset.id === state.selectedPresetId,
  ) ?? null
