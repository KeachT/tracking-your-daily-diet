import { create } from 'zustand'

export type WeeklyMealRecordsState = {
  weeklyMealRecords: any
  setWeeklyMealRecords: (weeklyMealRecords: any) => void
}

export const useWeeklyMealRecordsStore = create<WeeklyMealRecordsState>(
  (set) => ({
    weeklyMealRecords: [],
    setWeeklyMealRecords: (newWeeklyMealRecords) =>
      set(() => ({ weeklyMealRecords: newWeeklyMealRecords })),
  })
)
