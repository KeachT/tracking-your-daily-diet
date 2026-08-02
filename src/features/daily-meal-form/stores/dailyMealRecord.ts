import { create } from 'zustand'

import { DailyMealRecord } from '../../../API'

export type DailyMealRecordLoadStatus = 'idle' | 'loading' | 'ready' | 'error'

export type DailyMealRecordState = {
  dailyMealRecord: DailyMealRecord | null
  loadStatus: DailyMealRecordLoadStatus
  setDailyMealRecord: (dailyMealRecord: DailyMealRecord | null) => void
  setLoadStatus: (loadStatus: DailyMealRecordLoadStatus) => void
}

export const useDailyMealRecordStore = create<DailyMealRecordState>((set) => ({
  dailyMealRecord: null,
  loadStatus: 'idle',
  setDailyMealRecord: (newDailyMealRecord) =>
    set({ dailyMealRecord: newDailyMealRecord }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
}))
