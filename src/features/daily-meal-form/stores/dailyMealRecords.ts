import { create } from 'zustand'

import { DailyMealRecord } from '../../../API'

export type DailyMealRecordsState = {
  dailyMealRecords: DailyMealRecord[]
  setDailyMealRecords: (dailyMealRecords: DailyMealRecord[]) => void
}

export const useDailyMealRecordsStore = create<DailyMealRecordsState>(
  (set) => ({
    dailyMealRecords: [],
    setDailyMealRecords: (newDailyMealRecords) =>
      set(() => ({ dailyMealRecords: newDailyMealRecords })),
  })
)
