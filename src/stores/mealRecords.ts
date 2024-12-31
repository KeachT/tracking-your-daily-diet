import { create } from 'zustand'

export type MealRecordsState = {
  mealRecords: any
  setMealRecords: (mealRecords: any) => void
}

export const useMealRecordsStore = create<MealRecordsState>((set) => ({
  mealRecords: [],
  setMealRecords: (newMealRecords) =>
    set(() => ({ mealRecords: newMealRecords })),
}))
