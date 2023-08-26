import { create } from 'zustand'

export type DailyGoalState = {
  dailyGoalId: string
  calories: number
  protein: number
  fat: number
  carbohydrates: number
  version: number

  setDailyGoalId: (dailyGoalId: string) => void
  setCalories: (calories: number) => void
  setProtein: (protein: number) => void
  setFat: (fat: number) => void
  setCarbohydrates: (carbohydrates: number) => void
  setVersion: (version: number) => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoalId: '',
  calories: 0,
  protein: 0,
  fat: 0,
  carbohydrates: 0,
  version: 0,

  setDailyGoalId: (newDailyGoalId) =>
    set(() => ({ dailyGoalId: newDailyGoalId })),

  setCalories: (newCalories) => set(() => ({ calories: newCalories })),

  setProtein: (newProtein) => set(() => ({ protein: newProtein })),

  setFat: (newFat) => set(() => ({ fat: newFat })),

  setCarbohydrates: (newCarbohydrates) =>
    set(() => ({ carbohydrates: newCarbohydrates })),

  setVersion: (newVersion) => set(() => ({ version: newVersion })),
}))
