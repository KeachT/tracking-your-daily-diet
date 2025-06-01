import { create } from 'zustand'

import { DailyMealRecord } from '../API'

export type WeeklyDailyMealRecordsState = {
  weeklyDailyMealRecords: DailyMealRecord[]
  setWeeklyDailyMealRecords: (weeklyDailyMealRecords: DailyMealRecord[]) => void
}

export const useWeeklyDailyMealRecordsStore =
  create<WeeklyDailyMealRecordsState>((set) => ({
    weeklyDailyMealRecords: [],
    setWeeklyDailyMealRecords: (newWeeklyDailyMealRecords) =>
      set(() => ({ weeklyDailyMealRecords: newWeeklyDailyMealRecords })),
  }))
