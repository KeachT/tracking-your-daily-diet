import { create } from 'zustand'

import { MealRecord } from '../../../API'

export type MealRecordsState = {
  mealRecords: MealRecord[]
  setMealRecords: (mealRecords: MealRecord[]) => void
}

export const useMealRecordsStore = create<MealRecordsState>((set) => ({
  mealRecords: [],
  setMealRecords: (newMealRecords) =>
    set(() => ({ mealRecords: newMealRecords })),
}))
