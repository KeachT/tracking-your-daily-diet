import { create } from 'zustand'

import { MealRecord } from '../API'

export type WeeklyMealRecordsState = {
  weeklyMealRecords: MealRecord[]
  setWeeklyMealRecords: (weeklyMealRecords: MealRecord[]) => void
}

export const useWeeklyMealRecordsStore = create<WeeklyMealRecordsState>(
  (set) => ({
    weeklyMealRecords: [],
    setWeeklyMealRecords: (newWeeklyMealRecords) =>
      set(() => ({ weeklyMealRecords: newWeeklyMealRecords })),
  })
)
