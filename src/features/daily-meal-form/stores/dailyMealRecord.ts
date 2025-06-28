import { create } from 'zustand'

import { DailyMealRecord } from '../../../API'

export type DailyMealRecordState = {
  dailyMealRecord: DailyMealRecord | null
  setDailyMealRecord: (dailyMealRecord: DailyMealRecord | null) => void
}

export const useDailyMealRecordStore = create<DailyMealRecordState>((set) => ({
  dailyMealRecord: null,
  setDailyMealRecord: (newDailyMealRecord) =>
    set(() => ({ dailyMealRecord: newDailyMealRecord })),
}))
