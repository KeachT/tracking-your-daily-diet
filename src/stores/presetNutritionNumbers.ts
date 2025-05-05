import { create } from 'zustand'

export type PresetNutritionNumbersState = {
  presetCalories: number
  presetProtein: number
  presetFat: number
  presetCarbohydrates: number
  setPresetCalories: (presetCalories: number) => void
  setPresetProtein: (presetProtein: number) => void
  setPresetFat: (presetFat: number) => void
  setPresetCarbohydrates: (presetCarbohydrates: number) => void
}

export const usePresetNutritionNumbersStore =
  create<PresetNutritionNumbersState>()((set) => ({
    presetCalories: 0,
    presetProtein: 0,
    presetFat: 0,
    presetCarbohydrates: 0,
    setPresetCalories: (newPresetCalories) =>
      set(() => ({ presetCalories: newPresetCalories })),
    setPresetProtein: (newPresetProtein) =>
      set(() => ({ presetProtein: newPresetProtein })),
    setPresetFat: (newPresetFat) => set(() => ({ presetFat: newPresetFat })),
    setPresetCarbohydrates: (newPresetCarbohydrates) =>
      set(() => ({ presetCarbohydrates: newPresetCarbohydrates })),
  }))
